import { useIntl } from "react-intl"
import { Button } from "../../components/button/Button"
import { Input } from "../../components/input/Input"

export const Login = () => {
  const { formatMessage } = useIntl()
  return <div className="flex flex-col gap-5 md:gap-9 w-full h-screen">
    <img src='./logo.svg' className="md:w-1/2 m-auto" />
    <div className='flex flex-col gap-5 md:gap-9 w-full'>
      <div className='flex flex-col gap-5 md:gap-9 w-full'>
        <div className='flex flex-col gap-1 md:gap-2 w-full'>
          <div className='flex flex-col gap-2 md:gap-4 w-full'>
            <Input label={formatMessage({id:"email"})} />
            <Input label={formatMessage({id:"password"})} />
          </div>
          <div className="flex justify-between">
            <a href="/forgot-password" className="font-light text-xs">{formatMessage({id:"forgot.password"})}</a>
            <a href="/create-account" className="font-light text-xs">{formatMessage({id:"create.account"})}</a>
          </div>
        </div>
        <Button title={formatMessage({id:"login"})} />
      </div>
      <hr />
      <Button title={formatMessage({id:"login"})} />
    </div>
  </div>
}