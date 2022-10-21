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
                <img src='/assets/vmps-white-logo.png'  />
                :
                <img src='/public/assets/vmps-color.png' />
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
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
          
              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About Vikas Mantra</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Our Vision & Philosophy</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Chairman’s Message</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Principal’s Message</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Our Team</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Blog</a></li>
                  </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Admissions</a>
              </li>

              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Campus
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Classrooms</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Laboratories</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Speciality Rooms</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Library</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Technology</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Security</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Healthcare</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Transportation</a></li>
                  </ul>
              </li>

              <li className={'nav-item dropdown'}>
                  <a className={'nav-link dropdown-toggle'} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Learning
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Why VIKAS MANTRA PUBLIC SCHOOL</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Curriculum</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Pre-Primary Years</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Curriculum Framework</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Online Classes</a></li>
                  </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Enquiry Form</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Admissions</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Mandatory Public Disclosures</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Events</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">Career</a>
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