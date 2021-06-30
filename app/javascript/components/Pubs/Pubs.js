import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pub from './Pub';
import styled from 'styled-components';

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  padding: 10px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

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
    <Home>
      <Header>
        <h1>OpenPubs</h1>
        <Subheader>Honest reviews from who loves Pubs</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Pubs;