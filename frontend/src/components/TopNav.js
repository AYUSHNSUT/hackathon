import React from 'react'
import '../styles/navbar.css'
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userAtom, tokenAtom, typeAtom } from "../global/globalState";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



// let userData = localStorage.getItem('userData');
// let doctorData = localStorage.getItem('doctorData');


const TopNav = ({ history }) => {

  const [user, setUser] = useRecoilState(userAtom);
  const [, setToken] = useRecoilState(tokenAtom);
  const [type, setType] = useRecoilState(typeAtom);


  const logout = () => {
    history.push("/");
    setUser(null);
    setToken(null);
    setType(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("type");

  };

  //console.log(type, user)

  return (
    <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark" className='customNavbar py-3 px-5'>

      <LinkContainer to='/'>
        <Navbar.Brand href="/">ChikitsApp</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {type === "Doctor" ? (
            <>
              <div className='navDiv' onClick={() => history.push('/DashboardDoc')}>
                Dashboard
              </div>
            </>
          ) : (
              <>
                {type === "User" ? (
                  <>
                    <div className='navDiv' onClick={() => history.push('/DashboardUser')}>
                      Dashboard
                          </div>
                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                      <NavDropdown.Item >
                        <div className='navDiv' onClick={() => history.push('/appointment')}>
                          Book Appointment
                          </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        <div className='navDiv' onClick={() => history.push('/testing')}>
                          Book a Test
                          </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        <div className='navDiv' onClick={() => history.push('/heartprediction')}>
                          Heart Risk prediction
                          </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        <div className='navDiv' onClick={() => history.push('/covidprediction')}>
                          Covid Prediction
                          </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        <div className='navDiv' onClick={() => history.push('/medicine')}>
                          Find Medicine
                          </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item >
                        <div className='navDiv' onClick={() => history.push('/vaccination')}>
                          Covid Vaccination
                          </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <div className='navDiv' onClick={() => history.push('/covid')}>
                      Covid 19
              </div>
                    <div className='navDiv' onClick={() => history.push('/testing')}>
                      Covid Testing
              </div>


                    <div className='navDiv' onClick={() => history.push('/about')}>
                      About
              </div>


                  </>
                ) : (
                    <>
                      <div className='navDiv' onClick={() => history.push('/loginchoice')}>
                        Dashboard
                          </div>
                      <NavDropdown title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item >
                          <div className='navDiv' onClick={() => history.push('/appointment')}>
                            Book Appointment
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <div className='navDiv' onClick={() => history.push('/testing')}>
                            Book a Test
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <div className='navDiv' onClick={() => history.push('/heartprediction')}>
                            Heart Risk Prediction
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <div className='navDiv' onClick={() => history.push('/covidprediction')}>
                            Covid Prediction
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <div className='navDiv' onClick={() => history.push('/medicine')}>
                            Find Medicine
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                          <div className='navDiv' onClick={() => history.push('/vaccination')}>
                            Covid Vaccination
                          </div>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <div className='navDiv' onClick={() => history.push('/covid')}>
                        Covid 19
                      </div>
                      <div className='navDiv' onClick={() => history.push('/testing')}>
                        Covid Test
                      </div>


                      <div className='navDiv' onClick={() => history.push('/about')}>
                        About
                      </div>

                    </>
                  )}
              </>
            )}


          {user ? (
            <div className='navDiv' onClick={logout}>
              Logout
            </div>
          ) : (
              <>
                <div className='navDiv' onClick={() => history.push('/loginchoice')}>
                  Login
              </div>
                <div className='navDiv' onClick={() => history.push('/registerchoice')}>
                  Register
              </div>
              </>
            )}
          {/* {
            userData &&
            <LinkContainer to='/'>
              <Nav.Link onClick={userLogout()}>Logout</Nav.Link>
            </LinkContainer>
          }
          {
            doctorData &&
            <LinkContainer to='/'>
              <Nav.Link onClick={doctorLogout()}>Logout</Nav.Link>
            </LinkContainer>
          }
          {
            !userData &&
            !doctorData &&
            <LinkContainer to='/loginchoice'>
              <Nav.Link >Login</Nav.Link>
            </LinkContainer>
          }
          {
            !userData &&
            !doctorData &&
            <LinkContainer to='/registerchoice'>
              <Nav.Link >Register</Nav.Link>
            </LinkContainer>
          } */}


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}

export default withRouter(TopNav)
