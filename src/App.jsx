import { useIntl } from 'react-intl'
import './App.css'
import { Apps } from './Layout/Apps/Apps'
import { Authenticated } from './Layout/Authenticated'
import { Login } from './Layout/Login/Login'
import { LocaleProvider } from './translation/IntlProvider'
import { useEffect } from 'react'
import {
  Route as ReactRoute,
  Routes as ReactRoutes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react";
import { Home } from './Layout/home/Home'


function App() {
  const {loginWithRedirect, isLoading, isAuthenticated} = useAuth0()

  useEffect(() => {
    if(!isAuthenticated && !isLoading) {
      loginWithRedirect()
    }
  }, [isLoading, isAuthenticated, loginWithRedirect])

  return <LocaleProvider>
    <div className='m-auto flex flex-col justify-center items-center md:w-1/4'>
      <Routes />
    </div>
  </LocaleProvider>
}

function Routes() {
  return (
    <Router>
      <SyncTitle />
      <ReactRoutes>
        <ReactRoute path="/login" element={<Login />} />
        <ReactRoute path="/" element={<Authenticated />}>
          <ReactRoute path="/" element={<Home />} />
          <ReactRoute path="/apps" element={<Apps />} />
        </ReactRoute>
      </ReactRoutes>
    </Router>
  )
}

function SyncTitle() {
  const location = useLocation()
  const {formatMessage} = useIntl()

  const titles = {
    "/login": `Dor-dal - ${formatMessage({id:'login'})}`,
    "/reset": `Dor-dal - ${formatMessage({id:'reset'})}`,
    "/signup": `Dor-dal - ${formatMessage({id:'signup'})}`,
    "/": `Dor-dal - ${formatMessage({id:'home'})}`,
    "/apps": `Dor-dal - ${formatMessage({id:'apps'})}`,
  }

  useEffect(() => {
    document.title = titles[location.pathname] || "Dor-dal"
  }, [location.pathname])
  return null
}

export default App
