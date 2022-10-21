import React from 'react'
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button';
import styles from "./style.module.css"


const Nav = ({ toplinks }) => {

const {asPath} = useRouter()

var pageName = asPath.replace('/', "")

  return (

    <>


    <header className={styles.homeheader + ' ' + pageName}>
    
    <nav className={styles.navTransparent + ' navbar-expand-lg navbar'}>
          <div className="container">
            <a className={styles.mainLogo + ' ' + 'navbar-brand'} href="#">
              {pageName === 'home' ? 
                <img src='/assets/vmps-white-logo.png' alt='image' />
                :
                <img src='/assets/vmps-color.png' alt='image' />
                }
             
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <Button  className={styles.firstbtn}>70924 50450</Button>
              <Button className={styles.secondtbtn}>Enroll</Button>

            </ul>
          </div>
        </div>
      </nav>

    <nav className={styles.navTransparent + ' ' + 'navbar' + ' ' + 'navbar-expand-lg'}>
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">

              <li class="nav-item active">
                <a class="nav-link" aria-current="page" href="/home">Home</a>
              </li>
          
              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/about">About Vikas Mantra</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/about/vision-and-philosophy">Our Vision & Philosophy</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/about/message-from-chairman">Chairman’s Message</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/about/message-from-principal">Principal’s Message</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/about/our-team">Our Team</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/about/blog">Blog</a></li>
                  </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/admissions">Admissions</a>
              </li>

              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Campus
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/campus/classrooms">Classrooms</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/campus/facilities-and-Infrastructure">Facilities and Infrastructure</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/campus/laboratory">Laboratories</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/campus/speciality-room">Speciality Rooms</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/campus/library">Library</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/campus/technology">Technology</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/campus/security">Security</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/campus/healthcare">Healthcare</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/campus/transportation">Transportation</a></li>
                  </ul>
              </li>

              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Learning
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/learning">Why VIKAS MANTRA PUBLIC SCHOOL</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/learning/curriculum">Curriculum</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Pre-Primary Years</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Curriculum Framework</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="/learning/online-classes">Online Classes</a></li>
                  </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/enquiry-form">Enquiry Form</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/admissions">Admissions</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/mandatory-public-disclosures">Mandatory Public Disclosures</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/events">Events</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/careers">Career</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </header>

    </>

  )
}

export default Nav