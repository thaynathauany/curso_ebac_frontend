import {
  Actions,
  Code,
  Content,
  FoodImage,
  ImageGrid,
  Page,
  PrimaryLink,
  SecondaryLink,
  Text,
  Title
} from './styles'

import macarrao from '../../assets/images/macarrao.png'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'

const NotFound = () => (
  <Page>
    <div className="container">
      <Content>
        <Code>404</Code>
        <Title>Ops, esse pedido saiu da rota</Title>
        <Text>
          A página que você tentou acessar não está no cardápio. Volte para a
          lista de restaurantes ou escolha um caminho conhecido.
        </Text>
        <Actions>
          <PrimaryLink to="/">Ver restaurantes</PrimaryLink>
          <SecondaryLink to="/categories">Ir para o menu</SecondaryLink>
        </Actions>
      </Content>
      <ImageGrid aria-hidden="true">
        <FoodImage src={sushi} alt="" />
        <FoodImage src={pizza} alt="" />
        <FoodImage src={macarrao} alt="" />
      </ImageGrid>
    </div>
  </Page>
)

export default NotFound
