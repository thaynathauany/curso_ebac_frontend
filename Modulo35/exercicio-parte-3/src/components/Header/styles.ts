import styled from 'styled-components'

import background from '../../assets/images/banner-efood.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 40px 0 64px;

  a {
    color: ${cores.rose};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 767px) {
    padding: 24px 0 32px;

    .container {
      flex-direction: column;
      gap: 16px;
    }
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
  display: block;
`

export const LinkCart = styled.button`
  display: block;
  border: none;
  background: transparent;
  color: ${cores.rose};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
`
