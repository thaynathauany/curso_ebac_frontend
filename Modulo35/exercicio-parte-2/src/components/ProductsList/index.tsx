import Restaurante from '../../models/Prato'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  pratos: Restaurante[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            id={prato.id}
            avaliacao={prato.avaliacao}
            categoria={prato.tipo}
            descricao={prato.descricao}
            destaque={prato.destacado}
            imagem={prato.capa}
            titulo={prato.titulo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
