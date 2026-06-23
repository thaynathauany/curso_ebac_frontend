import { BrowserRouter, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalCss } from './styles'

function Layout() {
  const { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <>
      <GlobalCss />

      {!isHome && <Header />}

      <Rotas />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
