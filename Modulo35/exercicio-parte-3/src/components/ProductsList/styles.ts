import styled from 'styled-components'

export const Container = styled.section`
  padding: 80px 0 120px;

  @media (max-width: 767px) {
    padding: 40px 0 64px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: 1023px) {
    gap: 32px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
