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
            <br/>
            <br/>
            <div className={'flex flex-col items-center justify-center'}>
            <div className={'flex flex-col items-center w-9/12 justify-center'}>
            <div>
                <Headings first={'Learnizo -'} second={'Helps Excel in Boards'}/>
            </div>
            <br/>
            <div className="about-text">
                <text className="font-light  text-center cursor-default">
                    We focus on academic excellence through emphasis on building concepts, school curriculum alignment
                    and preparation to score more in school exams and boards. More than 25000 students have been
                    benefitted so far with record breaking CBSE Board results year on year.
                    One in every 3 of our Class X and Class XII students have scored more than 90% in CBSE Board every
                    year.
                </text>
            </div>
            <br/>
            <br/>
            <Headings first={'Our '} second={'Values '}/>
            <br/>
            <text className="font-light  text-center cursor-default">
                Learnizo – A rich heritage to live up to! Organization values are the foundation stones on which the
                organization’s image is built. These help the company realize its organizational goals and in turn
                transform lives. These values are intended to infuse an infectious energy, professionalism and a sense
                of true empowerment to the workplace.
                The solid edifice on which Learnizo stands tall today was built on high ideals and values. The company
                has its roots in the independence movement in the first half of the twentieth century, a cause to
                empower the nation. We are adaptive to the changing times, while remaining steadfast to the values
                rooted in our culture.
                Our values drive us towards our goals of expansion, diversification and excellence. These values define
                our philosophy of operations, guide our important decisions and determine our commitment and
                achievement.
            </text>
            <br/>
            <br/>
            <Headings first={'Our'} second={'Vision'}/>
            <br/>
            <text className="font-light  text-center cursor-default">To become a leading centre for support and
                facilitate the transformation of students into good human beings and competent professionals.
            </text>
            <br/>
            <br/>
            <Headings first={'Our'} second={'Mission '}/>
            <br/>
            <text className="font-light  text-center cursor-default">
                To provide a platform towards the right career and building visionaries and leaders for the nation. To
                increase the visibility of academic programs globally and attract corporate at all levels.
            </text>
            <br/>
            <br/>
            <Headings first={'Prepare Yourself'} second={'For a Better Tomorrow '}/>
            </div>
            </div>
        </Layout>)
}
Headings.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string
}
