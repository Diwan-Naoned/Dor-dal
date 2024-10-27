import { AiOutlineHome, AiFillHome } from "react-icons/ai"
import { useLocation } from "react-router-dom"

export const Home = () => {
  const { pathname } = useLocation()
  return <>{pathname === "/" ? <AiFillHome className="text-yellow-500 text-3xl" /> : <AiOutlineHome className="text-diwan-500 text-3xl" />}</>
}