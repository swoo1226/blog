import "../styles/styles.scss";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
import Flame from "../components/Flame";
import Neon from "../components/Neon";
import Clock from "../components/Clock";
export default function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <ApolloProvider client={client}>
      <NavBar />
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
      {/* <Clock /> */}
      {/* <Neon /> */}
      {/* <Flame /> */}
    </ApolloProvider>
  );
}
