import styled from 'styled-components'
import paletaCores from '../../styles/variaveis'

export const BotaoCircular = styled.button`
  height: 64px;
  width: 64px;
  background-color: ${paletaCores.primario};
  color: ${paletaCores.branco};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  border-radius: 50%;
  position: fixed;
  right: 48px;
  bottom: 48px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${paletaCores.azul};
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`
