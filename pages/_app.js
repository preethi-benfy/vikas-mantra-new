import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import '../styles/globals.css'
import Nav from '../components/Header/Nav';
import Footer from '../components/Footer/Footer';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap");
  }, [])

  return (
    <>
    <Nav></Nav>
      <Component {...pageProps} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
<Footer></Footer>
    </>
  )
}

export default MyApp
