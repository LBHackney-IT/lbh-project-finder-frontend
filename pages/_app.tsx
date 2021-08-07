import axios from "axios";
import { SWRConfig } from "swr";

import "../styles/global.scss";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import Layout from "../components/Layout";
import { useState } from "react";
import { isAuthorised, shouldRedirect } from "../utils/auth";
import { User } from "../types";
import { AuthProvider } from "../components/UserContext/UserContext";
import App from "next/app";

interface Props {
  user?: Partial<User>;
}

const CustomApp = ({ Component, pageProps }: AppProps): JSX.Element | null => {
  const [user] = useState(pageProps.user);
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, options) =>
            axios.get(resource, options).then((res) => res.data),
          onErrorRetry: (error) => {
            if (error.status === 404) return;
          },
        }}
      >
        <AuthProvider user={user}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </SWRConfig>
    </>
  );
};

CustomApp.getInitialProps = async (
  appContext: AppContext
): Promise<AppInitialProps & Props> => {
  let user;

  if (appContext.ctx.req && appContext.ctx.res) {
    user = isAuthorised(appContext.ctx.req) ?? user;
    const redirect =
      appContext.ctx.req.url && shouldRedirect(appContext.ctx.req.url, user);
    if (redirect && appContext.ctx.res.writeHead) {
      appContext.ctx.res.writeHead(302, {
        Location: redirect,
      });
      appContext.ctx.res.end();
    }
  }
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: { ...appProps.pageProps, user },
  };
};
export default CustomApp;
