

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category }) => {

    // eslint-disable-next-line react/prop-types
    const { title, thumbnail_image } = category;

    return (
        <div data-aos="fade-left" className="flex justify-center">
            <div className="card w-96 bg-base-100 shadow-xl h-full ">
                <div className="h-80">
                    {/* <figure><img className=" h-auto border" src={thumbnail_image} alt="Shoes" /></figure> */}
                    <img className="object-fit " src={thumbnail_image} alt="Shoes" />
                </div>
                <div className="card-body">
                        <h2 className="text-center font-bold text-xl">{title}</h2>
                        <div className="card-actions justify-center mt-6">
                            {/* <p className="font-bold justify-center mb-10 text-gray-600 text-xl text-start">${price}</p> */}
                            <button className="btn btn-ghost w-full">See More</button>
                        </div>
                    </div>
                {/* <div className="">
                    <h2 className="text-extrabold text-center">{title}</h2>
                </div>
                <div className="card-actions justify-center mt-6">
                    <button className="btn btn-ghost">See More</button>
                </div> */}
            </div>
        </div>
    );
};

export default CategoryCard;