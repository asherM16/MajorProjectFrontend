import {CourseDetails} from "../constants/coursesDetails";
import ClassDetailsLayout from "../components/classDetailsLayout";

export const ClassIX = () => {
    return (
        <ClassDetailsLayout classDetails={CourseDetails[1].classDetails} classTitle={CourseDetails[1].title} ind={1}/>
    )
}
export default ClassIX
