import styled from 'styled-components'

import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

export const Sidebar = styled.aside`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 360px;
  height: 100%;
  overflow-y: auto;
  background-color: ${cores.rose};
  padding: 32px 8px;
`

export const CartItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 8px;
  min-height: 100px;
  margin-bottom: 16px;
  padding: 8px;
  background-color: ${cores.begeEscuro};
  color: ${cores.rose};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  span {
    font-size: 14px;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 16px;
  height: 18px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    right: 2px;
    bottom: 0;
    width: 10px;
    height: 11px;
    border: 2px solid ${cores.rose};
    border-top: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 1px;
    width: 14px;
    height: 2px;
    background-color: ${cores.rose};
    box-shadow: 4px -3px 0 -0.5px ${cores.rose};
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  color: ${cores.begeEscuro};
  font-size: 14px;
  font-weight: 700;
`

export const CheckoutButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${cores.begeEscuro};
  color: ${cores.rose};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 4px;
`

export const EmptyCart = styled.p`
  color: ${cores.begeEscuro};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`
