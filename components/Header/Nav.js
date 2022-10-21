import React from 'react'
import {useRouter} from 'next/router'
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import vmps from '../../public/assets/vmps-white-logo.png' 
import vmpsColor from '../../public/assets/vmps-color.png'
import styles from "./style.module.css"


const Nav = ({ toplinks }) => {

const {asPath} = useRouter()

var pageName = asPath.replace('/', "")


  const menulinks = [

    { link: "#", name: "Home" },
    { link: "#", name: "About"},
    { link: "#", name: "Admissions" },
    { link: "#", name: "Campus" },
    { link: "#", name: "Learning" },
    { link: "#", name: "Enquiry Form" },
    { link: "#", name: "Mandatory Public Disclosures" },
    { link: "#", name: "Events" },
    { link: "#", name: "Contact" },
    { link: "#", name: "Careers" }

  ];

  return (

    <>


    <header className={styles.homeheader + ' ' + pageName}>
    
    <nav className={styles.navTransparent + ' navbar-expand-lg navbar'}>
          <div className="container">
            <a className={styles.mainLogo + ' ' + 'navbar-brand'} href="#">
              {pageName === 'home' ? 
                <Image src={vmps} alt='image' />
                :
                <Image src={vmpsColor} alt='image'/>
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
              {menulinks?.map((link, i) => {
                return (
                  <li key={i} className="nav-item">
                    <a className="nav-link active" href={link.link + ''}>
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

    </header>

    </>

  )
}

export default Nav