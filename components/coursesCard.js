import {Ionicons} from 'react-web-vector-icons'
import Link from "next/link";

export const CoursesCard = ({title, description, coursesList, link}) => {
    return (
        <div className={`m-4 card-classes rounded bordered shadow
        transition duration-500 ease-in-out 
        transform hover:-translate-y-1 hover:scale-105
        `} style={{width: '18rem'}}>
            <Link href={link || '/'}>
                <div className={'flex flex-col  px-2 p-2'}>
                    <text
                        className={'text-2xl font-middle text-white cursor-default hover:underline'}>{title || 'Class X'}</text>
                    <p className={'font-light text-white cursor-default hover:underline'}>
                        {description || 'Learnizo Provides Class X regular classroom programme'}
                    </p>
                </div>
            </Link>
            <div className={'flex flex-col rounded-b bg-white px-2 p-2'}>
                {(coursesList || [{
                    courseName: 'Maths',
                    link: '/class-x/maths/',
                }]).map(i => (<Link href={i.link} key={i.courseName}>
                    <div className={`flex flex-row items-center justify-between`}>
                        <text className={'font-light text-gray-700 cursor-default hover:underline'}>
                            {i.courseName}
                        </text>
                    </div>
                </Link>))}
            </div>
        </div>)
}
