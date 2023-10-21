import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import CategoryCard from "../Components/CategoryCard/CategoryCard";
import Review from "../Components/Review/Review";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-left" className="grid gap-9 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
                {
                    categories.map(category => <CategoryCard key={category.id} category={category} ></CategoryCard>)
                }
            </div>
            <div className="flex justify-center pb-8 mb-10">
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Sales</div>
                        <div className="stat-value text-primary">$26m</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Cars Sold</div>
                        <div className="stat-value text-secondary">203</div>
                        <div className="stat-desc">29% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="https://i.ibb.co/HBvXDxv/event.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Cars Delivered</div>
                        <div className="stat-desc text-secondary">31 Cars remaining</div>
                    </div>

                </div>
            </div>
            <div className="flex justify-center text-center mb-10">
                <h2 className=" text-2xl font-bold text-gray-700">User Reviews!</h2>
            </div>
            <div className="flex justify-center ">
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;