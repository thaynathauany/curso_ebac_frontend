import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 380px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    padding: 40px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 767px) {
    height: 320px;

    .container {
      padding: 32px 0;
    }
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
  color: #e66767;
  font-weight: 900;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 34px;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
