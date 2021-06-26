import React from 'react'
import "./Rating.css"

const Rating = ({score}) => {
  score = (score/5) * 100
  return (
    <span className="star-wrapper">
      <span className="stars" style={{width: score + "%"}}></span>
    </span>
  )
}

export default Rating;