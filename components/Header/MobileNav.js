import React, { useEffect } from 'react'
import Link from 'next/link'

const MobileNav = () => {
  function navLink(e) {
    e.preventDefault()
    const sibling = e.target.nextSibling
    console.log(sibling)
  }
  useEffect(() => {
    // $('.nav__sub').prepend(
    //   '<li class="nav__item"><a class="nav__link sub__close" href="#"><i class="fas fa-chevron-left"></i> Back</a></li>'
    // )
    // $('.sub__close').click(function (e) {
    //   e.preventDefault()
    //   $(this).parent().parent().removeClass('is-active')
    // })
    // $('.nav__link').click(function (e) {
    //   e.preventDefault()
    //   $(this).siblings().addClass('is-active')
    // })
    // const navLink = document.querySelector('.nav__link')
    // navLink.addEventListener('click', function () {
    //   console.log('hi')
    // })
  })

  return (
    <>
      <div className='mob-menu'>
        <ul className='nav'>
          <li className='nav__item'>
            <Link href='/home' legacyBehavior>
              <a
                className='nav__link'
                aria-current='page'
                onClick={(e) => navLink(e)}
              >
                Home
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link href='#' legacyBehavior>
              <a className='nav__link' onClick={(e) => navLink(e)}>
                About <i className='fas fa-chevron-right'></i>
              </a>
            </Link>
            <ul className='nav__sub'>
              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link' onClick={(e) => navLink(e)}>
                    About Vikas Mantra
                  </a>
                </Link>
              </li>
              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link' onClick={(e) => navLink(e)}>
                    Our Vision & Philosophy
                  </a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Chairman’s Message</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Principal’s Message</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Our Team</a>
                </Link>
              </li>

              <li className='nav__item'>
                <Link href='#' legacyBehavior>
                  <a className='nav__link'>Blog</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              La Liga
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              Serie A
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              World Cup 2018
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileNav
