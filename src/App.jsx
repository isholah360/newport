import React from 'react'
import Homepage from './pages/homepage/homepage'
import {Contact, Blog, About, Resume, Portfolio} from './pages'

import { Route, Routes} from 'react-router-dom'
import Animate from './components/animate/animate'
import Navbar from './components/navbar/navbar'

function App() {


  return (
    <>
    <div className="App">
        
        <Routes>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/Resume' element={<Resume/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App;
