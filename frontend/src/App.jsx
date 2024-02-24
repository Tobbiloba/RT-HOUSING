import React from 'react'
import Layout from './components/Layouts/user/Layout'
import Homescreen from './screen/user/home/Homescreen'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Toaster } from './~/components/ui/toaster'
import Properties from './screen/user/property/Properties'
import PropertyDetails from './screen/user/property/PropertyDetails'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminLayout from './components/Layouts/admin'
import Home from './screen/admin/home/HomeScreen'
import AdminProperties from './screen/admin/property/Properties'
// import AddProperty from './screen/admin/property/AddProperty'
import PropertyDetail from './screen/admin/property/PropertyDetail'
import AdminLoginScreen from './screen/admin/auth/LoginScreen'
import AdminRegisterScreen from './screen/admin/auth/RegisterScreen'
import NotFound from './screen/user/404/NotFound'
import Orders from './screen/admin/orders/Orders'
import Payments from './screen/admin/payment/Payments'
import AdminProfile from './screen/admin/profile/AdminProfile'
import Transactions from './screen/admin/payment/Transactions'
import AddCoupon from './screen/admin/coupon/AddCoupon'
import Profile from './screen/admin/profile/Profile'
import Coupon from './screen/admin/coupon/Coupon'
import Employees from './screen/admin/employee/Employees'
import AddEmployee from './screen/admin/employee/AddEmployee'
import Dashboard from './screen/user/profile/dashboard/Dashboard'
import UserOrders from './screen/user/profile/order/Orders'
import ChangePassword from './screen/user/profile/change password/ChangePassword'
import UpdateProfile from './screen/user/profile/update profile/UpdateProfile'
import ProfileLayout from './components/Layouts/user/ProfileLayout'
import HowItWorks from './screen/user/how it works/HowItWorks'
import UserActivation from './components/home/UserActivation'
import AdminActivation from './screen/admin/activation/Activation'
import UpdateProperty from './screen/admin/property/UpdateProperty'
import Chatbot from './components/common/chatbot/Chatbot'
import Aboutus from './screen/user/about us/Aboutus'
import Contactus from './screen/user/contact us/Contactus'
import UpdateAdminProfile from './screen/admin/profile/UpdateProfile'
import OTP from './screen/OTP'
const App = () => {
  const routes = [
    <Route
      path="/"
      element={
        <Layout>
          <Homescreen />
        </Layout>
      }
    />,
    <Route
      path="/properties"
      element={
        <Layout>
          <Properties />
        </Layout>
      }
    />,
    <Route
    path="/admin/verify/otp"
    element={
      // <Layout>
        <OTP />
      // </Layout>
    }
  />,
    <Route
      path="/about-us"
      element={
        <Layout>
          <Aboutus />
        </Layout>
      }
    />,
    <Route
      path="/contact-us"
      element={
        <Layout>
          <Contactus />
        </Layout>
      }
    />,
    <Route
      path="/how-it-works"
      element={
        <Layout>
          <HowItWorks />
        </Layout>
      }
    />,
    <Route
      path="/user/dashboard"
      element={
        <Layout>
          <ProfileLayout>
            <Dashboard />
          </ProfileLayout>
        </Layout>
      }
    />,
    <Route
      path="/user/orders"
      element={
        <Layout>
          <ProfileLayout>
            <UserOrders />
          </ProfileLayout>
        </Layout>
      }
    />,
    <Route
      path="/user/dashboard/activate/:id/:token"
      element={
        <Layout>
          <UserActivation />
        </Layout>
      }
    />,
    <Route
      path="/admin/profile/activate/:id/:token"
      element={<AdminActivation />}
    />,
    <Route
      path="/user/change-password"
      element={
        <Layout>
          <ProfileLayout>
            <ChangePassword />
          </ProfileLayout>
        </Layout>
      }
    />,
    <Route
      path="/user/update-profile"
      element={
        <Layout>
          <ProfileLayout>
            <UpdateProfile />
          </ProfileLayout>
        </Layout>
      }
    />,
    <Route
      path="/properties/property-detail/:id"
      element={
        <Layout>
          <PropertyDetails />
        </Layout>
      }
    />,
    <Route
      path="/admin/dashboard"
      element={
        <AdminLayout>
          <Home />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/properties"
      element={
        <AdminLayout>
          <AdminProperties />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/properties/create"
      element={
        <AdminLayout>
          <UpdateProperty />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/property/update/:id"
      element={
        <AdminLayout>
          <UpdateProperty />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/payments"
      element={
        <AdminLayout>
          <Payments />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/properties/detail/:id"
      element={
        <AdminLayout>
          <PropertyDetails />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/transactions"
      element={
        <AdminLayout>
          <Transactions />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/coupon/create-coupon"
      element={
        <AdminLayout>
          <AddCoupon />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/profile"
      element={
        <AdminLayout>
          <Profile />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/coupon"
      element={
        <AdminLayout>
          <Coupon />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/employees"
      element={
        <AdminLayout>
          <Employees />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/employees/add-employee"
      element={
        <AdminLayout>
          <AddEmployee />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/orders"
      element={
        <AdminLayout>
          <Orders />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/profile"
      element={
        <AdminLayout>
          <AdminProfile />
        </AdminLayout>
      }
    />,
    <Route
      path="/admin/profile/update-profile"
      element={
        <AdminLayout>
          <UpdateAdminProfile />
        </AdminLayout>
      }
    />,
    <Route path="/admin/login" element={<AdminLoginScreen />} />,
    <Route path="/admin/register" element={<AdminRegisterScreen />} />,
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />,
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
