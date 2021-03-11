import React from 'react'
import '../styles/footer.css'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className=''>
      <div className='footerMain text-center text-white' style={{ paddingTop: '80px' }}>
        <Container className='py-5'>
          <h1>Better Health Care Is Our Mission</h1>
          <h6>24/7 SERVICE. SAME DAY APPOINTMENTS ARE AVAILABLE</h6>
          <Row style={{ paddingTop: '15px' }}>
            <Col className='text-center text-white text-lg' sm={4}>
              <i className="fas fa-phone-alt"></i> (344) 532-2352
            </Col>
            <Col className='text-center text-white text-lg' sm={4}>
              <i className="far fa-envelope"></i> support@ChikitsApp.com
            </Col>
            <Col className='text-center text-white text-lg' sm={4}>
              <i className="fas fa-search-location"></i>1235 New Delhi, Delhi, India
            </Col>
          </Row>


        </Container>
      </div>


      <Row className='bg-dark text-white p-0 socialNav'>
        <Col sm={1}></Col>
        <Col sm={9}>Designed By: <b>Us</b> | InnovateNSUT</Col>
        <Col sm={1}>
          <Row>
            <Col sm={4}><i className="fab fa-facebook-f"></i></Col>
            <Col sm={4}><i className="fab fa-google-plus-g"></i></Col>
            <Col sm={4}><i className="fab fa-twitter"></i></Col>
          </Row>
        </Col>
        <Col sm={1}></Col>
      </Row>
    </div>
  )
}

export default Footer
