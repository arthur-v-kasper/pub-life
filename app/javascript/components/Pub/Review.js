import React from 'react'
import styled from 'styled-components';
import Rating from '../Rating/Rating';
import { AiOutlineClose } from 'react-icons/ai';


const Card = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 4px;
  padding: 10px 10px 20px 20px;
  margin: 0 20px 20px 0px;
`

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & span {
    margin: 0;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

`

const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`
const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`

const Review = ({ title, description,  score, handleDelete, id }) => {
  return (
    <Card key={id}>
      <RatingContainer>
        <span>
          <Rating score={score} />
        </span>
        <AiOutlineClose className="close" onClick={ handleDelete.bind(this, id)} />
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
}

export default Review