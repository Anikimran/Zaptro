import { Link,NavLink } from "react-router-dom"
import { MapPin } from 'lucide-react';
import { FaCaretDown } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";

import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/clerk-react";
const Navbar = ({location}) => {
   
  return (
    <div className="bg-white shadow-2xl  sticky top-0 z-50 ">
  
     <div className="max-w-6xl mx-auto flex justify-between items-center">
        {          /* Logo */}
        <div className="flex items-center gap-7 ">
            <Link to="/" className="text-2xl font-bold text-gray-800  "><h1 className="font-bold text-3xl"> <span className="text-red-500 font-serif">Z</span>aptro</h1></Link>
            <div className="flex gap-1 cursor-pointer text-gray-500 items-center">
             <MapPin  className="text-red-500"/>
                <span className="font-semibold">{location? <div className="mt-2">
                    <p>{location.city}</p>
                    <p>{location.country}</p>
                    <p>{location.state}</p>
                 
                </div>:<div> Add Address</div>}</span>
                <FaCaretDown className="text-red-500" />    
            </div>

        </div>
        
        


     </div>
        <nav className="flex items-center gap-7 ">
            <ul className="flex gap-7 text-gray-600 items-center text-xl font-semibold space-x-4 ml-170 mb-5 ">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-500 font-semibold transition-all duration-500 " : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-500 font-semibold transition-all duration-500 " : "")}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className={({ isActive }) => (isActive ? "text-red-500 font-semibold transition-all duration-500" : "")}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red-500 font-semibold  transition-all duration-500" : "")}>Contact</NavLink>
                </li>
               
            </ul>
            <Link to="/card" className="relative ml-4 mb-5"> 
                <IoCardOutline className="w-7 h-7 bg-gray-800" />
                <span className="bg-red-500 px-2 rounded-full top-[-10px] left-4 text-white absolute ">0</span>
            </Link>
            <div className="ml-4 mb-5">
                  <SignedOut >
                  <SignInButton  className= "text-white bg-red-500 p-1  rounded-md cursor-pointer hover:bg-red-700 "  />
                  </SignedOut>
             <SignedIn>
               
               <UserButton  /> 
            </SignedIn>
            </div>
               
         

        </nav>


    </div>
  )
}

export default Navbar