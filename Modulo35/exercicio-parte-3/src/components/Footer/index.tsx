import { Container, Logo, SocialLinks, Text } from './styles'

import facebook from '../../assets/images/facebook-icon.svg'
import instagram from '../../assets/images/instagram-icon.svg'
import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter-icon.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <SocialLinks>
        <li>
          <a href="#" title="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#" title="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#" title="Twitter">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </SocialLinks>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Text>
    </div>
  </Container>
)

export default Footer
