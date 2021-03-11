import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import TopNav from "../components/TopNav";
import '../styles/DashboardDoc.css'
import { Container, Col, Card } from 'react-bootstrap'

//import Footer from "../components/Footer";


const DashboardDoc = ({ history }) => {
  const token = useRecoilValue(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);

  //State
  // const [symptoms, setSymptoms] = useState("");
  // const [medicine, setMedicine] = useState("");
  // const [comments, setComments] = useState("");
  // const [current, setCurrent] = useState("");

  // const givePrescription = (userID, objID) => {
  //   axios.post(
  //     `/api/doctors/givePrescription`,
  //     {
  //       userId: userID,
  //       symptoms,
  //       medicine,
  //       objID,
  //       comments,
  //       date: Date.now(),
  //     },
  //     {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res.data, "give pres");
  //       // setUser(res.data);
  //       // localStorage.setItem("user", JSON.stringify(res.data));
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        'id': user._id
      }
    }

    axios.get(`/api/doctors/upcomingAppointments`, config)
      .then((res) => {
        console.log(res.data)
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <>
      <TopNav />
      <Container>
        {!user ? document.location.reload() : console.log('User detected')}
        <h1>Welcome {user.name}</h1>
        <Col sm={12} className='text-center'>
          <h3>Your Appointments</h3>
          {
            user.appointments && (
              user.appointments.map((appt) => (
                <Card border="primary" style={{ margin: '30px 15px 30px 15px' }}>
                  <Card.Header style={{ fontSize: '12px' }}>Appointment Id : <b>{appt._id}</b></Card.Header>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '24px' }}><b>{appt.doctor}</b></Card.Title>
                    <Card.Text>
                      <h5>Symptoms</h5>
                      {appt.symptoms}
                      <br />
                      <br />

                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Appointment Date : {appt.appointmentDate.substring(0, 10)}</small>
                    {user.appointments.prescription ? (
                      <>
                      </>
                    ) : (
                        <>
                        </>
                      )}

                  </Card.Footer>
                </Card>

              ))
            )
          }
        </Col>
      </Container>
    </>
  );
};

export default DashboardDoc;