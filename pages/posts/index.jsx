import Link from 'next/link'
import Layout from '../../components/Layout'
import utilStyles from '../../styles/utils.module.css'
import classNames from 'classnames'
import homeStyles from '../../styles/Home.module.scss'
import { getSortedPostsData } from '../../lib/posts'
import { gql } from "@apollo/client"
import client from "../../apollo-client"

export default function Posts({ allPostsData, countries }) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Posts</h2>
            <ul className={classNames(utilStyles.list, homeStyles.flexbox)}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={classNames(utilStyles.listItem, utilStyles.glass)} key={id}>
                        <Link href={`/posts/${encodeURIComponent(id)}`}>
                            {title}
                        </Link>
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    // const response = await client.query({
    //     query: gql`
    //   query Countries {
    //     countries {
    //       code
    //       name
    //       emoji
    //     }
    //     languages {
    //       code
    //       name
    //       native
    //     }
    //   }
    // `
    // })
    // const { data } = response
    return {
        props: {
            allPostsData,
            // countries: data.countries.slice(0, 4)
        }
    }
}