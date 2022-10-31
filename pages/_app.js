import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import '../styles/globals.css'
import Nav from '../components/Header/Nav'
import Footer from '../components/Footer/Footer'
;<script
  src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js'
  integrity='sha512-gmwBmiTVER57N3jYS3LinA9eb8aHrJua5iQD7yqYCKa5x6Jjc7VDVaEA0je0Lu0bP9j7tEjV3+1qUm6loO99Kw=='
  crossorigin='anonymous'
  referrerpolicy='no-referrer'
></script>

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('../node_modules/bootstrap/dist/js/bootstrap')
    import('../public/js/gsap.min.js')
  }, [])

  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />

      <Footer></Footer>
    </>
  )
}

export default MyApp
