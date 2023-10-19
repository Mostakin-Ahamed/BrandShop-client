import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth";

const Register = () => {

    
    const { createUser, googleRegister } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photoURL');
        
        if(password.length<6){
            toast.error("Password must be 6 characters or longer!");
            // alert("Password must be 6 characters or longer!")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("Your password should have at least one uppercase character")
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("User Created Successfully")
                updateProfile(result.user, {
                    displayName: name,
                    photoURL:photo
                })
                .then(()=>console.log("profile updated"))
                .catch()
                
                
                navigate(location?.state? location.state : '/')
            })
            
            .catch(error => {

                toast.error(error.message)
            })
    }
    const handleGoogleRegister = e =>{
        e.preventDefault();
        googleRegister();
        navigate(location?.state? location.state : '/')

    }

    return (
        <div className="mb-48">
            <div >
                <h2 className="text-3xl my-10 text-center">Please Register!</h2>
                <form onSubmit={handleRegister} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register with email</button>
                    </div>
                </form>
                <div className="flex justify-center w-full mt-6">
                    <button onClick={handleGoogleRegister} className="btn btn-primary">Register with google <FcGoogle></FcGoogle></button>
                </div>
                <p className="text-center mt-5">Already have an account? <Link className="text-blue-600" to="/login">Login Here! </Link></p>
            </div>
        </div>
    );
};

export default Register;