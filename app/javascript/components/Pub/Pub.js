import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pub = (props) => {
  const [pub, setPub] = useState({})
  const [review, setReview] = useState({})

  useEffect(()=>{
    const slug = props.match.params.slug;
    const url = `/api/v1/pubs/${slug}`;

    axios.get(url)
    .then(resp => console.log(resp) )
    .catch(resp => console.log(resp))
  },[])

  return (
    <div className="wrapper">
      <div className="column">
        <div className="header"></div>
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="reviews-form">[Reviews form goes here.]</div>
      </div>
    </div>
  )
}

export default Pub;