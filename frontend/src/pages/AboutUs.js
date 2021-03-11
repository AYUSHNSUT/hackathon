import React, { useState } from 'react'
import '../styles/aboutUs.css'
import { Container, Row } from 'react-bootstrap'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import Loader from '../components/Loader'


const AboutUs = () => {

  const [loading,] = useState(false)



  return (
    <>
      {loading ? <Loader /> : (
        <>
          <TopNav />

          <div className='p-0'>
            <h1 className='titleHeading' marginTop="40px">About US</h1>
            <hr></hr>

            <Container>
              <div className='text-center'>
                <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FCV9tdVAJ-GWM-nzSG565QHaE8%26pid%3DApi&f=1' alt='default' style={{ width: '500px' }} />

              </div>
              <div className='dummyDesc'>
                <h3 className='mb-4 mt-3'>HEALTH AT HOME</h3>
                <p>
                  We strive to provide trustworthy services at home from the best practitioners to our customers, at the convenience of their home or at a licensed medical center. We are a bridge; one that connects anyone in need to the right doctor, providing dozens of services – booking appointments, diagnostic tests, obtaining medicines, and learning to live a healthier happier life.
                  Healthcare providers can also harness the power of 'Company name' as the platform that helps them build their presence, grow establishments, and engage patients more deeply than ever.
                    </p>


              </div>

              <div className="previews">
                <Row className="imageDataRows" sm={3}>
                  <div>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fsenior-doctor-looking-papers-27720698.jpg&f=1&nofb=1' alt='default' className='img1' />
                    <p className="bottomImageClass">We heed to customers from all across the country, giving them the best services possible</p>
                  </div>
                  <div>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg3.stockfresh.com%2Ffiles%2Fk%2Fkurhan%2Fm%2F36%2F386081_stock-photo-medical-doctor.jpg&f=1&nofb=1' alt='default' className='img1' />
                    <p className="bottomImageClass">We help millions of patients and thousands of doctors with a simpler  and easier healthcare experience.</p>

                  </div>
                  <div>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst.depositphotos.com%2F1194063%2F1335%2Fi%2F950%2Fdepositphotos_13359375-stock-photo-happy-senior-patient-and-doctor.jpg&f=1&nofb=1' alt='default' className='imgl' />
                    <p className="bottomImageClass">We help millions of patients and thousands of doctors with a simpler  and easier healthcare experience.</p>

                  </div>
                </Row >

              </div>

              <div classname="pseudo">
                <Row sm={2}>
                  <div>
                    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Fd1%2F49%2F1177902948429441476b834e014f%2F150413-doctor-stock.jpg&f=1&nofb=1' alt='img' className='viewImage'></img>
                  </div>
                  <div>
                    <h2>
                      Diverse Minds One Purpose
                      </h2>
                    <p>
                      We are very committed and guided by our values and culture and want to help you to the best of our abilites. Book and appointment with us and see the magic
                      </p>
                  </div>
                </Row>
              </div>

              <div className="lastkarona">
                <h2 className="h1bottom">HEALTH COMES FIRST</h2>
                <p>
                  Our motto “Health Comes First” signifies the intrinsic motivation in each practician to provide quality healthcare services to their patients. We wish to educate people about the underlying importance of health, and to help them live a healthier life.
                  Our motivation comes from the 4H – help, heal, healthy, happy.

                  </p>
              </div>

              <div className="lastkarona">
                <h2 className="h1bottom">How are we coping with COVID-19?</h2>
                <p>During these tough times, we have taken all possible measures to help people fight the SARS-CoV-2 (COVID-19), providing them with all necessary details/precautions about the virus, offering free online self-test interface, and enabling them to fix appointments for testing/vaccination for the virus.
                    Given the importance and urgency of Covid testing, we do not provide postal tests. All our tests are taken in a medical facility, either by a healthcare professional or as a guided self swab.</p>
              </div>




            </Container>
          </div>
          <Footer />
        </>
      )}
    </>
  )
}

export default AboutUs
