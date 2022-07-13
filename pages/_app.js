import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Mulch Is Better</title>
        <meta name="description" content="Mulch Delivery" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
