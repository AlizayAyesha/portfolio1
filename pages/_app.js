import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import '../styles/style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import useSWR from 'swr'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Alizay Ayesha</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
