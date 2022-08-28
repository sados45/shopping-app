import React, { useContext, useState } from 'react'
import ProductCard from '../components/ProductCard'
import AuthContext from '../context/AuthContext'

export default function Favorites() {
  const { favs, setFavs, deleteFav } = useContext(AuthContext)

  return (
    <div>
      {
      favs.map((el) => <ProductCard
        imgUrl={el.data.image}
        title={el.data.title}
        rating={el.data.rating}
        price={el.data.price}
        id={el.data.product_id}
      />)}
      </div>
  )
}