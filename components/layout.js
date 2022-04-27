import { useState } from 'react'
import styles from './layout.module.css'
import Head from 'next/head'
import TypeProps from 'prop-types'
import { Ionicons } from 'react-web-vector-icons'
import Link from 'next/link'
import { socialMediaDetails } from '../constants/socialMediaDetails'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { headerLinks } from '../constants/headerLinks'

export const siteTitle = 'Leanizo Coaching Institute'

export default function Layout ({ children }) {
  const [menuVisible, setMenuVisible] = useState(false)
  return (
        <div className={styles.container}>
            <Parallax scrolling={true}>
                <Head>
                        <meta charSet="utf-8"/>
                        <link rel="shortcut icon" href="new.ico"/>
                        <meta name="viewport"
                          content="width=device-width, initial-scale=1"/>
                        <meta name="robots" content="index, follow"/>
                        <meta name="theme-color" content="#000000"/>
                        <meta name="" content="Major Project | Jamia Millia Islamia"/>
                        <meta name="description"
                              content="The system utilizes only video or image input - video analytics - a very powerful tool.
                              "/>
                        <meta property="og:type" content="website"/>
                        <meta property="og:title" content="Major Project | Jamia Millia Islamia"/>
                        <meta property="og:description"
                              content="A coaching center for students of class 6th to class 10th."/>
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:title" content="Major Project | Jamia Millia Islamia"/>
                        <meta property="twitter:description"
                              content="The system utilizes only video or image input - video analytics - a very powerful tool.
                              "/>
                        <link rel="apple-touch-icon" href="new.ico"/>
                        <link rel="manifest" href="manifest.json"/>
                    <meta name="google-site-verification" content="9W7bgdpxM2mCUvG1wJFGGD4CAmkM6J1-lLOn1Q3iNEc"/>
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle}/>
                    <link rel="icon" href="new.ico"/>
                    <meta name="twitter:card" content="summary_large_image" />
                    <title>Major Project | Jamia Millia Islamia</title>
                </Head>
                <header>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <div className={'shadow-md'}>
                            <div
                                className={`${styles.learnGray} flex flex-row justify-between items-start lg:items-center xl:items-center 2xl:items-center p-1`}>
                                <Link href={'/'}>
                                    <img
                                    src="/images/learnizoLogo.png"
                                    className={`${styles.headerHomeImage} mx-3`}
                                    alt={'Logo'}
                                    />
                                </Link>
                                <div className={'flex flex-row items-center justify-center'}>
                                    <div className={'hidden lg:flex flex-row items-center justify-center'}>
                                    <text className='mr-2 text-center font-medium font-semibold text-gray-700 '>
                                        Faculty of Engineering And Technology <br/> Jamia Millia Islamia
                                    </text>
                                </div>
                                </div>
                                <div className={'flex flex-row items-center justify-center'}>
                                    <div className={'hidden lg:flex flex-row items-center justify-center'}>
                                    <text className='mr-2 font-medium font-semibold text-gray-700 '>
                                        Major Project
                                    </text>
                                    </div>
                                    <div className={'z-50 animate flex lg:hidden xl:hidden 2xl:hidden' +
                                    ' justify-center items-end flex-col'}>
                                        <div onClick={() => {
                                          setMenuVisible(!menuVisible)
                                        }} className={'mx-2'}>
                                            <Ionicons name={'ios-menu'} size={25}/>
                                        </div>
                                        <div className={`z-50 ${menuVisible ? '' : 'hidden'}`}>
                                            {headerLinks.map(({ link, title }) => (
                                                <div className={`m-2 flex flex-col items-end 
                                                justify-center`}
                                                     key={link}>
                                                    <Link href={`${link}`}>
                                                        <a className={`font-medium text-gray-700 
                                                colorBlue transition duration-500 
                                                ease-in-out transform 
                                                hover:scale-110`}>{title}</a>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>
                </header>
                <div className={`${styles.upperSpace} ${menuVisible ? '' : 'hidden'}`}/>
                <div className={`${styles.upperSpace}`}/>
                <main className={`z-30 ${styles.childContainer}`}>
                    {children}
                </main>
                <br/>
                <div className={`${styles.learnGray}`}>
                    <div className={'flex flex-col justify-between items-center p-2 '}>
                        <img
                            src="/images/learnizoLogo.png"
                            className={`${styles.headerHomeImage} mx-3`}
                            alt={'Leanizo'}
                        />
                        <br/>
                        <text>
                            © 2022 MJ09, Electrical
                        </text>
                    </div>
                </div>
            </Parallax>
        </div>
  )
}
Layout.propTypes = {
  children: TypeProps.any
}
