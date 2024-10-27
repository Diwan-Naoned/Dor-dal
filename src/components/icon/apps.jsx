import { AiOutlineAppstore, AiFillAppstore } from "react-icons/ai"
import { useLocation } from "react-router-dom"

export const Apps = () => {
  const { pathname } = useLocation()
  return <>{pathname === "/apps" ? <AiFillAppstore className="text-yellow-500 text-3xl" /> : <AiOutlineAppstore className="text-diwan-500 text-3xl" />}</>
}