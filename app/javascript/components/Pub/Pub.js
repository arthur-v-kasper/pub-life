import React, { useState, useEffect } from 'react'
import Header from './Header'
import styled from 'styled-components';
import ReviewForm from './ReviewForm';
import Review from './Review';
import AxiosWrapper from '../../util/AxiosWrapper';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: calc(100vh - 50px);
  border: 1px solid;
`

const Colum = styled.div`
  background: #fff;
  height: 100%;
  overflow: auto;

  &:last-child {
    background: #000;
  }
`

const Main = styled.div`
  padding-left: 50px;
`

const Pub = (props) => {
  const [pub, setPub] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [reviews, setReviews] = useState([])

  useEffect(()=>{
    const slug = props.match.params.slug;
    const url = `/api/v1/pubs/${slug}`;

    AxiosWrapper.get(url)
    .then(resp => {
            setPub(resp.data)
            setReviews(resp.data.included)
            setLoaded(true)
    })
    .catch(resp => console.log(resp))
  },[])

const handleChange = (e) => {
  e.preventDefault()

  setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
}

const handleSubmit = (e) => {
  e.preventDefault()

  const pub_id = pub.data.id

  AxiosWrapper.post('/api/v1/reviews', {review, pub_id})
  .then(resp => {    
    setReviews([...reviews, resp.data.data])
    setReview({title: '', description: '', score: 0})
  })
  .catch(() => {})
}

const handleDelete = (id, e) => {  
  e.preventDefault()  
  AxiosWrapper.delete(`/api/v1/reviews/${id}`)
  .then(() => {      
      const include = [...reviews]
      const index = include.findIndex(data => data.id === id)
      include.splice(index, 1)
      setReviews(include)
  })
  .catch(resp => console.log(resp))
}

const setRating = (score, e) => {
  e.preventDefault()
  setReview({...review, score})
} 

let average_score, total = 0
let userReviews
if (loaded && reviews.length > 0){
 
  total = reviews.reduce((total, item) => total + item.attributes.score, 0)  
  average_score = total > 0 ? parseFloat(total) / parseFloat(reviews.length) : 0
  debugger
  userReviews = reviews.map((item, index) => {
    return (
      <Review 
        title={item.attributes.title}
        description={item.attributes.description}
        score={item.attributes.score}
        handleDelete={handleDelete}
        id={item.id}
      />
    )
  })
}

  return (
    <Wrapper>
      { 
        loaded &&
          <>
            <Colum>
              <Main>
                  <Header             
                    name={pub.data.attributes.name}
                    image_url={pub.data.attributes.image_url}
                    avg_score={average_score}
                    total_reviews={reviews.length}
                  />
                {userReviews}
              </Main>
            </Colum>
            <Colum>
              <ReviewForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={pub.data.attributes.name}
                setRating={setRating}
                review={review}                       
              />
            </Colum>
          </>
      }
    </Wrapper>
  )
}

export default Pub;