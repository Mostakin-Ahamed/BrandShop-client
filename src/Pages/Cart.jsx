import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import CartCard from "../Components/CartCard";

const Cart = () => {

    const {user}=useContext(AuthContext);
    console.log(user.email);
    const myCart = useLoaderData();
    console.log(myCart);

    return (        
            <div>
                {
                    myCart.map((cart)=><CartCard key={cart._id} cart={cart}></CartCard>)
                }
            </div>
    );
};

export default Cart;