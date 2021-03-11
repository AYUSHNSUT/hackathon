import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userAtom } from "../global/globalState";
import TopNav from "../components/TopNav";
import '../styles/DashboardDoc.css'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
//import Loader from '../components/Loader'
import Footer from "../components/Footer";


const DashboardUser = ({ history }) => {
  //const token = useRecoilValue(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);


  useEffect(() => {
    async function getDetails() {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          },
          params: {
            'id': user._id
          }
        }
        const { data } = await axios.get('/api/users/getPrescriptions', config)
        console.log(data)
        setUser(data)

      } catch (err) {
        console.error(err)
      }
    }
    getDetails()

  }, []);



  return (
    <>
      <TopNav />
      {!user ? document.location.reload() : console.log('User detected')}

      <h1>Welcome {user.name}</h1>

      <Row>
        <Col sm={4} className='text-center px-5'>
          <h3>Your Appointments</h3>
          {
            user.appointment && (
              user.appointment.map((appt) => (
                <Card border="primary" style={{ margin: '30px 15px 30px 15px' }}>
                  <Card.Header style={{ fontSize: '12px' }}>Appointment Id : <b>{appt._id}</b></Card.Header>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '24px' }}><b>{appt.doctor}</b></Card.Title>
                    <Card.Text>
                      <h5>Symptoms</h5>
                      {appt.symptoms}
                      <br />
                      <br />
                      <h5>Prescription from Doctor</h5>
                      {user.appointment && user.appointment.prescription ? (
                        <>
                        </>
                      ) : (
                          <div><b>
                            Yet to Prescribe
                            </b></div>
                        )}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Appointment Date : {appt.appointmentDate.substring(0, 10)}</small>
                  </Card.Footer>
                </Card>

              ))
            )
          }

        </Col>
        <Col sm={8} className='text-center'>
          <div className='mb-5'>
            <h3>Services Provided</h3>
          </div>
          <Row className='pb-5'>
            <Col>
              <div className='homepageCard'>
                <div className='img py-1'><img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-4-3.png' alt='img' /></div>
                <h4 className='title py-2'>Book Appointment</h4>
                <div className='desc py-2 px-3'>Get yourself checked by leading doctors!</div>
                <LinkContainer to='/appointment'>
                  <Button variant="outline-success" onClick={() => {
                    console.log(user)
                    if (user === null) {
                      history.push('/loginchoice')
                    } else {
                      history.push('/appointment')
                    }
                  }}>
                    Learn More
                        </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>
              <div className='homepageCard'>
                <div className='img py-1'><img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-16-3.png' alt='img' /></div>
                <h4 className='title py-2'>Heart Risk Prediction</h4>
                <div className='desc py-2 px-3'>heart is health". We will give you a reliable picture of your heart health, fully online!</div>
                <LinkContainer to='/heartprediction'>
                  <Button variant="outline-success" onClick={() => {
                    console.log(user)
                    if (user === null) {
                      history.push('/loginchoice')
                    } else {
                      history.push('/heartprediction')
                    }
                  }}>
                    Learn More
                        </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>

              <div className='homepageCard'>
                <div className='img py-1'><img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-13-3.png' alt='img' /></div>
                <h4 className='title py-2'>Find Medicine</h4>
                <div className='desc py-2 px-3'>Know your medicine. search all kinds of medicines from our database</div>
                <LinkContainer to='/medicine'>
                  <Button variant="outline-success" onClick={() => {
                    console.log(user)
                    if (user === null) {
                      history.push('/loginchoice')
                    } else {
                      history.push('/medicine')
                    }
                  }}>
                    Learn More
                        </Button>
                </LinkContainer>
              </div>
            </Col>
          </Row>
          <Row className='pb-5'>

            <Col>
              <div className='homepageCard'>
                <div className='img py-1'><img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-14-3.png' alt='img' /></div>
                <h4 className='title py-2'>Book a Test</h4>
                <div className='desc py-2 px-3'>Have your doubts? Get tested for covid-19.</div>
                <LinkContainer to='/testing'>
                  <Button variant="outline-success" onClick={() => {
                    console.log(user)
                    if (user === null) {
                      history.push('/loginchoice')
                    } else {
                      history.push('/testing')
                    }
                  }}>
                    Learn More
                        </Button>
                </LinkContainer>
              </div>
            </Col>

            <Col>
              <div className='homepageCard'>
                <div className='img py-1'><img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-9-3.png' alt='img' /></div>
                <h4 className='title py-2'>Covid Vaccination</h4>
                <div className='desc py-2 px-3'>Opt for vaccination at nearby centres</div>
                <LinkContainer to='/vaccination'>
                  <Button variant="outline-success" onClick={() => {
                    console.log(user)
                    if (user === null) {
                      history.push('/loginchoice')
                    } else {
                      history.push('/vaccination')
                    }
                  }}>
                    Learn More
                        </Button>
                </LinkContainer>
              </div>
            </Col>
            <Col>

              <div className='homepageCard'>
                <div className='img py-1'><img src='https://www.elegantthemes.com/layouts/wp-content/uploads/2018/05/health-icon-6-3.png' alt='img' /></div>
                <h4 className='title py-2'>Covid Prediction</h4>
                <div className='desc py-2 px-3'>Get a fairly potential self-test result at home</div>
                <LinkContainer to='/covidprediction'>
                  <Button variant="outline-success" onClick={() => {
                    console.log(user)
                    if (user === null) {
                      history.push('/loginchoice')
                    } else {
                      history.push('/covidprediction')
                    }
                  }}>
                    Learn More
                        </Button>
                </LinkContainer>
              </div>
            </Col>

          </Row>

        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default DashboardUser;