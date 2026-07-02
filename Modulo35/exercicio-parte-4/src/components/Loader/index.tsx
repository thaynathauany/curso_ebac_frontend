import { LoaderContainer, Spinner, VisuallyHidden } from './styles'

type Props = {
  label?: string
  compact?: boolean
  color?: 'rose' | 'light'
}

const Loader = ({
  label = 'Carregando',
  compact = false,
  color = 'rose'
}: Props) => (
  <LoaderContainer $compact={compact} role="status" aria-live="polite">
    <Spinner $compact={compact} $color={color} />
    <VisuallyHidden>{label}</VisuallyHidden>
  </LoaderContainer>
)

export default Loader
