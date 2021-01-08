import Head from 'next/head'
import Layout from './layout'
import { SubjectCard } from './subjectCard'
import { CourseDetails } from '../constants/coursesDetails'
import { ContactUsInner } from './contactUsInner'
import PropTypes from 'prop-types'
import styles from './layout.module.css'

export const ClassDetailsLayout = ({ ind, classTitle, classDetails }) => {
  const classTitleArr = classTitle.split(' ')
  return (
        <Layout>
            <Head>
                <title>{`Learnizo | ${classTitle}`}</title>
            </Head>
            <div className={'flex flex-col items-center justify-center'}>
                <div className={'flex flex-col items-center w-9/12 justify-center'}>
                    <br/>
                    <br/>
                    <br/>
                    <div className={'flex flex-col justify-center items-center'}>
                       <div className={'flex flex-row'}>
                        <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                            {classTitleArr[0]}
                        </text>
                        <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                            {classTitleArr[1]}
                        </text>
                       </div>
                        <br/>
                        <p className={'font-light  text-center cursor-default'}>
                            {classDetails}
                        </p>
                    </div>
                </div>
            </div>
            <div className={` py-2 my-4 flex flex-row flex-wrap justify-center ${styles.learnGray}`}>
                {CourseDetails[ind].coursesList.map((Item) => <SubjectCard
                    bg={Item.bg}
                    link={Item.link}
                    key={Item.courseName}
                    title={Item.courseName}
                />)}
            </div>
            <ContactUsInner/>
        </Layout>
  )
}
ClassDetailsLayout.propTypes = {
  ind: PropTypes.string,
  classTitle: PropTypes.string,
  classDetails: PropTypes.string
}
export default ClassDetailsLayout
