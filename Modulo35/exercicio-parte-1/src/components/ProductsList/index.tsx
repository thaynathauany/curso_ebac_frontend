import Prato from '../../models/Prato'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            avaliacao={prato.avaliacao}
            categoria={prato.categoria}
            descricao={prato.descricao}
            destaque={prato.destaque}
            imagem={prato.imagem}
            titulo={prato.titulo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
