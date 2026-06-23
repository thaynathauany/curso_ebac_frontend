import styled from 'styled-components'
import { Link } from 'react-router-dom'

import background from '../../assets/images/banner-efood.png'
import { cores } from '../../styles'

export const Page = styled.main`
  min-height: 560px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${cores.rose};
  padding: 72px 0 96px;
  overflow: hidden;

  .container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    align-items: center;
    gap: 64px;
  }

  @media (max-width: 767px) {
    padding: 48px 0 64px;

    .container {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 0 24px;
    }
  }
`

export const Content = styled.section`
  max-width: 560px;
`

export const Code = styled.strong`
  display: block;
  font-size: 112px;
  font-weight: 900;
  line-height: 1;
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  line-height: 46px;
  margin-top: 8px;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 24px;
  max-width: 520px;
`

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const PrimaryLink = styled(Link)`
  background-color: ${cores.rose};
  color: ${cores.begeEscuro};
  font-size: 16px;
  font-weight: 900;
  padding: 12px 18px;
  text-decoration: none;
  text-align: center;
`

export const SecondaryLink = styled(Link)`
  border: 2px solid ${cores.rose};
  color: ${cores.rose};
  font-size: 16px;
  font-weight: 900;
  padding: 10px 18px;
  text-decoration: none;
  text-align: center;
`

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  transform: rotate(-3deg);

  img:first-child {
    grid-column: span 2;
  }
`

export const FoodImage = styled.img`
  width: 100%;
  height: 150px;
  border: 8px solid ${cores.rose};
  object-fit: cover;
  box-shadow: 12px 12px 0 ${cores.begeEscuro};

  &:first-child {
    height: 190px;
  }
`
