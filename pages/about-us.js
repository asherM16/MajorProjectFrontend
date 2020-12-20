import Link from "next/link";
import Head from "next/head"
import Layout from '../components/layout'


export default function AboutUs() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
        <div>
        <h1>AboutUS</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
        </div>
        </Layout>)
}
