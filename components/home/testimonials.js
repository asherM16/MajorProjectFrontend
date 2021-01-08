<<<<<<< HEAD
import Head from 'next/head'
import { TestimonialCard } from '../testimonialCard'
import styles from '../layout.module.css'
import Slider from 'react-slick'

export const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div className={`${styles.learnGray} flex-col justify-center items-center`}>
            <br/>
            <div className={'flex flex-row justify-center items-center'}>
                <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                    Our
                </text>
                <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                    Testimonials
                </text>
            </div>
                <Slider {...settings}>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                </Slider>
            <br/>
        </div>
  )
=======
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
>>>>>>> khalid
}
