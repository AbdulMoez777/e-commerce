import React, { useContext, useEffect } from 'react'
import { Datacontext } from '../context/DataContext'

function Carousel() {
    const {data, fetchAllProducts}  = useContext(Datacontext)
    console.log(data)

useEffect(() => {
    fetchAllProducts()
}, [])
    
  return (
    <div>Carousel</div>
  )
}

export default Carousel