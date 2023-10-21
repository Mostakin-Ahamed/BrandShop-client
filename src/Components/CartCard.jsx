import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const CartCard = ({ cart }) => {

    const { user } = useContext(AuthContext);

    // eslint-disable-next-line react/prop-types
    const {_id, productName, rating, price, photo, brandName, email } = cart;

    const handleDelete = _id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`http://localhost:5000/cart/${_id}`,{
                method:'DELETE'
              })
              .then(res =>res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your cart item has been deleted.',
                        'success'
                    )
                }
              })
            }
          })

    }

    return (
        <div>
            {
                email == user.email && <div className="flex items-center justify-center w-full">
                    <div className="hero w-full">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className="ml-5 w-full">
                                <h1 className="text-2xl my-2 font-bold">Brand Name:{brandName}</h1>
                                <h1 className="text-4xl my-2 font-bold">{productName}</h1>
                                <p className="text-2xl my-2">Price: ${price}</p>
                                <p className="text-2xl my-2"> Rating: {rating} /10</p>
                                <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CartCard;