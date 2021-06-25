import React from "react";
import styled from 'styled-components';

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;    
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    //background-image: url();
  }

  
`

const RatingTitle = styled.div``


const ReviewForm = ({ handleChange, handleSubmit, name, review }) => {
  
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <>
        <input type="radio" value={score} name="rating" 
          onChange={()=>{ console.log('selected', score)}} id={`rating-${score}`} />
        <label></label>
      </>
    )
  })

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div>Have as amazing experience at {name}? Share your review!!</div>
        <div className="filed">
          <input onChange={handleChange} value={review.title} type="text" name="title" placeholder="Review Title"/>          
        </div>
        <div className="filed">
          <input onChange={handleChange} value={review.description} type="text" name="description" placeholder="Review Description"/>          
        </div>
        <div className="filed">
          <RatingContainer>
            <div className="rating-title">Rating this Pub</div>
            <div className="rating-box">
              {ratingOptions}
            </div>
          </RatingContainer>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  )
};

export default ReviewForm;