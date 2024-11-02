import React from 'react'
import HomePage from './HomePage'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import LoginPage from './LoginPage'



const App = () => {
  return (
      <Router>
        <Routes>
            <Route path="/home" element={<HomePage />} /> 
            <Route path="/login" element={<LoginPage />} /> 
        </Routes>
      </Router>
  )
}

export default App
