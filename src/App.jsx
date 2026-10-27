import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Components/Home'
import Departments from './Components/Departments'
// import Department from './Components/Departments'
import About from './Components/About'
import Booking from './Components/Booking'
import Contact from './Components/Contact'
import {Routes, Route } from 'react-router-dom';
import Navbar  from './Components/Navbar'
import Footer from './Components/Footer'
import Doctors from './Components/Doctor'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/Doctors" element={<Doctors/>}/>
      <Route path="/Departments" element={<Departments/>}/>
      <Route path="/Contact" element={<Contact/>}/>
</Routes>
<Footer/>
     
    </>
  )
}

export default App
