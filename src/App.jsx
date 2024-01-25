import React from 'react'
import FoodList from './Components/FoodList'

import "./App.css"

export default function App() {

  const fooditem=["Pizza","Pink Pasta","Burger","Fries","Hakka Noodles","Dahibhalla"]
  return (
    <>
    <FoodList item={fooditem}/>
    </>
  )
}
