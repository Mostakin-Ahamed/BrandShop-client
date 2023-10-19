import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink className="mx-3" to='/'>Home</NavLink></li>
        <li><NavLink className="mx-3" to='/login'>Login</NavLink></li>
        

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mx-4">
                            {
                                navLinks
                            }
                            {
                                user && <>
                                    <li><NavLink className="mx-3" to='/cart'>My Cart</NavLink></li>
                                    <li><NavLink className="mx-3" to='/addProducts'>Add Products</NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost normal-case text-xl">Automobile Shop</a></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {
                            navLinks
                        }
                         {
                                user && <>
                                    <li><NavLink className="mx-3" to='/cart'>My Cart</NavLink></li>
                                    <li><NavLink className="mx-3" to='/addProducts'>Add Products</NavLink></li>
                                </>
                            }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        // <h3 className="text-bold font-2xl mr-5">Username</h3>
                        user && <h3 className="text-bold font-2xl mr-5">{user.displayName}</h3>
                    }
                    {
                        user && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                    }
                    {
                        user ? <button onClick={handleSignOut} className="btn"> Sign Out</button> : <Link to='/login'><a className="btn">Login</a></Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;