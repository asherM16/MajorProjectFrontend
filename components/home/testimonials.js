import Layout from "../layout";
import Head from "next/head";

export const Testimonials = () =>{
    return(
        <Layout>
            <Head>
                <title>Learnizo | Testimonials</title>
            </Head>
            <text className={`text-3xl subpixel-antialiased font-semibold`}>
                Testimonials
            </text>
        </Layout>
    )
}
