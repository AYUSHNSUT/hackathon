import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/appointmentpage.css'
import { useRecoilState } from "recoil";
import { userAtom } from "../global/globalState";
import { Button, Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import TopNav from '../components/TopNav'

const AppointmentPage = ({ history }) => {
  const [doctor, setDoctor] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [loading, setLoading] = useState(true)

  const [user,] = useRecoilState(userAtom);
  //const token = useRecoilValue(tokenAtom);

  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    async function getDoctors() {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        }
        const { data } = await axios.get('/api/doctors', config)
        console.log(data)
        setDoctors(data)
        setLoading(false)
      } catch (err) {
        console.error(err)
      }
    }


    async function getPrescriptions() {
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
        //setDoctors(data)
        setLoading(false)

      } catch (err) {
        console.error(err)
      }
    }

    if (user) {
      console.log(user._id)
      getDoctors()
      getPrescriptions()
      console.log(doctors)
    }
    else { history.push('/loginchoice') }

  }, [doctors, history, user]);

  const handleAppointment = async (symptoms, appointmentDate, speciality, doctor, userId) => {

    try {
      console.log("clicked")
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post('/api/users/bookAppointment', {
        symptoms,
        appointmentDate,
        speciality,
        doctor,
        userId
      }, config)
      console.log(data)
      history.push('/DashboardUser')
      setLoading(false)

    } catch (err) {
      console.error(err)
    }

  };


  const submitHandler = (e, data) => {
    e.preventDefault()
    console.log(symptoms)
    console.log(speciality)
    console.log(doctor)
    console.log(appointmentDate)

    //appointment api

    handleAppointment(symptoms, appointmentDate, speciality, doctor, user._id)

  };



  return (
    <>
      <TopNav />
      <FormContainer>
        <h1>Book an Appointment </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="symptoms">
            <Form.Label>Symptoms</Form.Label>
            <Form.Control
              type="text"
              placeholder='Symptoms (if any)'
              value={symptoms}
              onChange={e => setSymptoms(e.target.value)}
            ></Form.Control>

          </Form.Group>

          {
            doctors ? (
              <>
                <Form.Group controlId="speciality">
                  <Form.Label>Speciality</Form.Label>
                  <Form.Control
                    as="select"
                    value={speciality}
                    onChange={e => setSpeciality(e.target.value)}
                  >
                    {
                      doctors.map((doc) => (
                        <option key={doc._id} value={doc.speciality}>
                          {doc.speciality}
                        </option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>
              </>
            ) : (
                <>
                </>
              )
          }

          {
            doctors ? (
              <>
                <Form.Group controlId="doctorName">
                  <Form.Label>Doctor Name</Form.Label>
                  <Form.Control
                    as="select"
                    value={doctor}
                    onChange={e => setDoctor(e.target.value)}
                  >
                    {
                      doctors.map((doc) => (
                        doc.speciality === speciality && (
                          <option key={doc._id} value={doc.name}>
                            {doc.name}
                          </option>
                        )
                      ))
                    }
                  </Form.Control>
                </Form.Group>
              </>
            ) : (
                <>
                </>
              )
          }


          <Form.Group controlId="appointmentDate">
            <Form.Label>Appointment Date</Form.Label>
            <Form.Control
              type="date"
              value={appointmentDate}
              onChange={e => setAppointmentDate(e.target.value)}
            ></Form.Control>

          </Form.Group>

          <div className='text-center'>
            <Button type='submit' block variant='success'>Book</Button>
          </div>
        </Form>


      </FormContainer>
    </>
  );
};

export default AppointmentPage;