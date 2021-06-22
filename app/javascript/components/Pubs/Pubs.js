import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pub from './Pub';

const Pubs = () => {
  const [pubs, setPubs] = useState([]);
  
  useEffect(() => {
    axios.get('api/v1/pubs.json')
    .then( resp => setPubs(resp.data.data))
    .catch(resp => console.log(resp));
  }, [pubs.length])

  const grid = pubs.map(item => {
    return (
      <Pub 
        key={item.attributes.name} 
        name={item.attributes.name}
        image_url={item.attributes.image_url}
        avg_score={item.attributes.avg_score}
        slug={item.attributes.slug}
       />    
      )
  })
  
  return (
    <div className="home">
      <div className="header">
        <h1>OpenPubs</h1>
        <div className="subheader">Honest reviews from who loves Pubs</div>
      </div>
      <div className="grid">
        {grid}
      </div>
    </div>
  )
}

export default Pubs;