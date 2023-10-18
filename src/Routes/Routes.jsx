import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Home from "../Pages/Home.jsx";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/home',
            element:<Home></Home>,
            loader: ()=> fetch('./categories.json')
        }
      ]
    },
  ]);

  export default router;