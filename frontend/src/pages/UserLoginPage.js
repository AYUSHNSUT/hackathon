import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useRecoilState } from "recoil";
import { userAtom, tokenAtom } from "../global/globalState";
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import '../styles/login.css'





const UserLoginPage = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setUser] = useRecoilState(userAtom);
  const [, setToken] = useRecoilState(tokenAtom);



  // function redirect() {
  //   window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/';
  // }


  const loginUser = async (email, password) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post('/api/users/login', { email, password }, config)
      console.log(data)
      await localStorage.setItem('user', JSON.stringify(data))
      await localStorage.setItem('token', JSON.stringify(data.token))
      await localStorage.setItem('type', 'User')
      history.push('/dashboardUser')
      //await redirect()

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
    loginUser(email, password)

  };

  return (
    <div className='loginContainer pb-5 my-5'>
      <FormContainer>
        <h1>Login </h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder='Enter email ...'
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></Form.Control>

          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder='Enter Password ...'
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></Form.Control>

          </Form.Group>

          <Button type='submit' variant='info'>Sign In</Button>
        </Form>

        <Row className='py-3'>
          <Col>
            New Customer?{' '}
            <Link to={'/registerchoice'}>
              Register
        </Link>
          </Col>
        </Row>
      </FormContainer>
    </div>
  );

}

export default UserLoginPage
