import Link from "next/link";
import Head from "next/head"
import Layout from '../components/layout'
import styles from '../styles/alert.module.css'
import cn from 'classnames'


export default function ContactUs() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>

            <div>
                <h1>Contact Us</h1>
                <h2>
                    <Link href="/">
                        <a>Back to home</a>
                    </Link>
                </h2>
            </div>
        </Layout>)
}
