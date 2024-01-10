import Layout from './components/Layout'
import Homescreen from './screen/Homescreen'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Properties from './screen/Properties'
import PropertyDetails from './screen/PropertyDetails'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from './screen/admin/Layout'
import Home from './screen/admin/screens/HomeScreen'
import AdminProperties from './screen/admin/screens/Properties'
import AddProperty from './screen/admin/screens/AddProperty'
import PropertyDetail from './screen/admin/screens/PropertyDetail'
import AdminLoginScreen from './screen/admin/screens/LoginScreen'
import AdminRegisterScreen from './screen/admin/screens/RegisterScreen'
import NotFound from './screen/NotFound'
import Orders from './screen/admin/screens/Orders'
function App() {
  
  const routes = [
    <Route path="/" element={<Layout><Homescreen /></Layout>} />,
    <Route path="/properties" element={<Layout><Properties /></Layout>} />,
    <Route path="/property-detail" element={<Layout><PropertyDetails /></Layout>} />,
    <Route path="/admin" element={<AdminLayout><Home /></AdminLayout>} />,
    <Route path="/admin/properties" element={<AdminLayout><AdminProperties /></AdminLayout>} />,
    <Route path="/admin/add-property" element={<AdminLayout><AddProperty /></AdminLayout>} />,
    <Route path="/admin/property-detail/:id" element={<AdminLayout><PropertyDetail /></AdminLayout>} />,
    <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />,
    <Route path="/admin/login" element={<AdminLoginScreen />} />,
    <Route path="/admin/register" element={<AdminRegisterScreen />} />,
    <Route path="*" element={<Layout><NotFound /></Layout>} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
     <ToastContainer />
       <RouterProvider router={router} />
    </>
  )
}

export default App
