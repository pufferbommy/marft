import video from '../assets/video.jpg'
import play from '../assets/play.svg'

const Video = () => {
  return (
    <div className="h-[500px] lg:h-[756px] relative">
      <img className="h-full w-full object-cover" src={video} alt="video" />
      <div className="w-[153px] h-[153px] cursor-pointer bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-70 backdrop-blur-xl">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={play}
          alt=""
        />
      </div>
    </div>
  )
}

export default Video
