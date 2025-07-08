import React from 'react'
import './Destinationstyles.css'

const DestinationData = ({ heading, text, img1, img2 ,className}) => {
  return (
    <div className={className}>
    <div className='dest-text'>
    <h2>{heading}</h2>
    <p>
        {text}
    </p>
    </div>
    <div className='image'>
        <img src={img1} alt='kolkata' />
        <img src={img2} alt='kolkata' />
    </div>
    </div>
  )
}

export default DestinationData