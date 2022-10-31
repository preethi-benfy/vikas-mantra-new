import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

export default function index() {
  
  const pageTitle = 'Enquiry Form';
  return (
    <>
      <style>{`

    body {
    background: #F5F5F5;
    }

    `}</style>

      <Breadcrumb pageName={pageTitle} />

      <section className={'pt60' + ' ' + 'pb60' + ' ' + styles.eqBg}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2>
                Admissions –<br></br>Enquiry Form
              </h2>
            </div>

            <div className={'col-md-7' + ' ' + styles.schoolLogo}>
              <img src='/assets/building-transport.png' alt='image' />
            </div>
          </div>
        </div>
      </section>

      <section className='VectorDot'>
        <div className='container'>

          <div className='row'>
            <div className={'col-md-10 col-xs-12 col-sm-12' + ' ' + styles.formCenter}>
              <div className={styles.enquiryForm}>
                <div className={'row' + ' ' + styles.form}>
                  <div className='col-md-5'>
                    <h5 className='mb-5'>Child Information</h5>

                    <Form>
                      <div className='mb-5'>
                        <label>Name of the Child</label>

                        <Form.Control className={styles.formText} type='text' />
                      </div>

                      <div className='mb-5'>
                        <label>Student Date of Birth</label>

                        <Form.Control className={styles.formText} type='text' />
                      </div>

                      <div className='mb-5'>
                        <label>Last Class Studied</label>

                        <Form.Control className={styles.formText} type='text' />
                      </div>

                      <div className='mb-5'>
                        <label>Name of the Current school</label>

                        <Form.Control className={styles.formText} type='text' />
                      </div>

                      <div className='mb-5'>
                        <label>Admission seeking for</label>

                        <Form.Control className={styles.formText} type='text' />
                      </div>
                    </Form>
                  </div>

                  <div className='col-md-5 offset-md-1'>
                    <div className={styles.formPb}>
                      <h5 className='mb-5'>Parent Information : Father</h5>

                      <Form>
                        <div className='mb-5'>
                          <label>Name</label>

                          <Form.Control
                            className={styles.formText}
                            type='text'
                          />
                        </div>

                        <div className='mb-5'>
                          <div className='row'>
                            <div className='col-md-6 mb-5'>
                              <label>Phone Number</label>

                              <Form.Control
                                className={styles.formText}
                                type='text'
                              />
                            </div>

                            <div className='col-md-6 mb-5'>
                              <label>Email</label>

                              <Form.Control
                                className={styles.formText}
                                type='text'
                              />
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>

                    <div>
                      <h5 className='mb-5'>Parent Information : Mother</h5>

                      <Form>
                        <div className='mb-5'>
                          <label>Name</label>

                          <Form.Control
                            className={styles.formText}
                            type='text'
                          />
                        </div>

                        <div className='mb-5'>
                          <div className='row'>
                            <div className='col-md-6 mb-5'>
                              <label>Phone Number</label>

                              <Form.Control
                                className={styles.formText}
                                type='text'
                              />
                            </div>

                            <div className='col-md-6 mb-5'>
                              <label>Email</label>

                              <Form.Control
                                className={styles.formText}
                                type='text'
                              />
                            </div>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>

                  <div className='col-md-11'>
                    <Form>
                      <div className='mb-5'>
                        <label className='mb-5'>
                          Admission of Communication
                        </label>

                        <Form.Control className={styles.formText} type='text' />
                      </div>
                    </Form>

                    <a href='#'>
                      <Button className={'brownBtn'}>View All</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
