import Tag from '../Tag'

import {
  Avaliacao,
  Botao,
  Card,
  Descricao,
  HeaderCard,
  Infos,
  Titulo
} from './styles'

type Props = {
  titulo: string
  categoria: string
  destaque: boolean
  descricao: string
  avaliacao: number
  imagem: string
}

const Product = ({
  titulo,
  categoria,
  destaque,
  descricao,
  avaliacao,
  imagem
}: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <Infos>
      {destaque && <Tag>Destaque da semana</Tag>}
      <Tag>{categoria}</Tag>
    </Infos>
    <HeaderCard>
      <Titulo>{titulo}</Titulo>
      <Avaliacao>
        {avaliacao}
        <span>★</span>
      </Avaliacao>
    </HeaderCard>
    <Descricao>{descricao}</Descricao>
    <Botao to="/categories">Saiba mais</Botao>
  </Card>
)

export default Product
