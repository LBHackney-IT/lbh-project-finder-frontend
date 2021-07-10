import axios from 'axios';
import { SWRConfig } from 'swr';

import '../styles/global.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SWRConfig value={{
        fetcher: (resource, options) =>
          axios.get(resource, options).then((res) => res.data),
        onErrorRetry: (error) => {
          if (error.status === 404) return;
        },
      }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  )
}
export default CustomApp
