import Layout from './components/Layout'
import Homescreen from './screen/Homescreen'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


function App() {
  
  const routes = [
    <Route path="/" element={<Layout><Homescreen /></Layout>} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
