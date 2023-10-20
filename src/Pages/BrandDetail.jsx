// import { useEffect } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCars from "./BrandCars";
import ErrorPage from "./ErrorPage";
// import SingleBrandDetail from "./SingleBrandDetail";

const BrandDetail = () => {
    const brands = useLoaderData();
    console.log(brands);

    // const [details, setDetails]=useState([])
    // const params= useParams()

    // useEffect(()=>{
    //     const findCar = brands.find(brand =>brand.brandName != params.brandName)
    //     setDetails(findCar)
    // },[params.brandName , brands],)
    // console.log(details);

    return (
        <div>
            <div>
                <div className="carousel max-h-[90vh] w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/r4tPNFJ/ferrari-3.jpg" className="w-full object-cover" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/jhzXW3C/rollsroyce-ghost.jpg" className="w-full object-cover" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/hHqzHPH/mercedes-3.jpg" className="w-full object-cover" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://i.ibb.co/PzN5sK6/BMW-4-series.jpg" className="w-full object-cover" />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src="https://i.ibb.co/BG9dQny/Audi-rs3.jpg" className="w-full object-cover" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                </div>
            </div>
            <div className="max-w-full grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10">
                {
                    brands.length>0 ? brands.map((brand) => <BrandCars key={brand._id} brand={brand}></BrandCars>) : <ErrorPage></ErrorPage>
                }
            </div>
        </div>
    );
};

export default BrandDetail;