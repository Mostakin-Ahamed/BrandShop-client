import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const formRef = useRef()

    const car = useLoaderData();
    console.log(car);

    const { _id, productName, brandName, price, rating, detail,photo } = car;


    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const productName = form.get('productName');
        const brandName = form.get('brandName');
        const price = form.get('price');
        const photo = form.get('imageURL');
        const detail = form.get('details');
        const rating = form.get('rating')
        const updatedCar = { productName, brandName, price, photo, detail, rating }
        console.log(updatedCar);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://automobile-server-mnnpfh1ck-mostakin-ahameds-projects.vercel.app/update/${_id}`, {
                    method: 'PUT',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(updatedCar)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Success',
                                'Car detail updated successfully!',
                                'success'
                            )
                            formRef.current?.reset();
                        }
                    })
            }
        })

    }


    return (
        <div>
            <h2>This is update page</h2>
            <div className="mb-48">
                <h2 className="text-3xl my-10 text-center">Update {productName}</h2>
                <form ref={formRef} onSubmit={handleUpdate} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Name</span>
                        </label>
                        <input type="text" defaultValue={productName} name="productName" placeholder="Product Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Brand</span>
                        </label>
                        <select name="brandName" defaultValue={brandName} className="select select-bordered w-full form-control" required>
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
                        <input type="text" defaultValue={photo} name="imageURL" placeholder="Image URL" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" defaultValue={price} name="price" placeholder="Price" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea name="details" defaultValue={detail} placeholder="Details" className="textarea textarea-bordered textarea-lg w-full "  ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Give Rating</span>
                        </label>
                        <input type="number" defaultValue={rating} step="0.1" name="rating" placeholder="example : 8.5" className="input input-bordered"  />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Cars</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;