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


function App() {
  
  const routes = [
    <Route path="/" element={<Layout><Homescreen /></Layout>} />,
    <Route path="/properties" element={<Layout><Properties /></Layout>} />,
    <Route path="/property-detail" element={<Layout><PropertyDetails /></Layout>} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
