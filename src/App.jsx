import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drower from './pages/Drower/Drower'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Route, Routes, Navigate } from 'react-router-dom'


function App() {

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('stu-login');
    if (token) {
      setAuth(true)
    } else {
      setAuth(false)
    }

  }, [])

  const Auth = () => {
    return (
      <Routes>
        <Route path='*' element={<Navigate to={'/login'} />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    )
  }

  return (
    <div>
      {auth ?
        <Drower />
        :
        <Auth />
      }
    </div>
  )
}

export default App
