import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";



const MainLayout = () => {

    const [theme, setTheme]=useState("light")
    useEffect(()=>{
        if (theme === "dark"){
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[theme])

    const handleThemeSwitch = ()=>{
        setTheme(theme ==="dark"? "light":"dark")
    }
    return (
        <div className="dark:bg-black">
            
            <Navbar></Navbar>
            <div className="flex justify-center items-center mb-4 mt-4">
                <button onClick={handleThemeSwitch} className="btn  btn-sm bg-black text-white">Theme: {theme}</button>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;