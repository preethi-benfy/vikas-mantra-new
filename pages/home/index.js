import React, { useEffect, useRef } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styles from './style.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { gsap } from 'gsap'

function Home() {
  const title = useRef()

  useEffect(() => {
    // let ctx = gsap.context(() => {
    //   gsap.from('.box', {
    //     duration: 1,
    //     // scale: 0.1,
    //     y: 40,
    //     ease: 'power1.inOut',
    //     stagger: {
    //       from: 'left',
    //       amount: 1.5,
    //     },
    //   })
    // }, title)
    // return () => ctx.revert()
  }, [])

  return (
    <>
      <section className={styles.bannerSection}>
        <div className='container'>
          <div className='row'>
            <div
              ref={title}
              className={
                styles.bannercontent + ' ' + 'col-lg-6 col-md-12 col-sm-12'
              }
            >
              <h1 className='box'>
                To educate young minds to be lifelong learners in this dynamic
                world
              </h1>
              <p className='box'>
                Vikas Mantra Public School offers CBSE Curriculum and was
                launched in the academic year 2019-22.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.homeabout + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'greybg'
        }
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h2>About VMPS</h2>

              <p>
                VIKAS MANTRA PUBLIC SCHOOL, a CBSE School in Chengalpattu
                Kanchipuram is building a distinctive educational platform
                through a mix of international learning techniques, experienced
                academicians and modern facilities. By blending 21st century
                learning methodologies and traditional Indian values, we equip
                our students to think freely, dream big and pursue their
                passions, yet remain firmly connected to ground realities.{' '}
              </p>

              <p>
                Learning is not only limited to books and classroom at Vikas
                Mantra Public School, our students are encouraged to pursue
                their interests and are given sufficien opportunities to exhibit
                their talents through numerous co-curricular activities that are
                conducted frequently.
              </p>

              <button className={'outlineBtn' + ' btn'}>Know More</button>
            </div>

            <div className='col-md-6'>
              <img
                src='/assets/home-abt-vmps.png'
                alt='image'
                className='img-fluid'
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.welcomeSection + ' ' + 'pt60' + ' ' + 'pb60'}>
        <div className='container'>
          <div className={'row' + ' ' + 'pb60'}>
            <div className={'z1' + ' ' + 'col-md-8'}>
              <h2>Welcome to Vikas Mantra Public School</h2>
              <p>
                Vikas Mantra Public School, is located in a sprawling campus of
                5 acres in the serene Mahindra World City away from the hustle
                and bustle of Chennai.
              </p>
              <button className={'whiteoutlineBtn' + ' btn'}>Know More</button>
            </div>
          </div>

          <div className={'row' + ' ' + 'pt60' + ' ' + styles.vkApproch}>
            <div className={'z1' + ' ' + 'col-md-3'}>
              <img
                width='81'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='image'
              ></img>

              <h4>Holistic Approach</h4>

              <p>
                We place equal emphasis on academic excellence and on the
                social, physical emotional and development of our students.
              </p>
            </div>

            <div className={'z1' + ' ' + 'col-md-3'}>
              <img
                width='81'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='image'
              ></img>

              <div className={styles.borderLeft}>
                <h4>Global Outlook</h4>

                <p>
                  Blending 21st century education techniques with the best from
                  traditional methods of teaching, Vikas Mantra offers a unique
                  programme for students of the emerging India.
                </p>
              </div>
            </div>

            <div className={'z1' + ' ' + 'col-md-3'}>
              <img
                width='81'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='image'
              ></img>

              <div className={styles.borderLeft}>
                <h4>Talented Faculty</h4>

                <p>
                  VIKAS MANTRA PUBLIC SCHOOL faculty have been handpicked to
                  ensure that they bring the right attitude and approach in
                  engaging with students.
                </p>
              </div>
            </div>

            <div className={'z1' + ' ' + 'col-md-3'}>
              <img
                width='81'
                height='74'
                src='/assets/icons/holistic-approach.png'
                alt='image'
              ></img>

              <div className={styles.borderLeft}>
                <h4>Rich Curriculum</h4>

                <p>
                  VIKAS MANTRA PUBLIC SCHOOL offers a unique curriculum which
                  comprises of a rigorous academic programme that deepens and
                  broadens knowledge of our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.vmpsSection + ' ' + 'pt60' + ' ' + 'pb60' + ' ' + 'greybg'
        }
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-xl-3 col-sm-6 col-md-5'>
              <h2 className='cursiveFont'>
                Life at VMPS
                <br /> Our Happy Faces
              </h2>
            </div>

            <div className='col-xl-9 col-sm-6 col-md-7'>
              <hr className={styles.hrline} />
            </div>
          </div>

          <div className={'row' + ' ' + 'vmpsslide'}>
            <div className='col-md-12'>
              <Splide>
                <SplideSlide>
                  <div className='row align-items-center'>
                    <div className='col-md-4'>
                      <p className={styles.textdate}>June 28, 2022</p>

                      <h4 className={styles.uline}>
                        Et harum quidem rerum facilis est et expedita distinctio
                        cum soluta nobis.
                      </h4>

                      <p className='pt-4'>
                        vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum.
                      </p>

                      <button className={'outlineBtn' + ' btn'}>
                        Know More
                      </button>
                    </div>

                    <div
                      className={
                        styles.vslideimage + ' ' + 'col-md-6 offset-md-2'
                      }
                    >
                      <img
                        src='/assets/home-happy-face.png'
                        alt='image'
                        className='img-fluid'
                      ></img>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.videoSection}>
        <div className='container'>
          <div className='row'>
            <div className={styles.bannercontent + ' ' + 'col-md-6'}>
              <h1>Inside the World of Vikas Mantra Public School</h1>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className='container testimonialSplide'>
          <div className='row'>
            <div className='col-md-12'>
              <Splide
                options={{
                  rewind: true,
                  gap: '1rem',
                  perPage: 2,
                  pagination: true,
                  arrows: false,
                }}
              >
                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/rectangle.png' alt='image' />
                    </div>

                    <div className={styles.testimonialcontent}>
                      <h4>
                        Parent of <br /> <span>Kavitha (SR.KG)</span>
                      </h4>

                      <p>
                        The event is very nice to bring up hidden talents of the
                        kids and also helps to shed their shyness and
                        inhibitions to face number of people. Keep up the good
                        work.
                      </p>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/rectangle.png' alt='image' />
                    </div>

                    <div className={styles.testimonialcontent}>
                      <h4>
                        Parent of <br /> <span>Kavitha (SR.KG)</span>
                      </h4>

                      <p>
                        The event is very nice to bring up hidden talents of the
                        kids and also helps to shed their shyness and
                        inhibitions to face number of people. Keep up the good
                        work.
                      </p>
                    </div>
                  </div>
                </SplideSlide>

                <SplideSlide>
                  <div className={styles.testimonialcard}>
                    <div>
                      <img src='/assets/rectangle.png' alt='image' />
                    </div>

                    <div className={styles.testimonialcontent}>
                      <h4>
                        Parent of <br /> <span>Kavitha (SR.KG)</span>
                      </h4>

                      <p>
                        The event is very nice to bring up hidden talents of the
                        kids and also helps to shed their shyness and
                        inhibitions to face number of people. Keep up the good
                        work.
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
