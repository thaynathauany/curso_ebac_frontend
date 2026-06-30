import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#ffffff',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3',
  rose: '#E66767',
  amarelo: '#FFB930',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.branca};
  }

  .container {
    max-width: 1024px;
    width: calc(100% - 32px);
    margin: 0 auto;
  }
`
