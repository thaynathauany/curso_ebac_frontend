import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { cadastrar } from '../../store/reducers/contatos'
import { Formulario, Campo, Botao, BotaoVoltar } from './styles'
import { RootReducer } from '../../store'

const FormularioRegistro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contatos = useSelector((state: RootReducer) => state.contatos.itens)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const registraContato = (evento: React.FormEvent) => {
    evento.preventDefault()

    const jaExisteContato = contatos.find(
      (contato) => contato.email.toLowerCase() === email.toLowerCase()
    )

    if (jaExisteContato) {
      alert('Já existe um contato com este e-mail')
    } else {
      dispatch(
        cadastrar({
          nome: nome.trim(),
          email: email.trim(),
          telefone: telefone.trim()
        })
      )
      navigate('/')
    }
  }

  return (
    <Formulario onSubmit={registraContato}>
      <Link to="/">
        <BotaoVoltar type="button">Voltar para contatos</BotaoVoltar>
      </Link>
      <Campo
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        type="text"
        placeholder="Nome completo"
        required
      />
      <Campo
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-mail"
        required
      />
      <Campo
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        type="tel"
        placeholder="Telefone"
        required
      />
      <Botao type="submit">Cadastrar contato</Botao>
    </Formulario>
  )
}

export default FormularioRegistro
