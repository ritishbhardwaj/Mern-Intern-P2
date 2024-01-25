import React from 'react'

export default function FoodItem({x}) {
  return (
    <li key={x} className="list-group-item">
        {x}
    </li>
  )
}
