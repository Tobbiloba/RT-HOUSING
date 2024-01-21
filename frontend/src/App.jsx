import React from 'react'
import Layout from './components/Layout'
import Homescreen from './screen/Homescreen'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Toaster } from './~/components/ui/toaster'
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
import Payments from './screen/admin/screens/Payments'
import AdminProfile from './screen/admin/screens/AdminProfile'
import Transactions from './screen/admin/screens/Transactions'
import AddCoupon from './screen/admin/screens/AddCoupon'
import Profile from './screen/admin/screens/Profile'
import Coupon from './screen/admin/screens/Coupon'
import Employees from './screen/admin/screens/Employees'
import AddEmployee from './screen/admin/screens/AddEmployee'
import Dashboard from './screen/profile/Dashboard'
import UserOrders from './screen/profile/Orders'
import ChangePassword from './screen/profile/ChangePassword'
import UpdateProfile from './screen/profile/UpdateProfile'
import ProfileLayout from './components/userLayout/ProfileLayout'
import HowItWorks from './screen/HowItWorks'
function App() {
  
  const routes = [
    <Route path="/" element={<Layout><Homescreen /></Layout>} />,
    <Route path="/properties" element={<Layout><Properties /></Layout>} />,
    <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />,
    <Route path="/user/dashboard" element={<Layout><ProfileLayout><Dashboard /></ProfileLayout></Layout>} />,
    <Route path="/user/orders" element={<Layout><ProfileLayout><UserOrders /></ProfileLayout></Layout>} />,
    <Route path="/user/change-password" element={<Layout><ProfileLayout><ChangePassword /></ProfileLayout></Layout>} />,
    <Route path="/user/update-profile" element={<Layout><ProfileLayout><UpdateProfile /></ProfileLayout></Layout>} />,
    <Route path="/property-detail/:id" element={<Layout><PropertyDetails /></Layout>} />,
    <Route path="/admin/dashboard" element={<AdminLayout><Home /></AdminLayout>} />,
    <Route path="/admin/properties" element={<AdminLayout><AdminProperties /></AdminLayout>} />,
    <Route path="/admin/properties/create" element={<AdminLayout><AddProperty /></AdminLayout>} />,
    <Route path="/admin/payments" element={<AdminLayout><Payments /></AdminLayout>} />,
    <Route path="/admin/property-detail/:id" element={<AdminLayout><PropertyDetail /></AdminLayout>} />,
    <Route path="/admin/transactions" element={<AdminLayout><Transactions /></AdminLayout>} />,
    <Route path="/admin/coupon/create-coupon" element={<AdminLayout><AddCoupon /></AdminLayout>} />,
    <Route path="/admin/profile" element={<AdminLayout><Profile /></AdminLayout>} />,
    <Route path="/admin/coupon" element={<AdminLayout><Coupon /></AdminLayout>} />,
    <Route path="/admin/employees" element={<AdminLayout><Employees /></AdminLayout>} />,
    <Route path="/admin/employees/add-employee" element={<AdminLayout><AddEmployee /></AdminLayout>} />,
    <Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />,
    <Route path="/admin/profile" element={<AdminLayout><AdminProfile /></AdminLayout>} />,
    <Route path="/admin/login" element={<AdminLoginScreen />} />,
    <Route path="/admin/register" element={<AdminRegisterScreen />} />,
    <Route path="*" element={<Layout><NotFound /></Layout>} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
     <ToastContainer />
     <Toaster />
       <RouterProvider router={router} />
    </>
  )
}

export default App
