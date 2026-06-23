import styled from 'styled-components'

import background from '../../assets/images/background-categoria.png'
import { cores } from '../../styles'

export const Hero = styled.section`
  height: 280px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${cores.branca};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.55);
  }

  .container {
    height: 100%;
    position: relative;
    z-index: 1;
  }
`

export const HeroContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 0;
`

export const RestaurantCategory = styled.span`
  font-size: 32px;
  font-weight: 100;
`

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
`

export const MenuSection = styled.section`
  padding: 56px 0 120px;
`

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.li`
  background-color: ${cores.rose};
  color: ${cores.begeEscuro};
  padding: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    display: block;
  }
`

export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
`

export const CardButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${cores.begeEscuro};
  color: ${cores.rose};
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
`
