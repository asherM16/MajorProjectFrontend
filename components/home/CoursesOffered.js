import {CoursesCard} from "../coursesCard";

export const CoursesOffered=()=>{
    return(
        <div className={`flex flex-col items-center`}>
            <div className={'flex flex-row justify-center items-center'}>
                <text className={`text-3xl subpixel-antialiased font-semibold`}>
                    Courses Offered
                </text>
            </div>
            <br/>
            <div className={`flex flex-row flex-wrap mx-4 justify-center`}>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
            </div>
        </div>
    )
}
export default CoursesOffered;
