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
                        Mohammad Saleem<br/>
                        Managing Director<br/>
                        Learnizo Coaching Institute<br/>
                        Moh. Nal,Near Shamrock School,Amroha
                    </text>
                    <br/>
                    <br/>
                    <div>
                        <text className={'text-gray-700 font-light'}>
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
                        <text className={'text-gray-700 font-light'}>
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
                <text className={'text-xl subpixel-antialiased font-semibold'}>
                    Need assistance from us?
                </text>
                <br/>
                <form className="relative">
                    <input
                        onChange={(e) => { setContact(e.target.value) }}
                        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                        placeholder={'Enter Your Number'}
                        type="number" aria-label="contactNumber"
                        value={contact}
                    />
                </form>
                <br/>
                <button
                    type={'submit'} onClick={() => {
                      fetch('/api/callback', {
                        method: 'post',
                        headers: {
                          Accept: 'application/json, text/plain, */*',
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ contact })
                      }).then((res) => {
                        console.log(res)
                      })
                    }}
                    className={`${styles.learnBlue} text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
                    Get a Call Back
                </button>
            </div>
        </div>
  )
}
