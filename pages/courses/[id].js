import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import { AllKeys } from '../../constants/coursesKey'
import { CourseDescription } from '../../constants/coursesDetails'
import PropTypes from 'prop-types'

export async function getStaticPaths () {
  return {
    paths: AllKeys.map(key => ({
      params: {
        id: key
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  return {
    props: {
      params
    }
  }
}
const getTitle = (str) => {
  const arr = str.split('-')
  if (arr.length > 3) {
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    arr[1] = arr[1][0].toUpperCase() + arr[1].slice(1)
    return {
      class: arr[2],
      subject: arr[0] + ' ' + arr[1]
    }
  }
  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
  return {
    class: arr[1],
    subject: arr[0]
  }
}

const Courses = ({ params }) => {
  const info = getTitle(params.id)
  return (
        <Layout>
            <Head>
                <title>{`Learnizo | ${info.subject} Class ${info.class}`}</title>
            </Head>
            <div className={'grid grid-cols-1 md:grid-cols-2'}>
                <div className={'bg-white px-4'}>
                    <br/>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        {info.subject} {' '}
                    </text>
                    {/* <br/> */}
                    <text className={'text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        Class {info.class}
                    </text>
                    <br/>
                    <br/>
                    <text className={'text-gray-700 font-light'}>
                        {CourseDescription[params.id].description}
                    </text>
                    <br/>
                    <br/>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        Why? {' '}
                    </text>
                    <text className={'text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        Learnizo for {info.class} {info.subject}
                    </text>
                    <br/>
                    <br/>
                    <text className={'text-gray-700 font-light'}>
                        Learnizo is Amroha&apos;s first coaching institution which provide subject wise teachers for
                        students in Class 6th till 10th. For 6th to 8th grade students, we run a very powerful
                        Foundation program, with the objective of laying a strong Science & Maths foundation
                        for higher classes. For students in Class 9th and 10,
                        we offer our highly acclaimed Comprehensive programme to prepare students for boards and competetive exams.
                    </text>
                </div>
                <div className={'flex flex-col items-center'}>
                    <br/>
                    <Link href={'/register'} key={'register'}>
                        <button className={`${styles.learnBlue} text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
                            Register For Demo Class
                        </button>
                    </Link>
                    <img src="/svgs/teaching.svg" alt={'teaching'} className={'p-4'}/>
                </div>
            </div>
        </Layout>
  )
}

Courses.propTypes = {
  params: PropTypes.objectOf(PropTypes.string)
}

export default Courses
