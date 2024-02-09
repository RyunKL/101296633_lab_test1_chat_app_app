import { useState } from 'react'
import Signup from './components/signup/Signup.jsx'
import Login from './components/login/Login.jsx'
import Home from './components/homepage/Home.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
