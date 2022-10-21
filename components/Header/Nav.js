import React from 'react'
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button';
import styles from "./style.module.css"
import { Link } from 'next/router';


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
                <img src='/assets/vmps-white-logo.png'  />
                :
                <img src='/assets/vmps-color.png' />
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
                <Link class="nav-link" aria-current="page" href="/home">Home</Link>
              </li>
          
              <li className={'nav-item dropdown'}>
              <Link className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                    </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/about">About Vikas Mantra</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="/about/vision-and-philosophy">Our Vision & Philosophy</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/about/message-from-chairman">Chairman’s Message</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/about/message-from-principal">Principal’s Message</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/about/our-team">Our Team</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><LinK class="dropdown-item" href="/about/blog">Blog</LinK></li>
                  </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/admissions">Admissions</Link>
              </li>

              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Campus
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/campus/classrooms">Classrooms</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="/campus/facilities-and-Infrastructure">Facilities and Infrastructure</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="/campus/laboratory">Laboratories</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/campus/speciality-room">Speciality Rooms</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/campus/library">Library</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/campus/technology">Technology</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/campus/security">Security</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/campus/healthcare">Healthcare</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/campus/transportation">Transportation</Link></li>
                  </ul>
              </li>

              <li className={'nav-item dropdown'}>
                  <Link className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Learning
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="/learning">Why VIKAS MANTRA PUBLIC SCHOOL</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" href="/learning/curriculum">Curriculum</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="#">Pre-Primary Years</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="#">Curriculum Framework</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="/learning/online-classes">Online Classes</Link></li>
                  </ul>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/enquiry-form">Enquiry Form</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/admissions">Admissions</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/mandatory-public-disclosures">Mandatory Public Disclosures</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/events">Events</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/contact">Contact Us</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" href="/careers">Career</Link>
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