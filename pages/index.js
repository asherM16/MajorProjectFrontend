import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import CoursesOffered from '../components/home/CoursesOffered'
import { ContactUsInner } from '../components/contactUsInner'
import { Testimonials } from '../components/home/testimonials'
import styles from '../components/layout.module.css'
import Slider from 'react-slick'

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
  imagePath: '/images/banner5.jpg',
  title: 'IX',
  category: 'Science'

}, {
  alt: 'banner5',
  imagePath: '/images/banner4.jpg',
  title: 'IX',
  category: 'Science'
}]

export default function Home () {
  const [name, setName] = useState(false)
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  }
  return (
        <Layout>
            <Head>
                <title>{'Learnizo | Home'}</title>
            </Head>
            <section className={'z-0'}>
            <Slider {...settings}>
                {images.map((item) => (
                    <img key={item.imagePath} src={item.imagePath} alt={item.alt} className={'home-img'}/>
                ))}
            </Slider>
            </section>
            <section>
                <br/>
                <CoursesOffered/>
            </section>
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" value={name} onChange={(e) => { setName(e.target.value) }}/><br/><br/>
                <input type="submit" value="Submit"/>
            </form>
            <section>
                <br/>
                <Testimonials/>
            </section>
            <br/>
            <div>
                <div className={'flex flex-row justify-center items-center'}>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        Locate
                    </text>
                    <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        {'Us'}
                    </text>
                    {/* <text className={'text-3xl subpixel-antialiased font-semibold'}> */}
                    {/*    Locate Us */}
                    {/* </text> */}
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
