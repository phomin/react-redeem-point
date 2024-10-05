import Dashboard from './page/dashboard'
import Product from './page/Product'
import UseProduct from './page/UseProduct'
import History from './page/History'
import { useRoutes } from 'react-router-dom'
import { LoginCard } from './page/login'
import ProtectedRoutes from './ProtectedRoutes'
import { AuthProvider } from './AuthContext'



function App() {


  const element = useRoutes([

    {path: '/login', element: <LoginCard/>},
    {path: '/', element:<ProtectedRoutes element={<Dashboard/>}/>},
    {path: '/product', element: <ProtectedRoutes element={<Product/>}/> },
    {path: '/history', element: <ProtectedRoutes element={<History/>}/> },
    {path: '/useProduct', element:<ProtectedRoutes element={<UseProduct/>}/> }
  ])

  return element
}

export default function RootApp () {
 return (
  <AuthProvider>
  <App/>
  </AuthProvider>
 )
}
