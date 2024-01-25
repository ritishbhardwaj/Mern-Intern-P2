import React from 'react'
import FoodList from './Components/FoodList'

export default function App() {

  const fooditem=["Pizza","Pink Pasta","Burger","Fries","Hakka Noodles","DahiPuri"]
  return (
    <FoodList item={fooditem}/>
  )
}
