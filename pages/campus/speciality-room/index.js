import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const SpecialityRoom = () => {
    return (
        <>
            <section className='pt-5'>

                <div className='container position-relative'>

                    <div className='row'>

                        <div className='col-md-12'>
                            <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
                            |
                            <a className='mx-2'>Campus</a>
                        </div>


                    </div>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Speciality Rooms</h2>
                        <img src='/assets/vectors/Vector.png' alt ="image" className={styles.vectorImg1} />

                    </div>

                </div>

            </section>

            <section className='greybg py-5'>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>

                            <img src='/assets/vectors/Vector12.png' alt ="image" className={styles.vectorImg12} />

                            <h3>VIKAS MANTRA PUBLIC
                                SCHOOL
                            </h3>

                            <hr className={styles.hrLine} />

                            <p className='pt-3'>has incorporated a number of specialty rooms to strengthen
                                and support core academic learning and co-curricular programmes. Specialty rooms
                                are built with a view to enhance student experience through advanced equipment
                                and technologies.
                            </p>

                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/classroom.png' alt ="image" className={styles.classroomImg} />

                        </div>

                    </div>

                    <div className={styles.sectionPdng + ' row'}>

                        <div className='col-md-6'>

                            <h3>Specialty Rooms at
                                VIKAS MANTRA PUBLIC SCHOOL include</h3>

                            <hr className={styles.hrLine} />

                        </div>

                        <div className='col-md-6'>
                            <div></div>
                        </div>

                        <div className={styles.pdngZero + ' col-md-2 py-4'}>

                            <ul>
                                <li>Audio Video Lab
                                </li>
                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-2 py-4'}>

                            <ul>

                                <li>Music and Dance studios</li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-2 py-4'}>

                            <ul>

                                <li>Media Centre</li>

                            </ul>

                        </div>

                        <div className={styles.pdngZero + ' col-md-2 py-4'}>

                            <ul>

                                <li>Multipurpose Hall</li>

                            </ul>

                        </div>

                        <div className='col-md-8'>

                            <p>VIKAS MANTRA PUBLIC SCHOOL is proud to announce the launch of HOME Economics for the first time in India equipping
                                children to learn the life skills to lead a complete independent life in their later years.
                            </p>

                        </div>


                        <div className='col-md-3 position-relative'>

                            <img src='/assets/vectors/Vector10.png' alt ="image" className={styles.vectorImg10} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default SpecialityRoom;