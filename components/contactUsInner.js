<<<<<<< HEAD
import { Ionicons } from 'react-web-vector-icons'
import styles from './layout.module.css'
import { useState } from 'react'

export const ContactUsInner = () => {
  const [contact, setContact] = useState('')
  return (
        <div className={'grid md:grid-cols-2 grid-cols-1 gap-4'}>
            <div className={'flex flex-col justify-start items-start p-2 px-4'}>
                <div className={'flex flex-row'}>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        Contact
                    </text>
                    <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        Us
                    </text>
                </div>
                <br/>
                <div className={'w-full flex flex-col'}>
                    <text className={'text-xl subpixel-antialiased font-middle'}>
=======
import {Ionicons} from "react-web-vector-icons";
import styles from "./layout.module.css";
import {useState} from "react";

export const ContactUsInner=()=>{
    const [contact, setContact] = useState('')
    return(
        <div className={'grid md:grid-cols-2 grid-cols-1 gap-4'}>
            <div className={'flex flex-col justify-start items-start p-2 px-4'}>
                <text className={`text-3xl subpixel-antialiased font-semibold`}>
                    Contact Us
                </text>
                <br/>
                <div className={`w-full flex flex-col`}>
                    <text className={`text-xl subpixel-antialiased font-middle`}>
>>>>>>> khalid
                        Mohammad Saleem<br/>
                        Managing Director<br/>
                        Learnizo Coaching Institute<br/>
                        Moh. Nal,Near Shamrock School,Amroha
                    </text>
<<<<<<< HEAD
                    <br/>
                    <br/>
                    <div>
                        <text className={'text-gray-700 font-light'}>
=======
                        <br/>
                        <br/>
                    <div>
                        <text className={`text-gray-700 font-light`}>
>>>>>>> khalid
                            Phone Numbers
                        </text>
                        <ul className={'mx-4'}>
                            <li>
                                <Ionicons name={'ios-call'} size={18} color={'#31428a'}/>
                                <text className={`${styles.colorLearnBlue}`}>{' '}+919267633372</text>
                            </li>
                            <li>
                                <Ionicons name={'ios-call'} size={18} color={'#31428a'}/>
                                <text className={`${styles.colorLearnBlue}`}>{' '}+918630410562</text>
                            </li>
                        </ul>
                    </div>
                    <br/>
                    <div>
<<<<<<< HEAD
                        <text className={'text-gray-700 font-light'}>
=======
                        <text className={`text-gray-700 font-light`}>
>>>>>>> khalid
                            Mailing Addresses
                        </text>
                        <ul className={'mx-4'}>
                            <li>
                                <Ionicons name={'ios-mail'} size={18} color={'#31428a'}/>
                                <text className={`${styles.colorLearnBlue}`}>{'  '}saleemkhan92676@gmail.com</text>
                            </li>
                            <li className={''}>
                                <Ionicons name={'ios-mail'} size={18} color={'#31428a'}/>
                                <text className={`${styles.colorLearnBlue}`}>{'  '}learnizoclass@gmail.com</text>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col justify-center items-center'}>
<<<<<<< HEAD
                <text className={'text-xl subpixel-antialiased font-semibold'}>
=======
                <text className={`text-xl subpixel-antialiased font-semibold`}>
>>>>>>> khalid
                    Need assistance from us?
                </text>
                <br/>
                <form className="relative">
                    <input
                        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                        placeholder={'Enter Your Number'}
                        type="number" aria-label="contactNumber"
                    />
                </form>
                <br/>
<<<<<<< HEAD
                <button
                    className={`${styles.learnBlue} text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
=======
                <button className={`${styles.learnBlue} text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
>>>>>>> khalid
                    Get a Call Back
                </button>
            </div>
        </div>
<<<<<<< HEAD
  )
=======
    )
>>>>>>> khalid
}
