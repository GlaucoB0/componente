import React from 'react'
import { useState } from 'react'
import './Button.css'

const Button = ({ number }) => {

  const [btnBackgorund, setBtnBackground] = useState(event)
  const [btnColor, setBtnColor] = useState(event)


  const btnClicado = (target, valorBtn) => {
    event.preventDefault()

    if (target.style.backgroundColor == 'rgb(251, 116, 19)') {
      setBtnBackground(target.style.backgroundColor = 'rgb(37, 45, 55)')
      setBtnColor(target.style.color = 'hsl(216, 12%, 54%)')
      return
    }

    setBtnBackground(target.style.backgroundColor = 'rgb(251, 116, 19)')
    setBtnColor(target.style.color = 'white')

  }

  return (
    <button id='inValue' onClick={({ target }) => btnClicado(target, target.innerText)}>{number}</button>
  )
}

export default Button