import React from 'react'
import { useState } from 'react'
import star from '../../images/icon-star.svg'
import Button from '../Components/Button'
import Submit from '../Components/Submit'
import './App.css'

const App = () => {

  return (


    <section className='container'>

      <div className='comando'>
        <img src={star} alt="" className='star-icon' />
        <div>
          <h1>How did you do?</h1>
          <p>Please let us know we did with your support request. All feedback appreciated to help us improve our effering!</p>
        </div>
      </div>

      <div className='value-container'>
        <Button number={1} />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
      </div>

      <Submit />

    </section>

  )
}

export default App