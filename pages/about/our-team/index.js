import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './style.module.css'

const OurTeam = () => {


    const staffTeam = [
        { staffImage: '/assets/staffs/staff1.png' , heading: 'Kirthika Manimaran', para: 'VP & HOD - English' },
        { staffImage: '/assets/staffs/staff2.png' , heading: 'Ms. Vidhya', para: 'Primary coordinator' },
        { staffImage: '/assets/staffs/staff3.png' , heading: 'Primary coordinator', para: 'HOD - Science' },
        { staffImage: '/assets/staffs/staff4.png' , heading: 'Raja Varadarajan', para: 'HOD - Maths' },
        { staffImage: '/assets/staffs/staff5.png' , heading: 'Shobana Kesavan', para: 'HOD - Computer Science' },
        { staffImage: '/assets/staffs/staff6.png' , heading: 'Sujatha Gangadharan', para: 'HOD - Tamil' },
        { staffImage: '/assets/staffs/staff7.png' , heading: 'Sumathi Elumalai', para: 'HOD - Physical Education' },
        { staffImage: '/assets/staffs/staff8.png' , heading: 'Ms. Maheshwari', para: 'Pre-Primary Coordinator' },
        { staffImage: '/assets/staffs/staff9.png' , heading: 'Vivek Sathyan', para: 'HOD - Dance' },
        { staffImage: '/assets/staffs/staff10.png' , heading: 'Kavitha Yadav', para: 'HOD - Hindi' },
        { staffImage: '/assets/staffs/staff11.png' , heading: 'Soundarrajan Venkatesan', para: 'HOD - Art & Craft' },
    ];
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
                            <a className='mx-2'>Our Team</a>
                        </div>


                    </div>

                    <div className=' row py-5'>

                        <div className='col-md-6'>

                            <h2>Message from Our Principal</h2>
                            <img src='/assets/vectors/Vector.png' alt ="image" className={styles.vectorImg} />

                        </div>

                    </div>

                </div>

            </section>

            <section className={styles.rowPdng + ' py-5'}>

                <div className='container'>

                    <div className='row'>

                        <div className='col-md-12 position-relative'>

                            <h1>Our Team</h1>

                            <img src='/assets/vectors/Vector5.png' alt ="image" className={styles.vectorImg5} />


                        </div>

                        {staffTeam?.map((item, i) => {

                            return (

                                <div className=' col-sm-6 col-md-6 col-lg-4 py-2' key={i}>

                                    <img src={item.staffImage} alt ='image' className={styles.staffImg} />

                                    <h6 className='pt-4'>{item.heading}</h6>

                                    <p>{item.para}</p>

                                    <hr className={styles.hrLine} />

                                </div>

                            )
                        })}

                    </div>

                    <div className='row '>

                        <div className='col-md-12 position-relative'>

                            <img src='/assets/vectors/Vector6.png' alt ="image" className={styles.vectorImg6} />

                            <img src='/assets/vectors/Vector8.png' alt ="image" className={styles.vectorImg8} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default OurTeam;