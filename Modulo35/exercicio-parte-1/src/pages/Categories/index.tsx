import pizza from '../../assets/images/pizza.png'

import {
  Card,
  CardButton,
  CardDescription,
  CardTitle,
  Hero,
  HeroContent,
  HeroTitle,
  MenuList,
  MenuSection,
  RestaurantCategory
} from './styles'

const pratos = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 2,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 3,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 4,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 5,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  },
  {
    id: 6,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    imagem: pizza
  }
]

const Categories = () => (
  <>
    <Hero>
      <div className="container">
        <HeroContent>
          <RestaurantCategory>Italiana</RestaurantCategory>
          <HeroTitle>La Dolce Vita Trattoria</HeroTitle>
        </HeroContent>
      </div>
    </Hero>
    <MenuSection>
      <div className="container">
        <MenuList>
          {pratos.map((prato) => (
            <Card key={prato.id}>
              <img src={prato.imagem} alt={prato.titulo} />
              <CardTitle>{prato.titulo}</CardTitle>
              <CardDescription>{prato.descricao}</CardDescription>
              <CardButton type="button">Adicionar ao carrinho</CardButton>
            </Card>
          ))}
        </MenuList>
      </div>
    </MenuSection>
  </>
)

export default Categories
