import React from 'react'
import "./TripStyles.css"

const Tripdata = ({ img, heading, text }) => {
  return (
    <div className='t-card'>
      <div className='t-image'>
        <img src={img} alt="trip-location" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  )
}

export default Tripdata
