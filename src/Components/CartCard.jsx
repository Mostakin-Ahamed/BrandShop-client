import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CartCard = ({cart}) => {
    // eslint-disable-next-line react/prop-types
    const { productName, rating, price, photo ,brandName} = cart;
    return (
        <div>
            <div className="flex items-center justify-center w-full">
                <div className="hero w-full">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="ml-5 w-full">
                            <h1 className="text-2xl my-2 font-bold">Brand Name:{brandName}</h1>
                            <h1 className="text-4xl my-2 font-bold">{productName}</h1>
                            <p className="text-2xl my-2">Price: ${price}</p>
                            <p className="text-2xl my-2"> Rating: {rating} /10</p>
                            {/* <p className="py-6">{detail.slice(0,60)}</p> */}
                            <Link to={`/singleCarDetail/`} ><button className="btn btn-primary">Delete</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;