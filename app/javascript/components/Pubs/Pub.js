import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  min-width: 250px;
`;

const PubLogo = styled.div`
  width: 50px;
  margin: auto;
  padding-top: 20px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;

const PubName = styled.div`
  padding: 20px 0 10px 0;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration:none
  }
`;

const Pub = ({ name, image_url, avg_score, slug }) => {
  return (
    <Card>
      <PubLogo>
        <img src={image_url} alt={name}/>
      </PubLogo>
      <PubName>{name}</PubName>
      <div className="pub-score">{avg_score}</div>
      <LinkWrapper>
        <Link to={`/pubs/${slug}`}>Check this Pub</Link>
      </LinkWrapper>
    </Card>  
  )
}

export default Pub;