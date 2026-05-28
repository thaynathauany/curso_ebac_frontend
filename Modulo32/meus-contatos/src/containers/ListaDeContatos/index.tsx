import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import * as S from './styles'

const ListaDeContatos = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const termoNormalizado = termo.toLocaleLowerCase()

  const contatosExibidos = contatos.filter((contato) => {
    const conteudo = `${contato.nome} ${contato.email} ${contato.telefone}`

    return conteudo.toLocaleLowerCase().includes(termoNormalizado)
  })

  let mensagem = `${contatosExibidos.length} contato(s) encontrado(s)`

  if (termo) {
    mensagem += ` com o termo "${termo}"`
  }

  mensagem += '.'

  return (
    <S.Container>
      <S.Message>{mensagem}</S.Message>
      <S.Lista>
        {contatosExibidos.map((contato) => (
          <Contato key={contato.id} {...contato} />
        ))}
      </S.Lista>
    </S.Container>
  )
}

export default ListaDeContatos
