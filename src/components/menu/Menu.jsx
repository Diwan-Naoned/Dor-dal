import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "../button/Button"
import { useIntl } from "react-intl"
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { Helloasso } from "../icon/helloasso";
import { Languages } from "../languages/Languages";

export const Menu = () => {
  const {user, logout} = useAuth0()
  const {formatMessage} = useIntl()

  return <div className="bg-white p-6 h-full flex flex-col justify-between">
    <div>
      <p>{formatMessage({id: "hello"})} {user.name}</p>
      <p>{user.email}</p>
    </div>

    <Languages />
    
    <div className="flex flex-col gap-4">
      <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} title={formatMessage({id:"logout"})}/>
      <div className="text-2xl text-diwan-500">
        
        <a href="https://www.helloasso.com/associations/evit-diwan/formulaires/1"><Helloasso /></a>
        <div className="flex justify-end items-center gap-4">
        <a href="https://github.com/Diwan-Naoned"><AiFillGithub /></a>
        <a href="https://www.instagram.com/ecolediwan.nantes/"><AiFillInstagram /></a>
        <a href="https://www.facebook.com/skoldiwannaoned"><AiFillFacebook /></a>
        </div>
        
      </div>
    </div>
  </div>
}