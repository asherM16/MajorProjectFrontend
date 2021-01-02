import Link from "next/link";
import style from "./layout.module.css"

export const TestimonialCard = ({bg,link}) => {
    return (
        <Link href={link || '/'}>
            <div className={`m-4 p-2 px-4 card-subject shadow flex flex-col px-2 justify-start  rounded  
                            transition duration-500 ease-in-out 
                            transform hover:-translate-y-1 hover:scale-105
                            `} style={{width: '18rem'}}>
              <div className={'flex flex-row'}>
                  <div>
                      <img src="/images/profile.jpeg" height={'50px'} width={'50px'} className={'testimonial-img'}/>
                  </div>
                <div>
                    <text
                        className={`text-xl font-middle cursor-default ${style.colorLearnBlue}`}>
                        {'Asher Toufeeq'}
                    </text>
                    <br/>
                    <text
                        className={`font-light cursor-default text-gray-500`}>
                        {'@Class 10th'}
                    </text>
              </div>
              </div>
                <div>
                    <text className={'font-base'}>
                        “During my years at Knowledge Planet, We were given lots of practice which helped me get really good score. Thank you KP.”
                    </text>
                </div>
            </div>
        </Link>)
}
