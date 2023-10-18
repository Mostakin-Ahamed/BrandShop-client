import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CategoryCard from "../Components/CategoryCard/CategoryCard";


const Home = () => {

    const categories= useLoaderData();

    return (
        <div>
            <Banner></Banner>

            {/* <div className=" mb-11 max-w-[1700px] mt-10 mx-auto justify-center flex">
               
            </div> */}
            <div  className="grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                       categories.map(category => <CategoryCard key={category.id} category={category} ></CategoryCard>)
                    }
                </div>
        </div>
    );
};

export default Home;