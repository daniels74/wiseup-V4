import React from 'react'

const Card = ({key, price, name}) => {
  return (
    <div>
        {name} {price}
    </div>
  )
}

export default Card;