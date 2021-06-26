import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components';
import ReviewForm from './ReviewForm';

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
  const [loader, setLoaded] = useState(false)

  useEffect(()=>{
    const slug = props.match.params.slug;
    const url = `/api/v1/pubs/${slug}`;

    axios.get(url)
    .then(resp => {
            setPub(resp.data)
            setLoaded(true)
            console.log(resp)          
    })
    .catch(resp => console.log(resp))
  },[])

const handleChange = (e) => {
  e.preventDefault()

  setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  console.log('review: ', review)
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
    setReview({title: '', description: '', score: 0})
  })
  .catch(resp => {})
}

const setRating = (score, e) => {
  e.preventDefault
  setReview({...review, score})
} 

  return (
    <Wrapper>
      { 
        loader &&
          <>
            <Colum>
              <Main>
                  <Header             
                    name={pub.data.attributes.name}
                    image_url={pub.data.attributes.image_url}
                    avg_score={pub.data.attributes.avg_score}
                    total_reviews={pub.data.relationships.reviews.data.length}
                  />
                <div className="reviews"></div>
              </Main>
            </Colum>
            <Colum>
              <ReviewForm 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={pub.data.relationships.reviews.data.name}
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