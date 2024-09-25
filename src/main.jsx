import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import DrawerBasic from './components/Menu.jsx'
import { useLocation } from 'react-router-dom';


const pathname = window.location.pathname
// console.log(pathname)


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  {pathname != "/login" && (<Navbar/>)}
  {pathname != "/login" && (<DrawerBasic/>)}
  {pathname == "/login" && (<></>) }
  
  
    <App />
    </BrowserRouter>
  
)
