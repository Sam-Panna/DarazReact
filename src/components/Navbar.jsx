import React from 'react'
// import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
  return (
    <div className='border-2 bg-[#F85606] h-[25px] sticky'>
        <nav  className='text-[12px] text-left text-white'>
            <div>
                <ul className='  flex gap-10  ml-[45%] '>
                    <li>SAVE MORE ON APP</li>
                    <li>BECOME A SELLER</li>
                    <li>HELP & SUPPORT</li>
                    <li>LOGIN</li>
                    <li>SIGN UP</li>
                    <li>भाषा परिवर्तन</li>
                </ul>
            </div>
            <div className='bg-[#F85606] h-[97px] flex items-center gap-7 '  >
               <div className='size-32 flex items-center '>
                <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="" className='ml-20'/>
               </div>
               <div className='flex gap-4 w-[60rem]  justify-center items-center '>
               <div className='w-[42rem] h-[2.7rem] flex relative '>
                <input type="search"  className='pl-5 w-[100%] h-[100%] text-black ' placeholder='Search in Daraz'/>
               <div className='absolute right-0 bg-[#FFE1D2] h-[100%] w-10 flex items-center justify-center'><IoSearch className='text-[#FA7736] size-6 '/></div>
               </div>

               <div>
               <FiShoppingCart className='size-7 mt-2'/>
               </div>
               </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar