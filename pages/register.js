import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'
import { Ionicons } from 'react-web-vector-icons'
import Alert from '../components/alert'

export const RegisterForm = () => {
  const [reqObj, setReqObj] = useState({ name: '', email: '', address: '', contact: '', courseClass: '' })
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const changeValue = (key, value) => {
    setReqObj({ ...reqObj, [key]: value })
  }
  useEffect(() => {
    setTimeout(() => { setError(null); setSuccess(null) }, 10000)
  }, [success, error])
  return (
        <Layout>
            <br/>
            <div className={'flex flex-row justify-center items-center'}>
                <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                    Register
                </text>
                <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                    Demo Class
                </text>
            </div>
            <br/>
            <div className={'grid lg:grid-cols-2 grid-cols-1 gap-4'}>
                <div className={'col-span-1 p-4'}>
                    <img src="/svgs/classroom.svg" alt={'teaching'} className={'p-4'}/>
                </div>
                <div className={'col-span-1 p-4 m-2'}>
                    <br/>
                    <br/>
                    <form className="relative" onClick={(e) => { e.preventDefault() }}>
                        <div className={'flex flex-row items-center'}>
                            <div className={'py-2'}>
                                <Ionicons size={20} name={'md-person'}/>
                            </div>
                            <input
                                onChange={(e) => { changeValue('name', e.target.value) }}
                                className="outline-none w-full text-sm text-black placeholder-gray-500 border-b-2 border-gray-200  py-2 m-2"
                                type="text" aria-label="name"
                                value={reqObj.name}
                                placeholder="Please enter your full name"/>
                        </div>
                        <div className={'flex flex-row items-center'}>
                        <label className={'text-sm text-gray-500'}>Class </label>
                            <select id="classes"
                                    value={reqObj.courseClass}
                                    onChange={(e) => { changeValue('courseClass', e.target.value) }}
                                    name="courseClass"
                                    className={'outline-none w-full text-sm text-black bg-white border-b-2 border-gray-200  py-2 m-2'}>
                                <option value="Class X" label={'Class X'} className={''}/>
                                <option value="Class IX" label={'Class IX'}/>
                                <option value="Class VIII" label={'Class VIII'}/>
                                <option value="Class VII" label={'Class VII'}/>
                                <option value="Class VI" label={'Class VI'}/>
                            </select>
                        </div>
                        <div className={'flex flex-row items-center'}>
                            <div className={'py-2'}>
                                <Ionicons size={20} name={'md-call'} />
                            </div>
                            <input
                                onChange={(e) => { changeValue('contact', e.target.value) }}
                                className="outline-none w-full text-sm text-black placeholder-gray-500 border-b-2 border-gray-200  py-2 m-2"
                                type="number"
                                value={reqObj.contact}
                                aria-label="contact" placeholder="Contact Number"/>
                        </div>
                        <div className={'flex flex-row items-center'}>
                            <div className={'py-2'}>
                                <Ionicons size={20} name={'md-mail'} />
                            </div>
                            <input
                                onChange={(e) => { changeValue('email', e.target.value) }}
                                className="outline-none w-full text-sm text-black placeholder-gray-500 border-b-2 border-gray-200  py-2 m-2"
                                value={reqObj.email}
                                type="email" aria-label="mail" placeholder="E-Mail"/>
                        </div>
                        <div className={'flex flex-row items-center'}>
                            <input
                                onChange={(e) => { changeValue('address', e.target.value) }}
                                className="outline-none w-full text-sm text-black placeholder-gray-500 border-b-2 border-gray-200  py-2 m-2"
                                aria-label="address"
                                value={reqObj.address}
                                placeholder="Address"/>
                        </div>
                      <div className={'flex flex-row w-full justify-center'}>
                        <button type={'submit'} onClick={() => {
                          fetch('/api/contact', {
                            method: 'post',
                            headers: {
                              Accept: 'application/json, text/plain, */*',
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(reqObj)
                          }).then((res) => {
                            setSuccess(true)
                          }).catch(() => {
                            setError(true)
                          })
                        }} className={`${styles.learnBlue} text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
                            Register For Demo Class
                        </button>
                         </div>
                    </form>
                    <div className={'w-100 flex flex-row items-center justify-center'}>
                        {error ? <Alert type={'error'}>Request Fail</Alert> : null}
                        {success ? <Alert type={'success'}>Mail Sent Successfully</Alert> : null}
                    </div>
                </div>
            </div>
        </Layout>
  )
}
export default RegisterForm
