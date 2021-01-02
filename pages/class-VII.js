import {CourseDetails} from "../constants/coursesDetails";
import ClassDetailsLayout from "../components/classDetailsLayout";

export const ClassVII = () => {
    return (
        <ClassDetailsLayout classDetails={CourseDetails[3].classDetails} classTitle={CourseDetails[3].title} ind={3}/>
    )
}
export default ClassVII
