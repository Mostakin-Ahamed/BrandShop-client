import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Cart from "../Pages/Cart.jsx";
import AddProducts from "../Pages/AddProducts.jsx";
import Register from "../Pages/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Update from "../Pages/Update.jsx";
import BrandDetail from "../Pages/BrandDetail.jsx";
import BrandCars from "../Pages/BrandCars.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import SingleCarDetail from "../Pages/SingleCarDetail.jsx";
// import SingleCarDetail from "../Pages/SingleCarDetail.jsx";



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
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/update',
          element:<Update></Update>,
        },
        
        {
          path:'/brandDetail',
          element:<BrandDetail></BrandDetail>,
          loader: ()=> fetch('http://localhost:5000/brandDetail')
        },
        {
          path:'/BrandCars',
          element:<BrandCars></BrandCars>
        },
        {
          path:'/brandDetail/Audi',
          element:<BrandDetail></BrandDetail>,
          loader: ()=> fetch('http://localhost:5000/brandDetail/Audi')
        },
        {
          path:'/brandDetail/BMW',
          element:<BrandDetail></BrandDetail>,
          loader: ()=> fetch('http://localhost:5000/brandDetail/BMW')
        },
        {
          path:'/brandDetail/Ferrari',
          element:<BrandDetail></BrandDetail>,
          loader: ()=> fetch('http://localhost:5000/brandDetail/Ferrari')
        },
        {
          path:'/brandDetail/Rolls Royce',
          element:<BrandDetail></BrandDetail>,
          loader: ()=> fetch('http://localhost:5000/brandDetail/Rolls Royce')
        },
        {
          path:'/brandDetail/Lamborghini',
          element:<BrandDetail></BrandDetail>,
          errorElement:<ErrorPage></ErrorPage>,
          loader: ()=> fetch('http://localhost:5000/brandDetail/Lamborghini')
        },
        {
          path:'/brandDetail/Mercedes-Benz',
          element:<BrandDetail></BrandDetail>,
          loader: ()=> fetch('http://localhost:5000/brandDetail/Mercedes-Benz')
        },
        {
          path:'/singleCarDetail/:_id',
          element:<SingleCarDetail></SingleCarDetail>,
          loader:()=>fetch('http://localhost:5000/brandDetail')
        }
        // ,
        // {
        //   path:'/brandDetail/Audi/:_id',
        //   element:<SingleCarDetail></SingleCarDetail>,
        //   loader: ()=> fetch('http://localhost:5000/brandDetail/Audi/:_id')
        // },
        // {
        //   path:'/brandDetail/Mercedes-Benz/:_id',
        //   element:<SingleCarDetail></SingleCarDetail>,
        //   loader: ()=> fetch('http://localhost:5000/brandDetail/Mercedes-Benz/:_id')
        // },
        // {
        //   path:'/brandDetail/Rolls Royce/:_id',
        //   element:<SingleCarDetail></SingleCarDetail>,
        //   loader: ()=> fetch('http://localhost:5000/brandDetail/Rolls Royce/:_id')
        // },
        // {
        //   path:'/brandDetail/Ferrari/:_id',
        //   element:<SingleCarDetail></SingleCarDetail>,
        //   loader: ()=> fetch('http://localhost:5000/brandDetail/Ferrari/:_id')
        // },
        // {
        //   path:'/brandDetail/Lamborghini/:_id',
        //   element:<SingleCarDetail></SingleCarDetail>,
        //   loader: ()=> fetch('http://localhost:5000/brandDetail/Lamborghini/:_id')
        // },
        // {
        //   path:'/brandDetail/BMW/:_id',
        //   element:<SingleCarDetail></SingleCarDetail>,
        //   loader: ()=> fetch('http://localhost:5000/brandDetail/BMW/:_id')
        // }


      ]
    },
  ]);

  export default router;