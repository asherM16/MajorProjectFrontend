import Head from "next/head";
import Layout from "./layout";
import {SubjectCard} from "./subjectCard";
import style from "./layout.module.css"
import {CourseDetails} from "../constants/coursesDetails";
import {ContactUsInner} from "./contactUsInner";

export const ClassDetailsLayout = ({ind,classTitle,classDetails}) => {
    return (
        <Layout>
            <Head>
                <title>{`Learnizo | ${classTitle}`}</title>
            </Head>
            <div className={`flex flex-col items-center justify-center`}>
                <div className={`flex flex-col items-center w-9/12 justify-center`}>
                    <br/>
                    <br/>
                    <br/>
                    <div className={'flex flex-col justify-center items-center'}>
                        <text className={`text-3xl subpixel-antialiased font-semibold`}>
                            {classTitle}
                        </text>
                        <br/>
                        <p className={'font-light  text-center cursor-default'}>
                            {classDetails}
                        </p>
                    </div>
                </div>
            </div>
            <div className={` py-2 my-4 flex flex-row flex-wrap justify-center ${style.learnGray}`}>
                {CourseDetails[ind].coursesList.map((Item)=><SubjectCard
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
export default ClassDetailsLayout
