import Link from "next/link";
import Head from "next/head";
import Layout from '../components/layout';
import { Button, Card } from 'antd';



export default function AboutUs() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
            <div >
                <h2 className="about-h2">
                    Learn-IZO - Helps Excel in Boards
                 </h2>
            </div>
            <div className="about-text">
                <p className="about-p">


                    We focus on academic excellence through emphasis on building concepts, school curriculum alignment and preparation to score more in school exams and boards. More than 25000 students have been benefitted so far with record breaking CBSE Board results year on year.

                    One in every 3 of our Class X and Class XII students have scored more than 90% in CBSE Board every year.

                </p>
                <div>
                    <img src="/svgs/learning.svg" width={1500}
                        height={2000} />
                </div>

            </div>
            <h2 className="about-h2">Our Values</h2>
            <p className="about-p">

                  
                LearnIZO – A rich heritage to live up to! Organization values are the foundation stones on which the organization’s image is built. These help the company realize its organizational goals and in turn transform lives. These values are intended to infuse an infectious energy, professionalism and a sense of true empowerment to the workplace.

                The solid edifice on which Studymate stands tall today was built on high ideals and values. The company has its roots in the independence movement in the first half of the twentieth century, a cause to empower the nation. We are adaptive to the changing times, while remaining steadfast to the values rooted in our culture.

                Our values drive us towards our goals of expansion, diversification and excellence. These values define our philosophy of operations, guide our important decisions and determine our commitment and achievement.
                 
            </p>
            <h2 className="about-h2" >Our Vision</h2>
            <p className="about-p">To become a leading centre for support and facilitate the transformation of students into good human beings and competent professionals.</p>

            <h2 className="about-h2"> Our Mission</h2>
            <p className="about-p">
                To provide a platform towards the right career and building visionaries and leaders for the nation. To increase the visibility of academic programs globally and attract corporate at all levels.

            </p>

            <h2 className="about-h2">Invest in Learning Better</h2>
            <div className="about-card">

                <Card title={<p className="about-title"> Curriculum Coverage</p>} style={{ width: 300, borderRadius: 10, }}>

                    <p>We have analyzed curriculum coverage pattern of top schools of Delhi NCR and aligned our curriculum coverage of all classes and subjects as per theirs.</p>
                </Card>

                <Card title={<h2 className="about-title">Build Concepts </h2>} style={{ width: 300, borderRadius: 10,  }}>
                    <p>Content for each class and subject is designed by 180+ faculty. Individual attention in group environment helps students understand their stregths and areas of improvements.</p>
                </Card>

                <Card title={<h2 className="about-title">Performance Improvement </h2>} style={{ width: 300, borderRadius: 10,  }}>
                    
                    <p>Structured & scheduled progressive tests are conducted to keep regular track of students' learning and understanding of concepts.</p>
                </Card>
            </div>
            <h2 className="about-h2"> Prepare Yourself For a Better Tommorrow... </h2>

        </Layout>)
}
