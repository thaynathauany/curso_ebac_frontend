import ProductsList from '../../components/ProductsList'
import Prato from '../../models/Prato'
import BannerHome from '../../components/Banner-Home'

import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'

const restaurantes: Prato[] = [
  {
    id: 1,
    categoria: 'Japonesa',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    destaque: true,
    titulo: 'Hioki Sushi',
    avaliacao: 4.9,
    imagem: sushi
  },
  {
    id: 2,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: false,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    imagem: macarrao
  },
  {
    id: 3,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: false,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    imagem: macarrao
  },
  {
    id: 4,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: false,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    imagem: macarrao
  },
  {
    id: 5,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: false,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    imagem: macarrao
  },
  {
    id: 6,
    categoria: 'Italiana',
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    destaque: false,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    imagem: macarrao
  }
]

const Home = () => (
  <>
    <BannerHome />
    <ProductsList pratos={restaurantes} />
  </>
)

export default Home
