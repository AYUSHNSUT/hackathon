import React, { useState } from 'react'
import axios from 'axios'
import '../styles/covidpage.css'
import { Button, Form, Container } from 'react-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'


const HeartPrediction = ({ history }) => {


  const [age, setAge] = useState(18)
  const [gender, setGender] = useState(null);
  const [cp, setCP] = useState('')
  const [trestbps, setTrestbps] = useState(0)
  const [col, setCol] = useState('')
  const [fbs, setFbs] = useState('')
  const [ecg, setEcg] = useState('')
  const [thalach, setThalach] = useState('')
  const [exang, setExang] = useState(null)
  const [oldpeak, setOldpeak] = useState('')
  const [thal, setThal] = useState('')
  const [result, setResult] = useState('')


  const [loading, setLoading] = useState(false)

  const checkHeart = async (age, gender, cp, trestbps, col, fbs, ecg, thalach, exang, oldpeak, thal) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          q1: age,
          q2: gender,
          q3: cp,
          q4: trestbps,
          q5: col,
          q6: fbs,
          q7: ecg,
          q8: thalach,
          q9: exang,
          q10: oldpeak,
          q11: thal
        }
      }
      const { data } = await axios.get('https://hacknsut21api.herokuapp.com/heart/', config)
      console.log(data)
      setResult(data)


    } catch (err) {
      console.error(err)
    }
  }




  const submitHandler = (e) => {
    e.preventDefault()

    //checking  api
    checkHeart(age, gender, cp, trestbps, col, fbs, ecg, thalach, exang, oldpeak, thal)

  };

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />

          <div className='p-0'>
            <FormContainer className='mb-5'>
              <h1>Take the Survey </h1>
              <Form className='mb-5' onSubmit={submitHandler}>

                <Form.Group controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter Age ...'
                    value={age}
                    onChange={e => setAge(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>


                <Form.Group controlId="gender">
                  <Form.Label>Sex</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Male"
                    value="0"
                    checked={gender === "0"}
                    onChange={e => setGender(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="Female"
                    value="1"
                    checked={gender === "1"}
                    onChange={e => setGender(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="cp">
                  <Form.Label>Enter your chest pain type</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Value of 0/1/2/3 ...'
                    value={cp}
                    onChange={e => setCP(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="trestbps">
                  <Form.Label>Enter your resting blood pressure</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter BP ...'
                    value={trestbps}
                    onChange={e => setTrestbps(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="col">
                  <Form.Label>Enter serum cholestrol in mg/dl</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter cholestrol ...'
                    value={col}
                    onChange={e => setCol(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="fbs">
                  <Form.Label>Enter your fasting blood sugar</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={fbs}
                    onChange={e => setFbs(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="ecg">
                  <Form.Label>Enter your resting ecg values</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='valu between 0 to 4 ...'
                    value={ecg}
                    onChange={e => setEcg(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="thalach">
                  <Form.Label>Enter maximum heart rate achieved</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={thalach}
                    onChange={e => setThalach(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="exang">
                  <Form.Label>Have you experienced exercise induced angina?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={exang === "0"}
                    onChange={e => setExang(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={exang === "1"}
                    onChange={e => setExang(e.currentTarget.value)}
                  />

                </Form.Group>


                <Form.Group controlId="oldpeak">
                  <Form.Label>Enter ST depression induced by exercise relative to rest </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={oldpeak}
                    onChange={e => setOldpeak(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <Form.Group controlId="thal">
                  <Form.Label>Enter thal value</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter value ...'
                    value={thal}
                    onChange={e => setThal(e.currentTarget.value)}
                  ></Form.Control>

                </Form.Group>

                <div className='text-center'>

                  <Button type='button'
                    variant='success'

                    block
                    onClick={submitHandler}
                  >Detect</Button>

                </div>
              </Form>
            </FormContainer>
            {
              result === '' ? (
                <>
                </>
              ) : (
                  <>
                    {
                      result === 1 ? (
                        <Container className='text-center my-5'>
                          <h3 variant='danger' className='mb-4' style={{ fontWeight: 'bolder', color: 'red' }}>
                            You are at a risk for Heart Disease. We would suggest you to book an Appointment
                          </h3>
                          <Button variant='warning' onClick={() => { history.push('/appointment') }}>Book an Appointment</Button>
                        </Container>
                      ) : (
                          <Container className='text-center my-5'>
                            <h3 variant='success' className='mb-4' style={{ fontWeight: 'bolder', color: 'green' }}>You are less likely to have a Heart Disease</h3>
                          </Container>
                        )
                    }
                  </>
                )
            }
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default HeartPrediction

