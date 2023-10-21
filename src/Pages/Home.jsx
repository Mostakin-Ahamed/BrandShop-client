import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CategoryCard from "../Components/CategoryCard/CategoryCard";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-left" className="grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
                {
                    categories.map(category => <CategoryCard key={category.id} category={category} ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Home;