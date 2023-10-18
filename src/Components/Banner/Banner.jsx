

const Banner = () => {
    return (
        <div>
            <div>
                <div className="mb-10">
                    <div className="">
                        <img className="object-cover bg-cover h-[90vh] w-full opacity-60" src="https://i.ibb.co/mq4J4PR/Banner-image.jpg" alt="" />
                    </div>
                    <div className="absolute -my-[550px] w-full mb-10" >
                        <h1 className="font-bold flex justify-center mb-10 text-gray-800 text-6xl text-center">
                            Creating Memories,
                        </h1>
                        <h1 className="font-bold flex justify-center mb-20 text-black text-6xl text-center">
                            <span className="text-yellow-400">One Event at a Time!</span>
                        </h1>

                        <p className="font-bold text-center text-xl text-gray-600">  Are you ready to turn your special moments into extraordinary memories?
                            <br />
                            Look no further.
                            <br />
                            Your premier partner in social event planning is here!</p>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <p className="font-bold flex justify-center mb-10 text-gray-600 text-4xl text-center"> You think about the  <span className=" ml-4 text-yellow-400"> Event </span> </p>
                    <p className="font-bold flex justify-center mb-10 text-gray-600 text-4xl text-center"> We organize  <span className=" ml-4 text-yellow-500"> Event </span>!</p>
                    <p className="font-bold flex justify-center mb-10 text-gray-600 text-xl text-center"> A few of our<span className=" ml-3 text-cyan-500"> services </span>! </p>
                </div>

            </div>
        </div>
    );
};

export default Banner;