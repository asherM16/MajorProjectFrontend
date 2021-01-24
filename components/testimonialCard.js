import style from './layout.module.css'
import PropTypes from 'prop-types'

export const TestimonialCard = ({
  image,
  studentName,
  studentClass,
  description
}) => {
  return (
            <div className={`m-4 p-2 px-4 card-subject shadow flex flex-col justify-start  rounded  
                            transition duration-500 ease-in-out 
                            transform hover:-translate-y-1 
                            `} style={{ width: '90%' }}>
              <div className={'flex flex-row'}>
                  <div>
                      <img src={image || '/images/profile.jpeg'} height={'50px'} width={'50px'} className={'testimonial-img'} alt={'student'}/>
                  </div>
                <div>
                    <text
                        className={`text-xl font-middle cursor-default ${style.colorLearnBlue}`}>
                        {studentName || 'Asher Toufeeq'}
                    </text>
                    <br/>
                    <text
                        className={'font-light cursor-default text-gray-500'}>
                        {`@Class ${studentClass || 10}th`}
                    </text>
              </div>
              </div>
                <div>
                    <text className={'text-sm font-light text-gray-700'}>
                        {description}
                    </text>
                </div>
            </div>
  )
}

TestimonialCard.propTypes = {
  image: PropTypes.string,
  studentName: PropTypes.string,
  studentClass: PropTypes.number,
  description: PropTypes.string
}
