import { FaPlay } from "react-icons/fa"

const PlayButton = () => {
  return (
    <button className="flex items-center bg-green-500 transition rounded-full opacity-0 p-4 translate drop-shadow-md translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
      <FaPlay className="text-black" />
    </button>
  )
}

export default PlayButton
