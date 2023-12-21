import Homescreen from './screen/Homescreen'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'


function App() {
  
  const routes = [
    <Route path="/" element={<Homescreen />} />,
  ]

  const router = createBrowserRouter(createRoutesFromElements(routes))
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
