import { CourseDetails } from '../constants/coursesDetails'
import ClassDetailsLayout from '../components/classDetailsLayout'

export const ClassVIII = () => {
  return (
        <ClassDetailsLayout classDetails={CourseDetails[2].classDetails} classTitle={CourseDetails[2].title} ind={2}/>
  )
}
export default ClassVIII
