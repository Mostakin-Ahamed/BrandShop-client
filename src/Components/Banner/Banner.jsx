

const Banner = () => {
    return (
        <div>
            <div>
                <div className="mb-10">
                    <div>
                        <img className="object-cover bg-cover h-[90vh] w-full opacity-60" src="https://i.ibb.co/mq4J4PR/Banner-image.jpg" alt="" />
                    </div>
                    <div className="absolute -my-[550px] w-full mb-10" >
                        <h1 className="font-bold flex justify-center mb-10 text-gray-800 text-6xl text-center">
                            Looking for your next car?
                        </h1>
                        <h1 className="font-bold flex justify-center mb-20 text-black text-6xl text-center">
                            <span className="text-orange-500">We have the right car for you!</span>
                        </h1>

                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <p className="font-bold flex justify-center mb-10 text-gray-600 text-4xl text-center"> See our cars down bellow </p>
                
                </div>

            </div>
        </div>
    );
};

export default Banner;