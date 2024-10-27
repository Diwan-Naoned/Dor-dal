import { Link, Outlet } from "react-router-dom"
import './authenticated.css'
import { Home } from "../components/icon/home"
import { Apps } from "../components/icon/apps"
import { Avatar } from "../components/icon/avatar"
import { Menu } from "../components/menu/Menu"
import { useState } from "react"
import { Card } from "../components/card/card"

export const Authenticated = () => {
  const [show, setShow] = useState(false)
  const goal = 1380
  const don = 487
  const progression = Math.round(don * 100 / goal)
  return <div className="authentificated mt-5 mb-5 w-[79%]">
    {show && <div className="w-screen h-screen absolute top-0 right-0 z-30">
      <div className="fixed h-screen w-screen bg-opacity-50 bg-diwan-700" onClick={() => setShow(false)}/>
      <div className="fixed top-0 right-0 w-3/4 h-full">
        <Menu/>
      </div>
    </div>}
    
    <div className="fixed top-0 m-auto pt-5 pb-2 bg-white z-20 don flex flex-col gap-3">
      <div className="border-diwan-700 border">
        <div className="bg-secondary-500 text-white p-1" style={{width:`${progression}%`}}>{progression}%</div>
      </div>
      <Card type='primary' title="give" link='https://www.helloasso.com/associations/evit-diwan/formulaires/1/'/>
    </div>
    <div className="relative top-32 pb-14 w-full">
      <Outlet />
    </div>

    <div className="fixed bottom-0 left-0 w-full bg-white z-20 py-2 flex justify-around shadow-2xl shadow-diwan-700 drop-shadow-2xl">
      <Link to="/"><Home /></Link>
      <Link to="/apps"><Apps /></Link>
      <div onClick={() => setShow(!show)}><Avatar /></div>
    </div>
  </div>

}
