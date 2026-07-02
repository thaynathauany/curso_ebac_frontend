import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.begeEscuro};
  color: ${cores.rose};
  padding: 40px 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`

export const SocialLinks = styled.ul`
  display: flex;
  gap: 8px;
  margin-top: 32px;

  a {
    display: flex;
  }

  img {
    width: 24px;
    height: 24px;
    display: block;
  }
`

export const Text = styled.p`
  max-width: 480px;
  margin-top: 80px;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
