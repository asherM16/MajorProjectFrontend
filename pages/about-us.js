import Link from "next/link";
import Head from "next/head"
import Layout from '../components/layout'
import styles from '../styles/alert.module.css'
import cn from 'classnames'


export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
            <style jsx>{`
 backgroundColor:'#000'
`}</style>
        <div>

        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </div>
            </Layout>)
}
