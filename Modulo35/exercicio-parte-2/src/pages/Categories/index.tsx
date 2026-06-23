import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Restaurante, { ItemCardapio } from '../../models/Prato'

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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [selectedItem, setSelectedItem] = useState<ItemCardapio>()

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setRestaurantes(data)
      })
  }, [])

  const restaurante =
    restaurantes.find((item) => item.id === Number(id)) || restaurantes[0]

  const closeModal = () => {
    setSelectedItem(undefined)
  }

  if (!restaurante) {
    return <MenuSection />
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
                <CardButton type="button">
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
