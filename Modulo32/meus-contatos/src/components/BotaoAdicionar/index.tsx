import { Link } from 'react-router-dom'
import { BotaoCircular } from './style'

const BotaoAdicionar = () => {
  return (
    <Link to="/novo">
      <BotaoCircular>+</BotaoCircular>
    </Link>
  )
}

export default BotaoAdicionar
