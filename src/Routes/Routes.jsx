import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Cart from "../Pages/Cart.jsx";
import AddProducts from "../Pages/AddProducts.jsx";
import Register from "../Pages/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('./categories.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
            path:'/addProducts',
            element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>
        },{
          path:'/register',
          element:<Register></Register>,
        }
      ]
    },
  ]);

  export default router;