import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

type Propriedades = {
  menuCompletoVisivel: boolean
}

const BarraLateral = ({ menuCompletoVisivel }: Propriedades) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const totalContatos = useSelector(
    (state: RootReducer) => state.contatos.itens.length
  )

  return (
    <S.Aside menuCompletoVisivel={menuCompletoVisivel}>
      <div>
        <S.Titulo>Contatos</S.Titulo>
        <S.Campo
          type="text"
          placeholder="Buscar contato"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
          disabled={!menuCompletoVisivel}
        />
        <S.Resumo>
          <strong>{totalContatos}</strong>
          <span>contato(s)</span>
        </S.Resumo>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
