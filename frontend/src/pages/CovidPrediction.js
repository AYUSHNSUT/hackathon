import React, { useState } from 'react'
import axios from 'axios'
import '../styles/covidpage.css'
import { Button, Form, Container } from 'react-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'



const CovidPage = ({ history }) => {


  const [age, setAge] = useState(18)
  const [gender, setGender] = useState(null);
  const [temp, setTemp] = useState('')
  const [cough, setCough] = useState(0)
  const [throat, setThroat] = useState(null)
  const [weakness, setWeakness] = useState(null)
  const [breathing, setBreathing] = useState(null)
  const [drowsiness, setDrowsiness] = useState(null)
  const [chest, setChest] = useState(null)
  const [travel, setTravel] = useState(null)
  const [diabetes, setDiabetes] = useState(null)
  const [heart, setHeart] = useState(null)
  const [lung, setLung] = useState(null)
  const [stroke, setStroke] = useState(null)
  const [symptoms, setSymptoms] = useState(null)
  const [BP, setBP] = useState(null)
  const [kidney, setKidney] = useState(null)
  const [appetite, setAppetite] = useState(null)
  const [smell, setSmell] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const checkCovid = async (age, gender, temp, cough, throat, weakness, breathing, drowsiness, chest, travel, diabetes, heart, lung, stroke, symptoms, BP, kidney, appetite, smell) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          q1: age,
          q2: gender,
          q3: temp,
          q4: cough,
          q5: throat,
          q6: weakness,
          q7: breathing,
          q8: drowsiness,
          q9: chest,
          q10: travel,
          q11: diabetes,
          q12: heart,
          q13: lung,
          q14: stroke,
          q15: symptoms,
          q16: BP,
          q17: kidney,
          q18: appetite,
          q19: smell,
        }
      }
      const { data } = await axios.get('https://hacknsut21api.herokuapp.com/covid/', config)
      console.log(data)
      setResult(data)
      setLoading(false)
      //localStorage.setItem('doctorData', JSON.stringify(data))
      //history.push('/')
      //window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';


    } catch (err) {
      console.error(err)
    }
  }




  const submitHandler = (e, data) => {
    e.preventDefault()
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    //login api
    setLoading(true)
    checkCovid(age, gender, temp, cough, throat, weakness, breathing, drowsiness, chest, travel, diabetes, heart, lung, stroke, symptoms, BP, kidney, appetite, smell)

  };

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />

          <div className='p-0'>
            <FormContainer>
              <h1>Take the Survey </h1>
              <Form onSubmit={submitHandler}>

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

                <Form.Group controlId="temperature">
                  <Form.Label>Body temperature</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder='Enter your measured body temperature ...'
                    onChange={e => { setTemp(e.currentTarget.value) }}
                    value={temp}

                  ></Form.Control>
                </Form.Group>


                <Form.Group controlId="cough">
                  <Form.Label>Are you suffering from dry Cough?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={cough === "1"}
                    onChange={e => setCough(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={cough === "0"}
                    onChange={e => setCough(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="throat">
                  <Form.Label>Are you suffering from sour throat?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={throat === "1"}
                    onChange={e => setThroat(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={throat === "0"}
                    onChange={e => setThroat(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="body">
                  <Form.Label>Do you feel weakness in your body?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={weakness === "1"}
                    onChange={e => setWeakness(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={weakness === "0"}
                    onChange={e => setWeakness(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="breathing">
                  <Form.Label>Did you have any breathing problems for the past few days?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={breathing === "1"}
                    onChange={e => setBreathing(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={breathing === "0"}
                    onChange={e => setBreathing(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="drowsiness">
                  <Form.Label>Have you had drowsiness for the past few days?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={drowsiness === "1"}
                    onChange={e => setDrowsiness(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={drowsiness === "0"}
                    onChange={e => setDrowsiness(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="chest">
                  <Form.Label>Did you at any time feel pain in your chest for the past few days?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={chest === "1"}
                    onChange={e => setChest(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={chest === "0"}
                    onChange={e => setChest(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="travel">
                  <Form.Label>Have you evered travelled to a covid infeccted area?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={travel === "1"}
                    onChange={e => setTravel(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={travel === "0"}
                    onChange={e => setTravel(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="diabetes">
                  <Form.Label>Do you have a diabetes problem?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={diabetes === "1"}
                    onChange={e => setDiabetes(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={diabetes === "0"}
                    onChange={e => setDiabetes(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="heart">
                  <Form.Label>Do you have heart problems?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={heart === "1"}
                    onChange={e => setHeart(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={heart === "0"}
                    onChange={e => setHeart(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="lungs">
                  <Form.Label>Do you have lung problems?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={lung === "1"}
                    onChange={e => setLung(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={lung === "0"}
                    onChange={e => setLung(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="stroke">
                  <Form.Label>Do you have a history of strokes or reduced immunity?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={stroke === "1"}
                    onChange={e => setStroke(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={stroke === "0"}
                    onChange={e => setStroke(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="symptoms">
                  <Form.Label>Have your symptoms worsened over the past few days?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={symptoms === "1"}
                    onChange={e => setSymptoms(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={symptoms === "0"}
                    onChange={e => setSymptoms(e.currentTarget.value)}
                  />
                </Form.Group>


                <Form.Group controlId="BP">
                  <Form.Label>Do you have high blood pressure?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={BP === "1"}
                    onChange={e => setBP(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={BP === "0"}
                    onChange={e => setBP(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="kidney">
                  <Form.Label>Do you have kidney problems?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={kidney === "1"}
                    onChange={e => setKidney(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={kidney === "0"}
                    onChange={e => setKidney(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="appetite">
                  <Form.Label>Is there something abnormal with your appetite?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={appetite === "1"}
                    onChange={e => setAppetite(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={appetite === "0"}
                    onChange={e => setAppetite(e.currentTarget.value)}
                  />
                </Form.Group>

                <Form.Group controlId="smell">
                  <Form.Label>Have you suffered from loss of sense of smell?</Form.Label>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    value="1"
                    checked={smell === "1"}
                    onChange={e => setSmell(e.currentTarget.value)}
                  />

                  <Form.Check
                    type="radio"
                    label="No"
                    value="0"
                    checked={smell === "0"}
                    onChange={e => setSmell(e.currentTarget.value)}
                  />
                </Form.Group>
                <div className='text-center mb-5'>
                  <Button type='button'
                    variant='success'
                    block
                    onClick={submitHandler}

                  >Detect</Button>
                </div>
              </Form>

            </FormContainer>

            {
              result === null ? (
                <>
                </>
              ) : (
                  <>
                    {
                      result === 1 ? (
                        <Container className='text-center my-5'>
                          <h3 variant='danger' className='mb-4' style={{ fontWeight: 'bolder', color: 'red' }}>
                            You might be infected with CoronaVirus.
                          </h3>
                          <Button variant='warning' onClick={() => { history.push('/testing') }}>Book a Test</Button>
                        </Container>
                      ) : (
                          <Container className='text-center my-5'>
                            <h3 variant='success' className='mb-4' style={{ fontWeight: 'bolder', color: 'green' }}>You don't seem to be positive for Covid-19</h3>
                            <h4>Take Precautions and Stay Safe !!</h4>
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

export default CovidPage
