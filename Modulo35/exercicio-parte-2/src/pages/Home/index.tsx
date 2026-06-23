import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import Restaurante from '../../models/Prato'
import BannerHome from '../../components/Banner-Home'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setRestaurantes(data)
      })
  }, [])

  return (
    <>
      <BannerHome />
      <ProductsList pratos={restaurantes} />
    </>
  )
}

export default Home
