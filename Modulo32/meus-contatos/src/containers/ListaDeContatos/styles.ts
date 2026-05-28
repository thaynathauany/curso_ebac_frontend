import styled from 'styled-components'
import paletaCores from '../../styles/variaveis'

export const Container = styled.main`
  padding: 0 40px 40px;
  height: 100vh;
  overflow-y: auto;
`

export const Message = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${paletaCores.texto};
  padding: 16px;
`

export const Lista = styled.ul`
  max-width: 720px;
  margin: 0 auto;
`
