import React from 'react'

import style from "./css_modules/FoodItem.module.css"


export default function FoodItem({x}) {
  return (
    <li key={x} className={`list-group-item ${style.bgcolor}`}>
        {x}
    </li>
  )
}
