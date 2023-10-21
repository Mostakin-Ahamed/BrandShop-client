import { useContext, useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingleCarDetail = () => {

    const { user } = useContext(AuthContext);

    // params={email}
    const allCars = useLoaderData();
    const params = useParams()
    const [details, setDetails] = useState({})

    const addToCart = () => {
        const email = user.email;
        const productId=details._id;
        const productName=details.productName;
        const brandName=details.brandName;
        const price=details.price;
        const photo = details.photo;
        const rating = details.rating;
        console.log(email, productId);
        const newCart = {email, productId, productName, price,brandName, photo, rating}
        fetch('http://localhost:5000/cart',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car added to cart!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    useEffect(() => {
        const findCar = allCars.find(brand => brand._id == params._id)
        setDetails(findCar)
    }, [params._id, allCars],)

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
                        <button onClick={addToCart} className="btn btn-warning h-auto w-auto text-center border-none text-black font-medium ">Add to cart </button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleCarDetail;