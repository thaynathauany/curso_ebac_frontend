import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import Loader from '../Loader'
import {
  ApiError,
  CartContainer,
  CartItem,
  CheckoutButton,
  Confirmation,
  EmptyCart,
  ErrorMessage,
  FormGroup,
  FormRow,
  FormTitle,
  Overlay,
  Prices,
  RemoveButton,
  Sidebar
} from './styles'

type Step = 'cart' | 'delivery' | 'payment' | 'confirmation'

type DeliveryData = {
  receiver: string
  description: string
  city: string
  zipCode: string
  number: string
  complement: string
}

type PaymentData = {
  cardName: string
  cardNumber: string
  code: string
  month: string
  year: string
}

type FormErrors<T> = Partial<Record<keyof T, string>>

type ZipCodeResponse = {
  erro?: boolean
  logradouro: string
  localidade: string
}

const initialDelivery: DeliveryData = {
  receiver: '',
  description: '',
  city: '',
  zipCode: '',
  number: '',
  complement: ''
}

const initialPayment: PaymentData = {
  cardName: '',
  cardNumber: '',
  code: '',
  month: '',
  year: ''
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const onlyNumbers = (value: string) => value.replace(/\D/g, '')

const formatZipCode = (value: string) =>
  onlyNumbers(value)
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, '$1-$2')

const formatCardNumber = (value: string) =>
  onlyNumbers(value)
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, '$1 ')

const validateDelivery = (values: DeliveryData) => {
  const errors: FormErrors<DeliveryData> = {}

  if (values.receiver.trim().length < 3) errors.receiver = 'Informe o nome.'
  if (!values.description.trim()) errors.description = 'Informe o endereço.'
  if (!values.city.trim()) errors.city = 'Informe a cidade.'
  if (onlyNumbers(values.zipCode).length !== 8) errors.zipCode = 'CEP inválido.'
  if (!values.number || Number(values.number) <= 0)
    errors.number = 'Número inválido.'

  return errors
}

const validatePayment = (values: PaymentData) => {
  const errors: FormErrors<PaymentData> = {}
  const month = Number(values.month)

  if (values.cardName.trim().length < 3) errors.cardName = 'Informe o nome.'
  if (onlyNumbers(values.cardNumber).length !== 16)
    errors.cardNumber = 'Cartão inválido.'
  if (onlyNumbers(values.code).length !== 3) errors.code = 'CVV inválido.'
  if (month < 1 || month > 12) errors.month = 'Mês inválido.'
  if (onlyNumbers(values.year).length < 2) errors.year = 'Ano inválido.'

  return errors
}

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase] = usePurchaseMutation()
  const [step, setStep] = useState<Step>('cart')
  const [delivery, setDelivery] = useState(initialDelivery)
  const [payment, setPayment] = useState(initialPayment)
  const [deliveryErrors, setDeliveryErrors] = useState<
    FormErrors<DeliveryData>
  >({})
  const [paymentErrors, setPaymentErrors] = useState<FormErrors<PaymentData>>(
    {}
  )
  const [orderId, setOrderId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState('')
  const [isLoadingZipCode, setIsLoadingZipCode] = useState(false)
  const [zipCodeError, setZipCodeError] = useState('')

  const total = items.reduce((sum, item) => sum + item.preco, 0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') dispatch(close())
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dispatch, isOpen])

  const lookupZipCode = async (zipCode: string) => {
    const normalizedZipCode = onlyNumbers(zipCode)

    if (normalizedZipCode.length !== 8) return

    setIsLoadingZipCode(true)
    setZipCodeError('')

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${normalizedZipCode}/json/`
      )

      if (!response.ok) throw new Error('Falha ao consultar o CEP')

      const data: ZipCodeResponse = await response.json()

      if (data.erro) {
        setZipCodeError('CEP não encontrado.')
        return
      }

      setDelivery((current) => ({
        ...current,
        description: data.logradouro || current.description,
        city: data.localidade || current.city
      }))
      setDeliveryErrors((current) => ({
        ...current,
        zipCode: undefined,
        description: undefined,
        city: undefined
      }))
    } catch {
      setZipCodeError(
        'Não foi possível buscar o CEP. Preencha o endereço manualmente.'
      )
    } finally {
      setIsLoadingZipCode(false)
    }
  }

  const updateDelivery = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const nextValue =
      name === 'zipCode'
        ? formatZipCode(value)
        : name === 'number'
        ? onlyNumbers(value).slice(0, 6)
        : value

    setDelivery((current) => ({ ...current, [name]: nextValue }))

    if (name === 'zipCode') {
      setZipCodeError('')

      if (onlyNumbers(nextValue).length === 8) lookupZipCode(nextValue)
    }
  }

  const updatePayment = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    let nextValue = value

    if (name === 'cardNumber') nextValue = formatCardNumber(value)
    if (name === 'code') nextValue = onlyNumbers(value).slice(0, 3)
    if (name === 'month') nextValue = onlyNumbers(value).slice(0, 2)
    if (name === 'year') nextValue = onlyNumbers(value).slice(0, 4)

    setPayment((current) => ({ ...current, [name]: nextValue }))
  }

  const continueToPayment = (event: FormEvent) => {
    event.preventDefault()
    const errors = validateDelivery(delivery)

    if (zipCodeError) errors.zipCode = zipCodeError

    setDeliveryErrors(errors)

    if (Object.keys(errors).length === 0) setStep('payment')
  }

  const finishPayment = async (event: FormEvent) => {
    event.preventDefault()
    const errors = validatePayment(payment)
    setPaymentErrors(errors)
    setApiError('')

    if (Object.keys(errors).length > 0) return

    setIsSubmitting(true)

    try {
      const response = await purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: delivery.receiver,
          address: {
            description: delivery.description,
            city: delivery.city,
            zipCode: delivery.zipCode,
            number: Number(delivery.number),
            complement: delivery.complement || undefined
          }
        },
        payment: {
          card: {
            name: payment.cardName,
            number: onlyNumbers(payment.cardNumber),
            code: Number(payment.code),
            expires: {
              month: Number(payment.month),
              year: Number(payment.year)
            }
          }
        }
      }).unwrap()

      setOrderId(response.orderId)
      dispatch(clear())
      setStep('confirmation')
    } catch {
      setApiError('Não foi possível concluir o pedido. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const concludeOrder = () => {
    dispatch(close())
    setStep('cart')
    setDelivery(initialDelivery)
    setPayment(initialPayment)
    setDeliveryErrors({})
    setPaymentErrors({})
    setOrderId('')
    setApiError('')
    setZipCodeError('')
  }

  const renderFieldError = (message?: string) =>
    message ? <ErrorMessage>{message}</ErrorMessage> : null

  const renderContent = () => {
    if (step === 'confirmation') {
      return (
        <Confirmation>
          <FormTitle>Pedido realizado - {orderId}</FormTitle>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <CheckoutButton type="button" onClick={concludeOrder}>
            Concluir
          </CheckoutButton>
        </Confirmation>
      )
    }

    if (step === 'delivery') {
      return (
        <form onSubmit={continueToPayment} noValidate>
          <FormTitle>Entrega</FormTitle>
          <FormGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              id="receiver"
              name="receiver"
              value={delivery.receiver}
              onChange={updateDelivery}
              className={deliveryErrors.receiver ? 'error' : ''}
            />
            {renderFieldError(deliveryErrors.receiver)}
          </FormGroup>
          <FormGroup>
            <label htmlFor="zipCode">CEP</label>
            <input
              id="zipCode"
              name="zipCode"
              inputMode="numeric"
              value={delivery.zipCode}
              onChange={updateDelivery}
              className={deliveryErrors.zipCode || zipCodeError ? 'error' : ''}
              aria-busy={isLoadingZipCode}
            />
            {renderFieldError(deliveryErrors.zipCode)}
            {isLoadingZipCode && (
              <Loader compact color="light" label="Buscando CEP" />
            )}
            {!deliveryErrors.zipCode && zipCodeError && (
              <ErrorMessage>{zipCodeError}</ErrorMessage>
            )}
          </FormGroup>
          <FormGroup>
            <label htmlFor="description">Endereço</label>
            <input
              id="description"
              name="description"
              value={delivery.description}
              onChange={updateDelivery}
              className={deliveryErrors.description ? 'error' : ''}
            />
            {renderFieldError(deliveryErrors.description)}
          </FormGroup>
          <FormRow>
            <FormGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                name="city"
                value={delivery.city}
                onChange={updateDelivery}
                className={deliveryErrors.city ? 'error' : ''}
              />
              {renderFieldError(deliveryErrors.city)}
            </FormGroup>
            <FormGroup>
              <label htmlFor="number">Número</label>
              <input
                id="number"
                name="number"
                inputMode="numeric"
                value={delivery.number}
                onChange={updateDelivery}
                className={deliveryErrors.number ? 'error' : ''}
              />
              {renderFieldError(deliveryErrors.number)}
            </FormGroup>
          </FormRow>
          <FormGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              id="complement"
              name="complement"
              value={delivery.complement}
              onChange={updateDelivery}
            />
          </FormGroup>
          <CheckoutButton type="submit" disabled={isLoadingZipCode}>
            Continuar com o pagamento
          </CheckoutButton>
          <CheckoutButton type="button" onClick={() => setStep('cart')}>
            Voltar para o carrinho
          </CheckoutButton>
        </form>
      )
    }

    if (step === 'payment') {
      return (
        <form onSubmit={finishPayment} noValidate>
          <FormTitle>Pagamento - Valor a pagar {formatPrice(total)}</FormTitle>
          <FormGroup>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              id="cardName"
              name="cardName"
              value={payment.cardName}
              onChange={updatePayment}
              className={paymentErrors.cardName ? 'error' : ''}
            />
            {renderFieldError(paymentErrors.cardName)}
          </FormGroup>
          <FormRow className="card-row">
            <FormGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                id="cardNumber"
                name="cardNumber"
                inputMode="numeric"
                value={payment.cardNumber}
                onChange={updatePayment}
                className={paymentErrors.cardNumber ? 'error' : ''}
              />
              {renderFieldError(paymentErrors.cardNumber)}
            </FormGroup>
            <FormGroup>
              <label htmlFor="code">CVV</label>
              <input
                id="code"
                name="code"
                inputMode="numeric"
                value={payment.code}
                onChange={updatePayment}
                className={paymentErrors.code ? 'error' : ''}
              />
              {renderFieldError(paymentErrors.code)}
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <label htmlFor="month">Mês de vencimento</label>
              <input
                id="month"
                name="month"
                inputMode="numeric"
                value={payment.month}
                onChange={updatePayment}
                className={paymentErrors.month ? 'error' : ''}
              />
              {renderFieldError(paymentErrors.month)}
            </FormGroup>
            <FormGroup>
              <label htmlFor="year">Ano de vencimento</label>
              <input
                id="year"
                name="year"
                inputMode="numeric"
                value={payment.year}
                onChange={updatePayment}
                className={paymentErrors.year ? 'error' : ''}
              />
              {renderFieldError(paymentErrors.year)}
            </FormGroup>
          </FormRow>
          {apiError && <ApiError role="alert">{apiError}</ApiError>}
          <CheckoutButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader compact label="Finalizando pagamento" />
            ) : (
              'Finalizar pagamento'
            )}
          </CheckoutButton>
          <CheckoutButton type="button" onClick={() => setStep('delivery')}>
            Voltar para a edição de endereço
          </CheckoutButton>
        </form>
      )
    }

    return items.length > 0 ? (
      <>
        <ul>
          {items.map((item, index) => (
            <CartItem key={`${item.id}-${index}`}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <RemoveButton
                type="button"
                aria-label={`Remover ${item.nome} do carrinho`}
                title="Remover item"
                onClick={() => dispatch(remove(index))}
              />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <strong>{formatPrice(total)}</strong>
        </Prices>
        <CheckoutButton type="button" onClick={() => setStep('delivery')}>
          Continuar com a entrega
        </CheckoutButton>
      </>
    ) : (
      <EmptyCart>O carrinho está vazio.</EmptyCart>
    )
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''} aria-hidden={!isOpen}>
      <Overlay onClick={() => dispatch(close())} />
      <Sidebar role="dialog" aria-modal="true" aria-label="Finalizar pedido">
        {renderContent()}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
