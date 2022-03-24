import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './pages/App'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Hello } from './pages/Hello'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/hello' element={<Hello/>}/>
            <Route path='*' element={<App/>}/>
        </Routes>
      </BrowserRouter>,
  document.getElementById('root')
)
