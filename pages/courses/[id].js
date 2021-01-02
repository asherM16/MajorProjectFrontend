import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Layout from "../../components/layout";


export async function getStaticPaths() {
    return {
        paths:[{
            params: {
                id: "maths-10th-class",
            }
        }],
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    console.log("Params" ,params)
    return {
        props: {
            params
        }
    }
}
const Courses=(props)=>{
    console.log(props,'props')
    return (
        <Layout>
            <Head>
                <title>{"Courses"}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{"id"}</h1>
            </article>
        </Layout>
    )
}

export default Courses
