import React, { useState } from "react";
import axios from "axios";
import "../styles/covidpage.css";
import { Button, Form, Row, Col } from "react-bootstrap";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";

const GetMedicine = ({ history }) => {
  const [name, setName] = useState("");
  const [medicine, setMedicine] = useState(null);
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkCovid = async (name) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        }
      };
      console.log(name)
      const { data } = await axios.get(
        "https://hacknsut21api.herokuapp.com/medicine?medicine_name=" + name,
        config
      );
      console.log(data);
      setMedicine(data[0])
      setPrice(data[1])


      console.log(medicine)
      console.log(price)

    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = (e, data) => {

    e.preventDefault();


    //login api
    checkCovid(name);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
          <>
            <TopNav />

            <div className="p-0">
              <FormContainer>
                <h1>Find Medicines </h1>
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="age">
                    <Form.Label>Medicine Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Medicine Name ..."
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    ></Form.Control>
                  </Form.Group>

                  <div className='text-center mb-5'>
                    <Button type="button" variant="success" block onClick={submitHandler}>
                      Find
                </Button>
                  </div>
                </Form>
              </FormContainer>

              {medicine ? (


                <Row className='mb-5'>
                  <Col></Col>
                  <Col>
                    <Row style={{ fontSize: '26px', borderBottom: 'solid 1px black' }}>
                      Name
                  </Row>
                    {
                      medicine && (
                        medicine.map((m) => (
                          <Row className='py-2' style={{ width: '500px' }}>{m}</Row>
                        ))
                      )
                    }
                  </Col>
                  <Col style={{ width: '80px' }}>
                    <Row style={{ fontSize: '26px', borderBottom: 'solid 1px black', width: '100px' }}>
                      Price
                  </Row>
                    {
                      price && (
                        price.map((p) => (
                          <Row className='py-2' style={{}}>{p}</Row>
                        ))
                      )
                    }
                  </Col>
                </Row>

              ) : (<Loader />)}


            </div>
            <Footer />
          </>
        )}
    </>
  );
};

export default GetMedicine;
