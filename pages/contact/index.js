import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const Contact = () => {
    return (
        <>
            <section className='pt-5'>

                <div className='container position-relative'>

                    <div className='row'>

                        <div className='col-md-12'>
                            <FontAwesomeIcon icon={faHouse} className={styles.homeIcon} />
                            |
                            <a className='mx-2'>Contact</a>
                        </div>


                    </div>

                    <div className='row py-5'>

                        <h2 className={styles.headingPdng}>Contact</h2>

                        <img src='/assets/vectors/Vector.png' className={styles.vectorImg1} />

                    </div>

                </div>

            </section>

            <section className={styles.sectionPdng + ' greybg'}>

                <div className="container">

                    <div className='row'>

                        <div className='col-md-5 position-relative'>


                        </div>

                        <div className='col-md-7 position-relative'>

                            <img src='/assets/campus/school-building3.png' className={styles.schlBusImg} />

                        </div>

                    </div>

                    <div className={styles.rowPdng + ' row text-center'}>

                        <div className='col-md-4'>

                            <div className='position-relative'>

                                <img src='/assets/vectors/vector13.png' className={styles.vectorImg13} />

                                <img src='/assets/icons/mail.png' className={styles.iconsImg} />

                                <h4 className='py-4'>Postal address</h4>

                                <div className={styles.paraAlign}>

                                    <p>S.No:168,168/3,<br />
                                        Off Mahindra World City,<br />
                                        Anjur - 603204, Chengalpattu</p>

                                </div>

                            </div>

                        </div>

                        <div className='col-md-4'>

                            <img src='/assets/icons/call.png' className={styles.iconsImg} />

                            <h4 className='py-4'>Phone & Email</h4>

                            <div className={styles.paraAlign}>

                                <p>info@vikasmantra.org</p>
                                <p><a href='tel:+91 - 7092 450 450'>+91 - 7092 450 450</a></p>
                                <p><a href='tel:+91 - 8148 143 834'>+91 - 8148 143 834</a></p>

                            </div>

                        </div>

                        <div className='col-md-4 position-relative'>

                            <img src='/assets/icons/time.png' className={styles.iconsImg} />

                            <h4 className='py-4'>Office hours</h4>

                            <div className={styles.paraAlign3}>

                                <p>Monday - Friday</p>
                                <p> 9.00 am - 4.00 pm</p>

                                <p> Saturday</p>
                                <p> 9.00 am - 1.00 pm</p>

                            </div>

                            <img src='/assets/vectors/vector10.png' className={styles.vectorImg10} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Contact;