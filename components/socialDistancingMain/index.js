import styles from '../layout.module.css'

export const SocialDistancingMain = () => {
  return (
      <div className={'flex flex-col items-center'}>
            <div className={'flex flex-row justify-center items-center'}>
                <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                    Social Distancing
                </text>
                <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                    Measurement
                </text>
            </div>
            <br/>
            <div className={'flex flex-row flex-wrap mx-4 justify-center items-start'}>
                <button 
                 disabled
                 className={`${styles.learnBlue} text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
                    Upload Video
                </button>
                <button className={'bg-green-500 text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow'}>
                    Get Video
                </button>
            </div>
        </div>
  )
}
export default SocialDistancingMain
