import styles from './layout.module.css'

export const ContactUsInner = () => {
  return (
        <div className={'grid md:grid-cols-2 grid-cols-1 gap-4'}>
            <div className={'flex flex-col justify-start items-start p-2 px-4'}>
                <div className={'flex flex-row'}>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        Group
                    </text>
                    <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        Members
                    </text>
                </div>
                <br/>
                <div className={'w-full flex flex-col'}>
                    <text className={'text-xl subpixel-antialiased font-middle'}>
                        Abhishek Shukla - 18BEE059<br/>
                        Asher Toufeeq - 18BEE060<br/>
                        Mohd Salim Reza - 18BEE069<br/>
                        Sundus Afreen - 18BEE073<br/>
                    </text>
                    <br/>
                    <br/>
                    <div>
                        <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                            Course
                        </text>
                        <ul className={''}>
                            <li>
                                <text className={`${styles.colorLearnBlue}`}>{' '}Electrical, 8th Sem</text>
                            </li>
                        </ul>
                    </div>
                    <br/>
                </div>
            </div>
            <div className={'flex flex-col'}>
                <text className={"text-xl subpixel-antialiased font-semibold text-gray-500"}>
                    Supervisor
                </text>
                <br/>
                <ul className={''}>
                    <li>
                        <text className={`${styles.colorLearnBlue} text-3xl subpixel-antialiased font-semibold`}>{'  '}Dr. Abdul Quaiyum Ansari</text>
                    </li>
                    <li>
                        <text className={`${styles.colorLearnBlue}`}>{'  '}Professor</text>
                    </li>
                    <li>
                        <text className={'text-xl subpixel-antialiased font-middle'}>{'  '}Department of Electrical Engineering,</text>
                    </li>
                    <li>
                        <text className={'text-xl subpixel-antialiased font-middle'}>{'  '}JMI</text>
                    </li>
                </ul>
                <br/>
                <div>
                    <text className={"text-xl subpixel-antialiased font-semibold text-gray-500"}>
                            Subject Teacher
                    </text>
                    <ul className={''}>
                        <li>
                            <a href='https://www.jmi.ac.in/electrical/faculty-members/Dr_Shakeb_Ahmad_Khan-2968' tager={'__blank'}>
                                <text className={`${styles.colorLearnBlue} text-3xl subpixel-antialiased font-semibold`}>{'  '}Dr. Shakeb Ahmad Khan Professor</text>
                            </a>
                            </li>
                        </ul>
                    </div>
                <br/>
            </div>
        </div>
  )
}
