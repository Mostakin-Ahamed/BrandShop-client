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
import ErrorPage from "../Components/ErrorPages/ErrorPage.jsx";
import SingleCarDetail from "../Pages/SingleCarDetail.jsx";
// import SingleCarDetail from "../Pages/SingleCarDetail.jsx";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('categories.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/cart',
          element:<PrivateRoute><Cart></Cart></PrivateRoute>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/cart')
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
          path:'/update/:id',
          element:<PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params})=>fetch(`https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/update/${params.id}`)
        },
        
        {
          path:'/brandDetail',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute> ,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail')
        },
        {
          path:'/BrandCars',
          element:<PrivateRoute><BrandCars></BrandCars></PrivateRoute> 
        },
        {
          path:'/brandDetail/Audi',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail/Audi')
        },
        {
          path:'/brandDetail/BMW',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail/BMW')
        },
        {
          path:'/brandDetail/Ferrari',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail/Ferrari')
        },
        {
          path:'/brandDetail/Rolls Royce',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail/Rolls Royce')
        },
        {
          path:'/brandDetail/Lamborghini',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute>,
          errorElement:<ErrorPage></ErrorPage>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail/Lamborghini')
        },
        {
          path:'/brandDetail/Mercedes-Benz',
          element:<PrivateRoute><BrandDetail></BrandDetail></PrivateRoute>,
          loader: ()=> fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail/Mercedes-Benz')
        },
        {
          path:'/singleCarDetail/:_id',
          element:<PrivateRoute><SingleCarDetail></SingleCarDetail></PrivateRoute>,
          loader:()=>fetch('https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/brandDetail')
        }
        
      ]
    },
  ]);

  export default router;