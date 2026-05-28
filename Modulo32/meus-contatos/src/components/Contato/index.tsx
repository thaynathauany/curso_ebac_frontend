import { useState } from 'react'
import { useDispatch } from 'react-redux'
import ContatoModel from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'
import * as S from './styles'

type Propriedades = ContatoModel

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Propriedades) => {
  const dispatch = useDispatch()
  const [estaEmEdicao, setEstaEmEdicao] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  function cancelaEdicao() {
    setEstaEmEdicao(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvaContato() {
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      alert('Preencha todos os campos do contato')
      return
    }

    dispatch(
      editar({
        id,
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone.trim()
      })
    )
    setEstaEmEdicao(false)
  }

  return (
    <S.Card>
      {estaEmEdicao ? (
        <S.FormularioEdicao>
          <S.Campo
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            type="text"
            placeholder="Nome completo"
          />
          <S.Campo
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <S.Campo
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            type="tel"
            placeholder="Telefone"
          />
        </S.FormularioEdicao>
      ) : (
        <S.Cabecalho>
          <div>
            <S.Nome>{nomeOriginal}</S.Nome>
            <S.Info>{emailOriginal}</S.Info>
            <S.Info>{telefoneOriginal}</S.Info>
          </div>
        </S.Cabecalho>
      )}
      <S.BarraDeAcoes>
        {estaEmEdicao ? (
          <>
            <S.BotaoSalvar onClick={salvaContato}>Salvar</S.BotaoSalvar>
            <S.BotaoRemover onClick={cancelaEdicao}>Cancelar</S.BotaoRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEmEdicao(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
