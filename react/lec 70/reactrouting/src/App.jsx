import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/home';
import About from './components/About';
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Courses from './components/courses';
import Mocktest from './components/Mocktest';
import Reports from './components/Reports';
import Error from './components/Error';
const router =createBrowserRouter(
  [
    {path:"/",
    element:
    <div>
      <Navbar/>
      <Home/>
    </div>
    },
    {
      path:"/about",
      element:<div>
      <Navbar/>
      <About/>
    </div>
    },{
      path:"/dashboard",
      element:<div>
      <Navbar/>
      <Dashboard/>
    </div>
    ,children:[
      {path:'courses'
        ,element: <Courses />
      },{path:'mocktests'
        ,element: <Mocktest/>
      },{path:'reports'
          ,element: <Reports />
        }
    ]
    },
    
    {
      path:"/student/:id",
      element:<div>
        <Navbar/>
        <ParamComp/>
        
      </div>
    },{
      path:'*',
      element: <Error />
    }
      
    ]
)
function App() {
  return (
  <div>
    <div>
      
    </div>
    <RouterProvider router={router} />
    </div>
   
   
  )
}

export default App
