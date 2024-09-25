import Dashboard from './page/dashboard'
import Product from './page/Product'
import UseProduct from './page/UseProduct'
import History from './page/History'
import { useRoutes } from 'react-router-dom'
import { LoginCard } from './page/login'



function App() {
  const element = useRoutes([
    {path: '/', element: <Dashboard/>},
    {path: '/login', element: <LoginCard/>},
    {path: '/product', element: <Product/>},
    {path: '/history', element: <History/>},
    {path: '/useProduct', element: <UseProduct/>}
  ])

  return element
}

export default App
