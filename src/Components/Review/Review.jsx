const Review = () => {
    return (
        <div>
            <div className="flex mb-5 text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/TvCmFgs/art-exhibition-3.jpg" />
                    </div>
                </div>
                <div className=" flex text-center justify-center items-center">
                    <h3 className="text-xl text-gray-500 pl-6">Great service. 10/10 service! Would highly recommend!</h3>
                </div>
            </div>
            <div className="flex mb-5">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/Tr12f7D/retirement-1.webp" />
                    </div>
                </div>
                <div className=" flex text-center justify-center items-center">
                    <h3 className="text-xl text-gray-500 pl-6">Great service. 10/10 service! Would highly recommend!</h3>
                </div>
            </div>
            <div className="flex mb-5">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://i.ibb.co/W2wxg24/engagement-1.jpg" />
                    </div>
                </div>
                <div className=" flex text-center  justify-center items-center">
                    <h3 className="text-xl text-gray-500 pl-6">Great service. 10/10 service! Would highly recommend!</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;