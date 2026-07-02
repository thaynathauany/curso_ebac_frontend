import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Prato'
import BannerHome from '../../components/Banner-Home'
import Loader from '../../components/Loader'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch(API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Falha ao carregar restaurantes')
        return response.json()
      })
      .then((data) => {
        setRestaurantes(data)
        setIsLoading(false)
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error(error)
          setIsLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  return (
    <>
      <BannerHome />
      {isLoading ? (
        <Loader label="Carregando restaurantes" />
      ) : (
        <ProductsList pratos={restaurantes} />
      )}
    </>
  )
}

export default Home
