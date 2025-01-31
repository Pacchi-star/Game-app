import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import ClothPhotos from './Components/ClothPhotos'




const Dashboard = () => {
  return(
    <div className="">
        <Home/>
        <About/>
        <Work/>
        {/* <ProductDetails/> */}
        <Testimonials/>
        <ClothPhotos />
        <Contact/>
        <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard />,
    children:[
      {
        path:'/',
        element:<Home />
      }
     
    ]
  },
  {
    path:'/about',
    element:<About />
  },
  {
    path:'/productDetails',
    element:<ProductDetails />
  },
  {
    path:'/Contact',
    element:<Contact />
  }
])




function App() {

  return (
    <>
      <div className="App">
      
        <RouterProvider router={router} />
        {/* <Home/>
        <About/>
        <Work/>
        <ProductDetaisl/>
        <Testimonials/>
        <Contact/>
        <Footer/> */}
      </div>
    </>
  )
}

export default App
