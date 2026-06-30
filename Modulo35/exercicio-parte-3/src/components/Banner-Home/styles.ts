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
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
  color: #e66767;
  font-weight: 900;
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
