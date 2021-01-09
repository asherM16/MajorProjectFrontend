
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import PropTypes from 'prop-types'

const Headings = ({ first, second }) => {
  return (<div className={'flex flex-row justify-center items-center'}>
        <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
            {first}
        </text>
        <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
            {second}
        </text>
    </div>)
}

export default function AboutUs () {
  return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
            <div >

                <Headings first={'Learn-IZO -'} second={'Helps Excel in Boards'}/>
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

            <Headings first={'Our '} second={'Values '}/>
            <p className="about-p">

                LearnIZO – A rich heritage to live up to! Organization values are the foundation stones on which the organization’s image is built. These help the company realize its organizational goals and in turn transform lives. These values are intended to infuse an infectious energy, professionalism and a sense of true empowerment to the workplace.

                The solid edifice on which Studymate stands tall today was built on high ideals and values. The company has its roots in the independence movement in the first half of the twentieth century, a cause to empower the nation. We are adaptive to the changing times, while remaining steadfast to the values rooted in our culture.

                Our values drive us towards our goals of expansion, diversification and excellence. These values define our philosophy of operations, guide our important decisions and determine our commitment and achievement.

            </p>

            <Headings first={'Our'} second={'Vision'}/>
            <p className="about-p">To become a leading centre for support and facilitate the transformation of students into good human beings and competent professionals.</p>

            <Headings first={'Our'} second={'Mission '}/>
            <p className="about-p">
                To provide a platform towards the right career and building visionaries and leaders for the nation. To increase the visibility of academic programs globally and attract corporate at all levels.

            </p>

            <Headings first={'Prepare Yourself'} second={'For a Better Tomorrow '}/>

        </Layout>)
}
Headings.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string
}
