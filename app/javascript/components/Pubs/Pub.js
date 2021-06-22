import React from "react";

const Pub = ({ name, image_url, avg_score, slug }) => {
  return (
    <div className="card">
      <div className="pub-logo">
        <img src={image_url} alt={name}/>
      </div>
      <div className="pub-name">{name}</div>
      <div className="pub-score">{avg_score}</div>
      <div className="pub-link">
        <a href={`/pubs/${slug}`}>Check this Pub</a>
      </div>
    </div>  
  )
}

export default Pub;