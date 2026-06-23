import { Imagem, Titulo, Logo } from './styles'

import bannerImg from '../../assets/images/banner-efood.png'
import logo from '../../assets/images/logo.png'

const BannerHome = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Logo src={logo} />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </Imagem>
)

export default BannerHome
