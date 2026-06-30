import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import {
  CartContainer,
  CartItem,
  CheckoutButton,
  EmptyCart,
  Overlay,
  Prices,
  RemoveButton,
  Sidebar
} from './styles'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const total = items.reduce((sum, item) => sum + item.preco, 0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(close())
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [dispatch, isOpen])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''} aria-hidden={!isOpen}>
      <Overlay onClick={() => dispatch(close())} />
      <Sidebar role="dialog" aria-modal="true" aria-label="Carrinho de compras">
        {items.length > 0 ? (
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
            <CheckoutButton type="button">
              Continuar com a entrega
            </CheckoutButton>
          </>
        ) : (
          <EmptyCart>O carrinho está vazio.</EmptyCart>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
