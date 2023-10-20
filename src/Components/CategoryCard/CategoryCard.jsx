import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category }) => {

    // eslint-disable-next-line react/prop-types
    const { title, thumbnail_image,brandName} = category;

    return (
        <div>
            <Link to={`/brandDetail/${brandName}`}>
                <div data-aos="fade-left" className="flex justify-center">
                    <div className="card w-96 bg-base-100 shadow-xl h-full ">
                        <div className="h-80">
                            <img className="object-fit " src={thumbnail_image} alt="Shoes" />
                        </div>
                        <div className="card-body">
                            <h2 className="text-center font-bold text-xl">{title}</h2>
                            <div className="card-actions justify-center mt-6">
                                <button className="btn btn-ghost w-full">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;