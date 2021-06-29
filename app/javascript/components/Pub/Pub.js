import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components';
import ReviewForm from './ReviewForm';
import Review from './Review';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Colum = styled.div`
  background: #fff;
  height: 98vh;
  overflow: scroll;

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

  useEffect(()=>{
    const slug = props.match.params.slug;
    const url = `/api/v1/pubs/${slug}`;

    axios.get(url)
    .then(resp => {
            setPub(resp.data)
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

  const csrfToken = document.querySelector('meta[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

  const pub_id = pub.data.id

  axios.post('/api/v1/reviews', {review, pub_id})
  .then(resp => {
    const included = [...pub.included, resp.data.data]
    setPub({...pub, included})
    //debugger
    setReview({title: '', description: '', score: 0})
    //rerenderReview()
  })
  .catch(resp => {})
}

const setRating = (score, e) => {
  e.preventDefault()
  setReview({...review, score})
} 

let reviews
if (loaded && pub.included){
  reviews = pub.included.map( (item, index) => {
    return (
      <Review 
        key={index}
        title={item.attributes.title}
        description={item.attributes.description}
        score={item.attributes.score}
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
                    avg_score={pub.data.attributes.avg_score}
                    total_reviews={pub.included.length}
                  />
                {reviews}
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