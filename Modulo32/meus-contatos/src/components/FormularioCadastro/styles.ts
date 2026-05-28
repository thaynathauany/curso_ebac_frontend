import styled from 'styled-components'
import paletaCores from '../../styles/variaveis'

export const Formulario = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  background-color: ${paletaCores.branco};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const Campo = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid ${paletaCores.cinzaClaro};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: ${paletaCores.texto};
  background-color: ${paletaCores.background};

  &::placeholder {
    color: ${paletaCores.cinza};
  }
`

export const Selecao = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid ${paletaCores.cinzaClaro};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  color: ${paletaCores.texto};
  background-color: ${paletaCores.background};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
`

export const Botao = styled.button`
  display: block;
  width: 100%;
  padding: 12px 24px;
  background-color: ${paletaCores.primario};
  color: ${paletaCores.branco};
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${paletaCores.azul};
  }
`

export const BotaoVoltar = styled(Botao)`
  background-color: ${paletaCores.cinza};
  margin-bottom: 16px;

  &:hover {
    background-color: ${paletaCores.cinzaClaro};
  }
`
