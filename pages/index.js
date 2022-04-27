import Head from 'next/head'
import Layout from '../components/layout'
import { ContactUsInner } from '../components/contactUsInner'
import { SocialDistancingMain } from '../components/socialDistancingMain/index'
import Slider from 'react-slick'

const images = [{
  alt: 'banner1',
  imagePath: '/images/banner1.jpg',
  title: 'IX',
  category: 'Science'
},
{
  alt: 'banner2',
  imagePath: '/images/banner1.jpg',
  title: 'IX',
  category: 'Science'
},
{
  alt: 'banner3',
  imagePath: '/images/banner1.jpg',
  title: 'IX',
  category: 'Science'

}, {
  alt: 'banner4',
  imagePath: '/images/banner1.jpg',
  title: 'IX',
  category: 'Science'

}, {
  alt: 'banner5',
  imagePath: '/images/banner1.jpg',
  title: 'IX',
  category: 'Science'
}]

export default function Home () {
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
                <title>{'Major Project | Jamia Millia Islamia'}</title>
            </Head>
            <section className={'z-0'}>
            <Slider {...settings}>
                {images.map((item) => (
                    <img key={item.imagePath} src={item.imagePath} alt={item.alt} className={'home-img'}/>
                ))}
            </Slider>
            </section>
            <br/>
                <SocialDistancingMain/>
            <br/>
            <ContactUsInner/>
        </Layout>
  )
}
