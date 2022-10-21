import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const MessageFromPrincipal = () => {
    return (

        <>
            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className='row'>

                        <div className='col-md-12'>
                            <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
                            |
                            <a className='mx-2'>About</a>
                            |
                            <a className='mx-2'>Principal’s Message</a>
                        </div>


                    </div>

                    <div className={styles.blogRow1 + 'row py-5'}>

                        <div className='col-md-6'>

                            <h2>Message from Our Principal</h2>
                            <img src='/assets/vectors/Vector.png' className={styles.vectorImg} />

                        </div>

                    </div>

                </div>

            </section>


            <section className={styles.sectionContainer + ' greybg'}>

                <div className='container'>

                    <div className='row py-5 align-items-center '>

                        <div className='col-md-6'>

                            <img src='/assets/vectors/Vector1.png' className={styles.vectorImg1} />

                            <h3>Dear all,</h3>

                            <hr className={styles.hrLine} />

                            <p>It is my proud privilege to warmly welcome you into the portals of Learning
                                Community of Vikas Mantra Public School; dedicated to develop skilled/
                                outstanding students who can pursue their interests and strengths to the
                                best of their ability so that our enriched students emerge into the society
                                building a strong generation for a better world tomorrow through dynamic
                                education.
                            </p>

                            <p>
                                We aim to create a safe, nurturing yet challenging environment that is
                                built on positive relationships; developing the whole student – emotionally,
                                socially and academically.
                            </p>

                            <p>
                                Vikas Mantra Public School believes that a child’s school is a home away
                                from home; schooling of a student is not targeted at enabling of the learner
                                to pass through the narrow tunnel of examination. We empower every child
                                to create a success story on his/her own. We visualize every child as a unique
                                storehouse of potential ideas and skills to be discovered and nurtured to
                                blossom. The extensive lush green campus with an infrastructure at par with global
                                standards provides the best ambient for a vibrant school career. We are very keen
                                to involve our community in our learning, developing true partnerships that value
                                each student.
                            </p>

                            <p>Best Sincerely,</p>

                            <h4>Mrs. Priyanka Ghosh Jesuraj</h4>

                        </div>  

                        <div className='col-md-6 position-relative'>

                            <img src={'/assets/banners/principal.png'} className={styles.PrincipalImg} />

                            <img src={'/assets/vectors/Vector2.png'} className={styles.vectorImg2} />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default MessageFromPrincipal;