import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Restaurante, { ItemCardapio } from '../../models/Prato'
import { add, open } from '../../store/reducers/cart'
import Loader from '../../components/Loader'

import {
  Card,
  CardButton,
  CardDescription,
  CardTitle,
  CloseButton,
  Hero,
  HeroContent,
  HeroTitle,
  MenuList,
  MenuSection,
  Modal,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalInfo,
  ModalTitle,
  RestaurantCategory
} from './styles'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

const Categories = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [selectedItem, setSelectedItem] = useState<ItemCardapio>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch(API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Falha ao carregar o cardápio')
        return response.json()
      })
      .then((data) => {
        setRestaurantes(data)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error(error)
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  const restaurante =
    restaurantes.find((item) => item.id === Number(id)) || restaurantes[0]

  const closeModal = () => {
    setSelectedItem(undefined)
  }

  const addToCart = () => {
    if (selectedItem) {
      dispatch(add(selectedItem))
      dispatch(open())
      closeModal()
    }
  }

  if (!restaurante) {
    return (
      <MenuSection>
        {isLoading && <Loader label="Carregando cardápio" />}
      </MenuSection>
    )
  }

  return (
    <>
      <Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <HeroContent>
            <RestaurantCategory>{restaurante.tipo}</RestaurantCategory>
            <HeroTitle>{restaurante.titulo}</HeroTitle>
          </HeroContent>
        </div>
      </Hero>
      <MenuSection>
        <div className="container">
          <MenuList>
            {restaurante.cardapio.map((prato) => (
              <Card key={prato.id}>
                <img src={prato.foto} alt={prato.nome} />
                <CardTitle>{prato.nome}</CardTitle>
                <CardDescription>{prato.descricao}</CardDescription>
                <CardButton
                  type="button"
                  onClick={() => {
                    setSelectedItem(prato)
                  }}
                >
                  Mais detalhes
                </CardButton>
              </Card>
            ))}
          </MenuList>
        </div>
      </MenuSection>
      <Modal className={selectedItem ? 'is-visible' : ''}>
        <ModalContent>
          {selectedItem && (
            <>
              <CloseButton
                type="button"
                aria-label="Fechar modal"
                onClick={closeModal}
              >
                ×
              </CloseButton>
              <ModalImage src={selectedItem.foto} alt={selectedItem.nome} />
              <ModalInfo>
                <ModalTitle>{selectedItem.nome}</ModalTitle>
                <ModalDescription>{selectedItem.descricao}</ModalDescription>
                <ModalDescription>
                  Serve: {selectedItem.porcao}
                </ModalDescription>
                <CardButton type="button" onClick={addToCart}>
                  Adicionar ao carrinho - {formatPrice(selectedItem.preco)}
                </CardButton>
              </ModalInfo>
            </>
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Categories
