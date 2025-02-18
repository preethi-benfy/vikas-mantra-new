import styles from './style.module.css'
import Link from 'next/link'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
const Blog = () => {

    const pageTitle = 'About'
    
    return (
        <>
            <Breadcrumb pageName={pageTitle} />

            <section className='pt-4'>

                <div className='container position-relative'>

                    <div className={styles.blogRow1 + 'row py-5'}>

                        <h2>Blog</h2>

                    </div>

                </div>

            </section>

            <section className={styles.sectionContainer + ' greybg'}>

                <div className='container'>

                    <div className='row py-5 align-items-center '>

                        <div className='col-md-6'>
                            <img src='/assets/vectors/Vector1.png' alt="image" className={styles.vectorImg2} />

                            <h3>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</h3>

                            <hr className={styles.hrLine} />

                            <p>Teaching our children the value of making eco-friendly
                                decisions in their everyday lives can be difficult in
                                a culture that promotes mass consumption. But it’s more
                                important than ever today to bring up ecologically
                                conscious kids. Here we bring to you a few yet effective
                                eco-friendly practices you can start …</p>

                            <Link href='/about/blog/blogs'><button className='btn outlineBtn'>Know More</button></Link>

                        </div>

                        <div className='col-md-6 position-relative'>

                            <img src='/assets/blog1.png' alt="image" className={styles.Blog1Img} />

                        </div>

                    </div>

                    <div className='row py-5 align-items-center '>

                        <div className='col-md-6 position-relative'>

                            <img src='/assets/blog2.png' alt="image" className={styles.Blog2Img} />

                        </div>

                        <div className='col-md-6'>

                            <h3>BENEFITS OF YOGA FOR SCHOOL STUDENTS</h3>

                            <hr className={styles.hrLine} />

                            <p>The growing levels of competition have made children pursue a variety
                                of fresh and interesting experiences. They have paved the way for a
                                variety of programs, making students get exposed to a wide array of
                                knowledge that inspires and pushes children to learn, grow, thrive,
                                and succeed. But the truth …</p>

                            <Link href='/about/blog/blogs'><button className='btn outlineBtn'>Know More</button></Link>

                            <img src='/assets/vectors/Vector2.png' alt="image" className={styles.vectorImg3} />

                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Blog;