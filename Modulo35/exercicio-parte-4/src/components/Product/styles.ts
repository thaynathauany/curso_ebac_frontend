import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${cores.branca};
  border: 1px solid ${cores.rose};
  color: ${cores.rose};
  position: relative;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  color: ${cores.rose};
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;

  span {
    color: ${cores.amarelo};
    font-size: 24px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
`

export const Botao = styled(Link)`
  background-color: ${cores.rose};
  color: ${cores.bege};
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-start;
  margin: auto 8px 8px;
  padding: 4px 6px;
  text-decoration: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  left: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;

  ${TagContainer} {
    margin-right: 0;
  }
`
