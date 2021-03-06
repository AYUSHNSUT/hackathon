import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/homepage.css'

const HomepageCard = (props) => {
  return (
    <div className='homepageCard'>
      <div className='img py-1'><img src={props.img} /></div>
      <h4 className='title py-2'>{props.title}</h4>
      <div className='desc py-2 px-3'>{props.description}</div>
      <button type="button" className="btn btn-outline-success">Learn More</button>
    </div>
  )
}

export default HomepageCard
