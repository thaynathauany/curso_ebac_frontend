import { Provider } from 'react-redux'
import { BrowserRouter, useLocation } from 'react-router-dom'

import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import Rotas from './routes'
import { store } from './store'
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
      <Cart />
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App
