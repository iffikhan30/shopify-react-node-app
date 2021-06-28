import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import {Provider} from '@shopify/app-bridge-react';
import ClientRouter from '../appcomponents/ClientRouter';
class MyApp extends App {
  render() {
    const { Component, pageProps, shopOrigin, host } = this.props;
    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true , host};

    return (
      <React.Fragment>
        <Head>
          <title>Funnel App</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
            <ClientRouter />
            <AppProvider i18n={translations}>
            <Component {...pageProps} />
            </AppProvider>
        </Provider>
        
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx }) => {
    return {
      shopOrigin: ctx.query.shop,
      host: ctx.query.host,
      API_KEY: process.env.SHOPIFY_API_KEY
    }
  }

export default MyApp;