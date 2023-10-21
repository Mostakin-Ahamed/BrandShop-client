import {  useRef } from "react";
import Swal from 'sweetalert2'

const AddProducts = () => {
   
    const formRef = useRef()
    const handleNewProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productName = form.get('productName');
        const brandName = form.get('brandName');
        const price = form.get('price');
        const photo = form.get('imageURL');
        const detail = form.get('details');
        const rating = form.get('rating')
        const newCar = { productName, brandName, price, photo, detail, rating}
        console.log(newCar);
        formRef.current?.reset();

        fetch('http://localhost:5000/addProducts',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'New car added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div className="mb-48">
            <h2 className="text-3xl my-10 text-center">Add a new car!</h2>
            <form ref={formRef} onSubmit={handleNewProduct} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <select name="brandName" className="select select-bordered w-full form-control" required>
                        <option disabled selected>Select Brand</option>
                        <option>Audi</option>
                        <option>BMW</option>
                        <option>Ferrari</option>
                        <option>Lamborghini</option>
                        <option>Mercedes-Benz</option>
                        <option>Rolls Royce</option>
                    </select>
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
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
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