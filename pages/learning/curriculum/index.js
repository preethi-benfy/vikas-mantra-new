import React from 'react'
import styles from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


function Curriculum() {

  return (

    <>

    <section className='pt-4'>

        <div className='container position-relative'>

            <div className='row'>

                <div className='col-md-12'>
                    <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
                    |
                    <a className='mx-2'>Learning</a>
                   
                </div>

            </div>

        </div>

        </section>

        <section className={'pt60' + ' ' + 'pb60'}>

            <div className='container'>

                <div className='row'>

                    <div className='col-md-5'>

                        <h2>Curriculum </h2>

                    </div>

                </div>

            </div>

        </section>

        <section className={'greybg' + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'bglogo'}>

            <div className='container'>

                <div className='row'>

                    <div className='col-md-6'>

                        <div className='mb-5' id='holistic-approach'>

                        <h4 className='ulineRed'>The VIKAS MANTRA PUBLIC SCHOOL </h4>

                        <p className='pt-4'>curriculum is designed to enable students to develop critical  and survival skills necessary for success in the real world.</p>

                        <p>The VIKAS MANTRA PUBLIC SCHOOL curriculum extends beyond academics it incorporates experiential learning and multi-disciplinary teaching methods and encourages active student participation. We offer students a unique curriculum that is based on new-world learning and is supported by the best of Indian pedagogical thinking, the CBSE way.</p>

                        <p>One of the core tenets behind the VIKAS MANTRA PUBLIC SCHOOL curriculum design is recognition of the fact that learning is a dynamic process and each student learns differently. Our teachers are taught to adopt practices which accommodate differential learning in an age appropriate manner. Students are encouraged in their individual area of interest and teachers ensure that students are exposed to a multitude of topics, scenarios and situations to help them become competent and capable learners.</p>

                        <p>VIKAS MANTRA PUBLIC SCHOOL curriculum will follow the  guidelines set by the central board of secondary education . The curriculum is varied, comprehensive, and organized by topic. Each student benefits from a complementary skill set and the knowledge base of different teachers with classes in

                        Language Arts | Mathematics | Science | Social Studies | Physical Education | Art and Theatre</p>

                        <p>English will be  the medium of instruction and will be  taught as the first language. Tamil/Hindi/Sanskrit  will be taught as second/ third language.</p>

                        </div>

                        <div className='mb-5' id='local-app'>

                        <h4 className='ulineRed'>Pre-Primary Years (Nursery and Kindergarten)</h4>

                        <p className='pt-4'>The 21st century will require independent thinkers, responsible citizens, creative problem-solvers and confident decision-makers. Keeping this long-term view in mind, VIKAS MANTRA PUBLIC SCHOOL has designed a Pre-Primary programme to foster a love for learning among younger students.</p>

                        <p>The curriculum for three- to five-year-olds is based on developmental needs in all aspects of growth: social, physical, intellectual, creative and emotional. Young students differ vastly in their learning abilities and the rate at which they are able to absorb new concepts. Our programme is designed to accommodate this diversity and create a cocoon of learning for each student.</p>

                        <p>The Pre-Primary years combine self-directed play and unstructured activities to make students aware of and interact with their immediate environment. A special emphasis is laid on creating an environment which enables students to absorb new information through active participation, visual stimulation, and listening. These activities enable students to start gaining a broader understanding of the world we live in.</p>

                        <p>Gaining positive self-esteem and building confidence through simple activities is an important goal in the Pre-Primary years. Using a combination of the six senses, students are provided with new and unusual experiences to help build their cognitive and physical abilities. They learn to express various emotions, understand basic social interactions and engage with the outside world.</p>

                        </div>

                        <div className='mb-5' id='recognizing'>

                        <h4 className='ulineRed'>WHY CHOOSE  VIKAS MANTRA?</h4>

                        <p className='pt-4'>Vikas Mantra Public School is established with a vision to prepare and equip each child with the necessary survival skills in the 21st century through rigorous academic and technological skills.</p>

                        </div>

                        
                    </div>

                    <div className={'col-md-6'}>

                        <div className='imgUp'>

                        <img src='/assets/school-building.png' className='img-fluid' />

                        </div>

                        <div className={'sticky-sidebar' + ' ' + 'pt60'}>

                            <ul className={styles.progress} id={styles.progress}>

                               <li><a href='#holistic-approach'>The  VIKAS MANTRA PUBLIC SCHOOL</a></li>

                                <li>Pre-Primary Years (Nursery and Kindergarten)</li>

                                <li>Primary Years (Grades I – V)</li>

                                <li>English – Language Arts</li>

                                <li>Mathematics</li>

                                <li>Social Studies</li>

                                <li>Science</li>

                                <li>Why Choose Vikas Mantra</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    </>
  )
}

export default Curriculum