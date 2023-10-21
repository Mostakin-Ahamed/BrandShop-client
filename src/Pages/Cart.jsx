import {  useLoaderData } from "react-router-dom";
import CartCard from "../Components/CartCard";

const Cart = () => {

    
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