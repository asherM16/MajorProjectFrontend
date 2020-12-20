import {useState} from 'react';
import styles from './layout.module.css'
import Head from 'next/head'
import {Ionicons} from 'react-web-vector-icons'
import Link from 'next/link'
import {socialMediaDetails} from "../constants/socialMediaDetails";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {headerLinks} from "../constants/headerLinks";

const name = 'Asher Toufeeq'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({children, home}) {
    const [menuVisible, setMenuVisible] = useState(false)
    return (
        <div className={styles.container}>
            <Parallax scrolling={true}>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                    <meta
                        property="og:image"
                        content={`https://og-image.now.sh/${encodeURI(
                            siteTitle
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta name="og:title" content={siteTitle}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                </Head>
                <header>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <div className={`shadow-md`}>
                            <div
                                className={`learn-gray flex flex-row items-center justify-around py-2 ${styles.learnBlue} ${styles.upperHeader}`}>
                                <div
                                    className={'text-white transition duration-500 ease-in-out transform hover:scale-110'}>
                                    <Ionicons name={'ios-call'} color={'#fff'} size={20}/>
                                    {' '}
                                    +919267633372
                                </div>
                                <div>
                                    {socialMediaDetails.map(Item => (
                                        <a
                                            href={Item.link}
                                            target={'_blank'}
                                            className={`mx-2`}
                                            style={{textDecoration: 'none'}}
                                        ><Ionicons
                                            name={Item.icon}
                                            color={Item.color}
                                            size={Item.size}
                                            key={Item.icon}
                                        />
                                        </a>))}
                                </div>
                            </div>
                            <div
                                className={`${styles.learnGray} flex flex-row justify-between items-start lg:items-center xl:items-center 2xl:items-center p-1`}>
                                <img
                                    src="/images/learnizoLogo.png"
                                    className={`${styles.headerHomeImage} mx-3`}
                                    alt={name}
                                />
                                <div className={`flex flex-row items-center justify-center`}>
                                    <div className={'hidden lg:flex flex-row items-center justify-center'}>
                                        {headerLinks.map(({link, title}) => (
                                            <div className={`m-2 flex flex-row items-center`} key={link}>
                                                <Link href={`${link}`}>
                                                    <a className={`font-medium text-gray-700 
                                                colorBlue transition duration-500 
                                                ease-in-out transform 
                                                hover:scale-110`}>{title}</a>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={'animate flex lg:hidden xl:hidden 2xl:hidden' +
                                    ' justify-center items-end flex-col'}>
                                        <div onClick={() => {
                                            setMenuVisible(!menuVisible)
                                        }} className={'mx-2'}>
                                            <Ionicons name={'ios-menu'} size={25}/>
                                        </div>
                                        <div className={`${menuVisible ? '' : 'hidden'}`}>
                                            {headerLinks.map(({link, title}) => (
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
                <div className={`${styles.upperSpace}`}/>
                <main className={`${styles.childContainer}`}>
                    {children}
                </main>
                <br/>
                <div className={`${styles.learnGray}`}>
                    <div className={`flex flex-col justify-between items-center p-2 `}>
                        <img
                            src="/images/learnizoLogo.png"
                            className={`${styles.headerHomeImage} mx-3`}
                            alt={name}
                        />
                        <text>
                            © 2020 Learnizo Coaching Institute, Amroha
                        </text>
                    </div>
                </div>
            </Parallax>
        </div>
    )
}
