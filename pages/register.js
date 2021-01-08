import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../components/layout.module.css'

export const RegisterForm = () => {
  const [name, changeName] = useState('')

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
            <form>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname"/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname"/>
            </form>
        </Layout>
  )
}
export default RegisterForm
