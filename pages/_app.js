import { PageTransition } from 'next-page-transitions';
import { GlobalStyles } from "../components/util/globalStyles";

import Layout from '../components/templates/Layout';
import Loader from '../components/Loader';

const TIMEOUT = 100

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles/>
      <PageTransition
        timeout={TIMEOUT}
        classNames="page-transition"
        loadingComponent={<Loader />}
        loadingDelay={500}
        loadingTimeout={{
          enter: TIMEOUT,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        <Component {...pageProps} />
      </PageTransition>
     </Layout>
  )
}

export default MyApp
