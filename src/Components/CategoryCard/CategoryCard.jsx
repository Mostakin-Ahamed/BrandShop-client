

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category }) => {

    // eslint-disable-next-line react/prop-types
    const { title, thumbnail_image } = category;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="object-cover" src={thumbnail_image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-ghost">See More</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;