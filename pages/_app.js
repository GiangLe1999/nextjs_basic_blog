import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import NotificationContextProvider from "@/store/notification-context";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
