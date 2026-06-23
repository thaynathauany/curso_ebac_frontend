import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart, Logo } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <Logo src={logo} alt="efood" />
      </Link>
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </div>
  </HeaderBar>
)

export default Header
