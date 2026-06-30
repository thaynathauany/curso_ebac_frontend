import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, LinkCart, Logo } from './styles'

import logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <HeaderBar>
      <div className="container">
        <Link to="/">Restaurantes</Link>
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <LinkCart type="button" onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </LinkCart>
      </div>
    </HeaderBar>
  )
}

export default Header
