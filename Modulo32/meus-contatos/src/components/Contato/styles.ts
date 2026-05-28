import styled from 'styled-components'
import paletaCores from '../../styles/variaveis'

export const Card = styled.li`
  background-color: ${paletaCores.branco};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  padding: 16px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid ${paletaCores.cinzaClaro};
`

export const Cabecalho = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${paletaCores.titulo};
  line-height: 1.3;
`

export const Info = styled.p`
  color: ${paletaCores.texto};
  font-size: 14px;
  line-height: 22px;
  word-break: break-word;
`

export const FormularioEdicao = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 16px;
`

export const Campo = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${paletaCores.cinzaClaro};
  border-radius: 8px;
  font-size: 14px;
  color: ${paletaCores.texto};
  background-color: ${paletaCores.background};
  outline-color: ${paletaCores.primario};
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid #f1f5f9;
  padding-top: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const Botao = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: ${paletaCores.branco};
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${paletaCores.texto};
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${paletaCores.sucesso};
  color: ${paletaCores.texto};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${paletaCores.perigo};
`
