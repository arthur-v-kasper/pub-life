import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 26px;

  img {
    height: 80px;
    width: 80px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: -8px;
  }
` 

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = ({name, image_url, avg_score, total_reviews}) => {
  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>
      <div>
        <TotalReviews>{total_reviews} Reviews</TotalReviews>
        <div className="totalRating"></div>
        <TotalOutOf>{avg_score} 3 of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header;