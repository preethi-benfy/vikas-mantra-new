import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const Admissions = () => {
    return (
        <>
            <section className='pt-4 greybg'>

                <div className='container position-relative'>

                    <div className='row'>

                        <div className='col-md-12'>
                            <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
                            |
                            <a className='mx-2'>Admissions</a>
                        </div>


                    </div>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Admissions</h2>
                        <img src='/assets/vectors/Vector.png' alt ="image" className={styles.vectorImg1} />

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' greybg'}>

                <div className="container">

                    <div className="row align-items-start">

                        <div className=" col-md-4">

                            <div className={styles.tabWidth + " nav flex-column nav-pills me-3"} id="v-pills-tab" role="tablist" aria-orientation="vertical">

                                <button className={styles.tabBtn + ' ' + styles.redBorder + " nav-link active text-start color-black position-relative"} id="v-pills-home-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                                    aria-selected="true">
                                    Admission Overview
                                    <FontAwesomeIcon icon={faCaretLeft} className={styles.leftIcon} />
                                </button>

                                <button className={styles.tabBtn + ' ' + styles.redBorder + " nav-link text-start color-black position-relative"} id="v-pills-profile-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                                    aria-selected="false">
                                    Admission Timeline
                                    <FontAwesomeIcon icon={faCaretLeft} className={styles.leftIcon} />
                                </button>

                                <button className={styles.tabBtn + ' ' + styles.redBorder + " nav-link text-start color-black position-relative"} id="v-pills-messages-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                                    aria-selected="false">
                                    Admission Procedure
                                    <FontAwesomeIcon icon={faCaretLeft} className={styles.leftIcon} />
                                </button>

                                <button className={styles.tabBtn + ' ' + " nav-link text-start color-black position-relative"} id="v-pills-settings-tab"
                                    data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                                    aria-selected="false">
                                    FAQ
                                    <FontAwesomeIcon icon={faCaretLeft} className={styles.leftIcon} />
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="tab-content" id="v-pills-tabContent">

                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"
                            tabindex="0">

                            <div className='row'>

                                <div className='col-md-8 offset-md-4'>

                                    <img src='/assets/banners/school-building2.png' alt ="image" className={styles.schoolBuildingImg} />

                                </div>


                                <div className={styles.cardmargin1 + ' col-md-8 offset-md-2 position-relative'}>

                                    <div className={styles.card1 + " card"}>

                                        <div className="card-body">
                                            <img src='/assets/vectors/Vector5.png' alt ="image" className={styles.Sec1vectorImg5} />
                                            <h5 className="card-title">Admission</h5>
                                            <hr className={styles.hrLine} />
                                            <h6 className="card-text">
                                                At VIKAS MANTRA PUBLIC SCHOOL,  admissions are  open  for
                                                the academic year 2022-23 from classes Lower KG to Grade 9.
                                                Each grade will have 3 divisions with class strength of no
                                                more than 30 students. At VMPS ,we  aim  to create a personalised
                                                education experience for each student and provide a platform to
                                                maximise each student’s learning and build on individual potential.
                                            </h6>

                                            <ul className='pt-4'>
                                                <li className='pt-1'>To find out more about admissions at VIKAS MANTRA PUBLIC SCHOOL or to visit the school for an admissions tour</li>
                                                <li className='pt-1'>Please contact the Admission Coordinator between 8.30 am and 4.30 pm., Mon-Sat  |  9.00 am – 1.00 pm on Saturdays (Except 2nd Sat)</li>
                                            </ul>
                                            <img src='/assets/vectors/Vector10.png' alt ="image" className={styles.Sec1vectorImg10} />
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"
                            tabindex="0">

                            <div className='row'>

                                <div className={styles.Sec2PdngBtm + ' col-md-8 offset-md-4'}>

                                    <img src='/assets/banners/school-building2.png' alt ="image" className={styles.schoolBuildingImg} />

                                </div>

                                <div className='col-md-8 offset-md-2'>
                                    <div></div>
                                </div>

                                <div className={ styles.order3 + ' col-md-6 py-5'}>
 
                                    <img src='/assets/banners/student.png' alt ="image" className={styles.studentImg} />

                                </div>

                                <div className={ styles.order2 + ' col-md-5 py-5 position-relative' }>

                                    <img src='/assets/vectors/Vector3.png' alt ="image" className={styles.Sec2vectorImg3} />
                                    <img src='/assets/VMPS.png' alt ="image" className={styles.Sec2vmpsImg} />

                                    <h2>Timelines and key milestones
                                        for the academic year 2022-23 VIKAS MANTRA PUBLIC SCHOOL admissions process
                                    </h2>

                                    <hr className={styles.hrLine} />

                                    <table className="table table-bordered">

                                        <tbody>

                                            <tr>

                                                <td>Admissions Open</td>
                                                <td>15th October 2021</td>

                                            </tr>

                                            <tr>

                                                <td>Application forms available from</td>
                                                <td>15th October 2021</td>

                                            </tr>

                                            <tr>

                                                <td>Rolling-admissions start date</td>
                                                <td>15th October 2021</td>

                                            </tr>

                                            <tr>

                                                <td>Admissions open till</td>
                                                <td>30th June 2022</td>

                                            </tr>

                                        </tbody>

                                    </table>

                                    <p className=' pt-3'>Please note that Admissions for the new academic year 2022-23
                                        at VIKAS MANTRA PUBLIC SCHOOL will commence from 23rd November
                                        2021 and the admissions will for this academic year will be
                                        closed on 30th June 2022.
                                    </p>

                                    <img src='/assets/vectors/Vector9.png' alt ="image" className={styles.Sec2vectorImg6} />

                                </div>

                            </div>

                        </div>


                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"
                            tabindex="0">

                            <div className='row'>

                                <div className='col-md-8 offset-md-4'>

                                    <img src='/assets/banners/school-building2.png' alt ="image" className={styles.schoolBuildingImg} />

                                </div>

                                <div className={styles.cardmargin3 + ' col-md-8 offset-md-2'}>

                                    <div className={styles.card1 + " card"}>

                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Eligibility Criteria for all classes
                                            </h5>
                                            <hr className={styles.hrLine} />

                                            <ul className='pt-2'>
                                                <li className='pt-1'>Kindergarten – To be eligible for admission, the child must fall into the following age category as prescribed and suggested by  the central board of secondary education.</li>
                                                <li className='pt-1'>For Junior KG the child must have completed 3. 5  years as on 30th June.</li>
                                                <li className='pt-1'>For Senior KG the child must have completed 4.5  years as on 30th June.</li>
                                            </ul>

                                            <img src='/assets/vectors/Vector5.png' alt ="image" className={styles.Sec3vectorImg5} />

                                        </div>

                                    </div>

                                </div>

                                <div className='col-md-6 mt-5'>

                                    <h2>Admissions Procedure</h2>
                                    <hr className={styles.hrLine} />

                                </div>

                                <div className='col-md-6'>
                                    <div></div>
                                </div>

                                <div className={styles.colpdngRt + ' col-md-6 position-relative'}>

                                    <div className='d-flex align-items-start text-justify'>

                                        <div className='position-relative'>

                                            <h2 className={styles.numberStyle}>1</h2>

                                        </div>

                                        <div>

                                            <h2>Obtain Admissions Kit</h2>

                                            <p>Visit the school , meet our admissions officer. Take a tour of
                                                the school. Obtain the Admissions Kit from the Admissions Office
                                                for Rs.600, payable by cash or card.
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                <div className={styles.colpdngLt + ' col-md-6'}>

                                    <div className='d-flex align-items-start text-justify'>

                                        <div className='position-relative'>
                                            <h2 className={styles.numberStyle}>2</h2>
                                        </div>

                                        <div>

                                            <h2>Interaction and Interview</h2>

                                            <p>There will be diagnostic test  in Math & Science and Test
                                                of fluency in English for students applying from Grade
                                                I upwards*. After this Personal interviews conducted with
                                                prospective students and parents to understand the child’s
                                                interests, skills, abilities, and expectations. Interactions
                                                will be held with both parents and the child for the
                                                Kindergarten classes.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.colpdngRt + ' col-md-6 position-relative'}>

                                    <div className='d-flex align-items-start text-justify'>

                                        <div className='position-relative'>

                                            <h2 className={styles.numberStyle}>3</h2>

                                        </div>

                                        <div>

                                            <h2>Admission Fee</h2>

                                            <p>Upon receipt of Confirmation Letter, payment of a one-time
                                                non-refundable Admission Fee* within 15 days to be paid
                                                along with the first term and school essentials fee.
                                            </p>

                                        </div>
                                    </div>

                                    <img src='/assets/vectors/Vector3.png' alt ="image" className={styles.Sec3vectorImg3} />

                                </div>

                                <div className={styles.colpdngLt + ' col-md-6'}>

                                    <div className='d-flex align-items-start text-justify'>

                                        <div className='position-relative'>
                                            <h2 className={styles.numberStyle}>4</h2>
                                        </div>

                                        <div>

                                            <h2>Submit Application</h2>

                                            <p>Submit the completed Application Form and all supporting
                                                documents as per instructions and wait to be called for
                                                a personal interview.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                                <div className={styles.colpdngRt + ' col-md-6 position-relative'}>

                                    <div className='d-flex align-items-start text-justify'>

                                        <div className='position-relative'>

                                            <h2 className={styles.numberStyle}>5</h2>

                                        </div>

                                        <div>

                                            <h2>Admission Results</h2>

                                            <p>Admissions results emailed within 5 working days.
                                                After which parents can pay the fees within 7
                                                days to confirm the slot.
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                <div className='col-md-6'>
                                    <div></div>
                                </div>

                                <div className='col-md-12 mt-3'>

                                    <p className='mb-5'>Following the VIKAS MANTRA PUBLIC SCHOOL admissions process,
                                        the decision to accept a student is based upon a number of
                                        factors, including academic potential, previous academic achievements,
                                        extra-curricular accomplishments and availability of space in each class.
                                        Special consideration will be given to qualified applicants who are
                                        siblings of alumni or students currently attending VIKAS MANTRA PUBLIC SCHOOL.
                                    </p>

                                </div>

                                <div className='col-md-10'>

                                    <h2 className='mt-5 mb-3'>Admissions Requirements</h2>

                                    <h4>Documents Required:</h4>

                                    <p>As part of the application process, parents are requested to prepare the
                                        following documents for submission to the school.
                                    </p>

                                    <ul className={styles.ulLineHeight}>

                                        <li>Application Form, duly filled</li>
                                        <li>3 colour Photos</li>
                                        <li>Report from Previous School (if available)</li>
                                        <li>Copy of the Student’s Aadhar / Passport (if available)</li>
                                        <li>Copy of the Student’s Birth Certificate in case of (PIO holders)</li>
                                        <li>Copy of any one of the following as proof of Residence for Parents: </li>

                                        <li className='mt-3 ms-3'>Passport/Aadhar / Ration /Voter ID card</li>
                                        <li className='ms-3'>Most recent water/telephone/electricity/gas bill/ rental agreement</li>

                                    </ul>

                                    <p className=''>Please refer to the checklist provided with the admissions package for a comprehensive
                                        list of documents required for the admissions process.
                                    </p>

                                    <h2 className='mt-5'>Procedures to be followed while filling up the form</h2>

                                    <ul className={styles.ulLineHeight + ' position-relative'}>
                                        <li>Application form to be submitted within 5  working days after buying the form.
                                            Duly filled in forms are to be submitted along with copy of birth certificate,
                                            address proof, copy of Aadhar, UDIS number ( for students from grade 2 onwards)
                                            along with 2 photographs of the child. Please note that without these documents
                                            the form will not be accepted. Kindly avoid further requests.
                                        </li>

                                        <li>Admission at Vikas Mantra Public School will be on first on first come basis.</li>

                                        <li>Admission for the academic year will be done till the 30th of June every year
                                            based on the availability of seats in each class.
                                        </li>

                                        <li>Each class is limited to 35 students only.</li>

                                        <img src='/assets/vectors/Vector6.png' alt ="image" className={styles.Sec3vectorImg6} />

                                    </ul>

                                </div>

                            </div>

                        </div>


                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"
                            tabindex="0">

                            <div className='row'>

                                <div className='col-md-8 offset-md-4'>

                                    <img src='/assets/banners/school-building2.png' alt ="image" className={styles.schoolBuildingImg} />

                                </div>

                                <div className={styles.sectionPdng4 + ' col-md-10 position-relative'}>

                                    <img src='/assets/vectors/Vector10.png' alt ="image" className={styles.Sec4vectoImg10} />

                                    <img src='/assets/VMPS.png' alt ="image" className={styles.Sec4vmpsImg} />

                                    <h2>FAQ</h2>

                                    <hr className={styles.hrLine} />

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faMinus} className={styles.minusIcon} />How do you make decision on admission?</h4>

                                    <p className={styles.paraPdng}>Admission  decisions are made purely on first come first serve basis for lower classes.
                                        It is also made on  merit, aptitude of the applicant, and involvement of parents
                                        in the applicant’s education. Special consideration will be given to qualified applicants
                                        who are siblings of alumni or students currently attending VIKAS MANTRA PUBLIC SCHOOL.
                                    </p>

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /> Do you have a wait list?</h4>

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /> How are students assessed?</h4>

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /> How are parents involved in the school community?</h4>

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /> What is the student teacher ratio in each class?</h4>

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /> Where are your teachers from? </h4>

                                    <h4 className='pt-3'><FontAwesomeIcon icon={faPlus} className={styles.plusIcon} /> What kind of training do you provide your teachers?</h4>

                                    <img src='/assets/vectors/Vector11.png' alt ="image" className={styles.Sec4vectorImg11} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section >

        </>
    )
}

export default Admissions;