import '../styles/global.scss'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import Flame from '../components/Flame'
export default function App({Component, pageProps}){
    return (
        <ApolloProvider client={client}>
            <NavBar />
            <Layout>
                <Component {...pageProps}/>
            </Layout>
            <Flame />
        </ApolloProvider>
    )
}