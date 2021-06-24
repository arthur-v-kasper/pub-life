import React from "react";


const ReviewForm = () => {
  return (
    <div className="wrapper">
      <form>
        <div>Have as amazing experience at [PUBNAME]? Share your review!!</div>
        <div className="filed">
          <input type="text" name="title" placeholder="Review Title"/>          
        </div>
        <div className="filed">
          <input type="text" name="description" placeholder="Review Description"/>          
        </div>
        <div className="filed">
          <div className="rating-container">
            <div className="rating-title">Rating this Pub</div>
            [Rating component]
          </div>
        </div>
        <button type="submit">Submit your review</button>
      </form>
    </div>
  )
};

export default ReviewForm;