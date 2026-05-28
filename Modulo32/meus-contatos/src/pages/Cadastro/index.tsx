import BarraLateral from '../../containers/BarraLateral'
import { MainContainer, Title } from './styles'
import FormularioCadastro from '../../components/FormularioCadastro'

const Cadastro = () => {
  return (
    <>
      <BarraLateral menuCompletoVisivel={false} />
      <MainContainer>
        <Title>Novo contato</Title>
        <FormularioCadastro />
      </MainContainer>
    </>
  )
}

export default Cadastro
