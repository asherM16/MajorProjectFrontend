import {useState, useEffect} from 'react';
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import CoursesOffered from "../components/home/CoursesOffered";
import {ContactUsInner} from "../components/contactUsInner";
import { Card } from 'antd';
const images = [{
    alt: 'banner1',
    imagePath: '/images/banner1.jpg',
    title: 'IX',
    category: 'Science'
},
    {
        alt: 'banner2',
        imagePath: '/images/banner2.jpg',
        title: 'IX',
        category: 'Science'
    },
    {
        alt: 'banner3',
        imagePath: '/images/banner3.jpg',
        title: 'IX',
        category: 'Science'

    }, {
        alt: 'banner4',
        imagePath: '/images/banner4.jpg',
        title: 'IX',
        category: 'Science'

    }, {
        alt: 'banner5',
        imagePath: '/images/banner4.jpg',
        title: 'IX',
        category: 'Science'
    },]

export async function getStaticProps() {

    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    const [ind, setInd] = useState(0);
    const [flipped, setFlipped] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setFlipped(true)
        }, 9500)
        setTimeout(() => {
            setInd(ind === images.length - 1 ? 0 : ind + 1)
        }, 10000)
        setTimeout(() => {
            setFlipped(false)
        }, 10500)
    }, [ind])
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <div
                    className={`${flipped ? 'opacity-80 transition duration-500 ease-in-out transform scale-95 shadow' : 'shadow-lg transition duration-500 ease-in-out transform scale-100 opacity-100'}`}>
                    <img src={images[ind].imagePath} alt={images[ind].alt} className={'home-img'}/>
                </div>
            </section>
            <section>
                <br/>
                <CoursesOffered/>
            </section>
            <section>
                <br/>

            </section>
            <br/>
            <div>
                <div className={'flex flex-row justify-center items-center'}>
                    <text className={`text-3xl subpixel-antialiased font-semibold`}>
                        Locate Us
                    </text>
                </div>
                <iframe
                    title='Way to Learnizo Coaching Institute,Amroha'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d434.77666986880297!2d78.46335244985433!3d28.898194086514106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbdc5f6299457452a!2sLearnizo%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1608494799327!5m2!1sen!2sin"
                    id='gmap_canvas'
                    className='google-map'
                    frameBorder='0'
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                />
            </div>
            <br/>
            <ContactUsInner/>
        </Layout>
    )
}
