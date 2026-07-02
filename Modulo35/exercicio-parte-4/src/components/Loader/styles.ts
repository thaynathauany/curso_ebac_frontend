import styled, { keyframes } from 'styled-components'

import { cores } from '../../styles'

type LoaderProps = {
  $compact: boolean
}

type SpinnerProps = LoaderProps & {
  $color: 'rose' | 'light'
}

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoaderContainer = styled.div<LoaderProps>`
  width: ${(props) => (props.$compact ? '18px' : '100%')};
  min-height: ${(props) => (props.$compact ? '18px' : '240px')};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => (props.$compact ? '0 auto' : '0')};
`

export const Spinner = styled.span<SpinnerProps>`
  width: ${(props) => (props.$compact ? '16px' : '40px')};
  height: ${(props) => (props.$compact ? '16px' : '40px')};
  border: ${(props) => (props.$compact ? '2px' : '4px')} solid
    ${(props) =>
      props.$color === 'light' ? 'rgba(255, 235, 217, 0.4)' : '#f4b8b8'};
  border-top-color: ${(props) =>
    props.$color === 'light' ? cores.begeEscuro : cores.rose};
  border-radius: 50%;
  animation: ${rotate} 0.7s linear infinite;
`

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`
