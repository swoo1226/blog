import "../styles/styles.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import Flame from "../components/Flame";
import Neon from "../components/Neon";
import Clock from "../components/Clock";
import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script></Script>
      <ApolloProvider client={client}>
        <NavBar />
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
        {/* <Clock /> */}
        {/* <Neon /> */}
        {/* <Flame /> */}
      </ApolloProvider>
    </>
  );
}
