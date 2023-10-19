import { useRef } from "react";

const AddProducts = () => {
    const formRef = useRef()
    const handleNewProduct = e =>{
        
        e.preventDefault();
       
        const form = new FormData(e.currentTarget);
        const productName = form.get('productName');
        const bName = form.get('brandName');
        const price = form.get('price');
        const photo = form.get('imageURL');
        const detail = form.get('details');
        const rating = form.get('rating')
        console.log(productName, bName, price, photo, detail, rating);
        formRef.current?.reset();

    }

    return (
        <div className="mb-48">
            <h2  className="text-3xl my-10 text-center">Add a new car!</h2>
                <form  ref={formRef} onSubmit={handleNewProduct} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea  name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full max-w-xs" required ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Give Rating</span>
                        </label>
                        <input type="number" step="0.1" name="rating" placeholder="example : 8.5" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Product</button>
                    </div>
                </form>
        </div>
    );
};

export default AddProducts;