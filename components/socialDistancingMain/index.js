import * as React from 'react'
import styles from '../layout.module.css'

export const SocialDistancingMain = () => {
  const [loading, setLoading] = React.useState(false)
  const [url, setUrl] = React.useState(null)

  console.log(loading)
  const loadVideo = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setUrl('https://res.cloudinary.com/teleopdassets/video/upload/v1651045194/SocialDistancingMeasurement/filename_v2n4rd.avi')
    }, [2000])
  }

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
                <button
                    onClick={loadVideo}
                    className={'bg-green-500 text-white p-1 px-2 m-2 rounded transition duration-500 ease-in-out transform hover:scale-105 shadow'}>
                    Get Video
                </button>
            </div>
            {loading && <div>
                Loading...
            </div>}
            {
                url && 
                    <video width="520" height="520" controls>
                    <source src="https://res.cloudinary.com/teleopdassets/video/upload/v1651045194/SocialDistancingMeasurement/filename_v2n4rd.avi" type="video/mp4"/>
                  Your browser does not support the video tag.
                  </video>
            }
        </div>
  )
}
export default SocialDistancingMain
