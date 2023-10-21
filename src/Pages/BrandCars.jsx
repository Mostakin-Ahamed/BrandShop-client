import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandCars = ({ brand }) => {

    // eslint-disable-next-line react/prop-types
    const {_id, productName, rating, price, photo ,brandName} = brand;


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
                            <Link to={`/singleCarDetail/${_id}`} params={_id}><button className="btn btn-sm btn-primary m-2">See Details</button></Link>
                            <Link to={`/update/${_id}`} params={_id}><button className="btn  btn-sm  m-2 btn-warning">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCars;