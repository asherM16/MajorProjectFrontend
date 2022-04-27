import Head from 'next/head'
import Layout from '../components/layout'
import { ContactUsInner } from '../components/contactUsInner'

export default function ContactUs () {
  return (
        <Layout>
            <Head>
                <title>Major Project | Jamia Millia Islamia</title>
            </Head>
            <br/>
           <ContactUsInner/>
        </Layout>)
}
