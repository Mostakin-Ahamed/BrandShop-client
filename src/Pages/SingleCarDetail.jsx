import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCarDetail = () => {

    const allCars = useLoaderData();
    console.log(allCars);
    const params = useParams()
    console.log(params._id);

    const [details, setDetails] = useState({})

    useEffect(() => {
        const findCar = allCars.find(brand => brand._id == params._id)
        setDetails(findCar)
    }, [params._id, allCars],)
    console.log(details.productName);

    return (
        <div >
            <div>
                <div className="flex justify-center lg:w-auto lg:h-auto md:w-auto md:auto w-auto h-auto  mb-10">
                    <div className="card card-compact md:w-auto md:h-auto lg:w-[1320px]  lg:h-[680px] bg-base-100 ">
                        <figure><img className="" src={details.photo} alt="Shoes" /></figure>
                        <div className="card-body w-auto h-auto md:w-auto md:h-auto lg:h-auto lg:w-auto">
                            <div className="card-actions lg:justify-start md:justify-center justify-center w-auto h-auto lg:w-[1320px] lg:-mt-36 lg:-mx-4 relative bg-[#0B0B0B80] lg:p-10">
                                <button className="btn h-auto w-auto text-center border-none text-black font-medium ">Price: $ {details.price}</button>
                            </div>

                        </div>
                        <h2 className="card-title mb-5">Brand Name: {details.brandName}</h2>
                        <h2 className="card-title mb-5">Name: {details.productName}</h2>
                        <h2 className="card-title">Rating: {details.rating}/10</h2>
                        <p className="mb-5">{details.detail}</p>
                        <button className="btn h-auto w-auto text-center border-none text-black font-medium ">Add to cart </button>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCarDetail;