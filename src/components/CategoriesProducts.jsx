import React from 'react'
import Categories from './Categories'
import img1 from '../Images/Categoriesimg/image1.png'
import img2 from '../Images/Categoriesimg/image2.png'
import img3 from '../Images/Categoriesimg/image3.png'
import img4 from '../Images/Categoriesimg/image4.png'
import img5 from '../Images/Categoriesimg/image5.png'
import img6 from '../Images/Categoriesimg/image6.png'
import img7 from '../Images/Categoriesimg/image7.png'
import img8 from '../Images/Categoriesimg/image8.png'
import img9 from '../Images/Categoriesimg/image9.png'
import img10 from '../Images/Categoriesimg/image10.png'
import img11 from '../Images/Categoriesimg/image11.png'
import img12 from '../Images/Categoriesimg/image12.png'
import img13 from '../Images/Categoriesimg/image13.png'
import img14 from '../Images/Categoriesimg/image14.png'
import img15 from '../Images/Categoriesimg/image15.png'
import img16 from '../Images/Categoriesimg/image16.png'


const CategoriesProducts = () => {
    const data = [
        {
            image : img1,
            title: "Switches",
        },
        {
            image : img2,
            title: "Airport Routers",
        },
        {
            image : img3,
            title: "Pregnancy Pillows",
        },
        {
            image : img4,
            title: "Speaker Stands",
        },
        {
            image : img5,
            title: "Cleaning Products",
        },
        {
            image : img6,
            title: "Dupattas Stoles & Shawls",
        },
        {
            image : img7,
            title: "Infants(0-6 months)",
        },
        {
            image : img8,
            title: "Nepali eBooks",
        },
        {
            image : img9,
            title: "Polishers",
        },
        {
            image : img10,
            title: "Thermal & Shapewear",
        },
        {
            image : img11,
            title: "Bracelets",
        },
        {
            image : img12,
            title: "Rice",
        },
        {
            image : img13,
            title: "Hall Stands & Shelving",
        },
        {
            image : img14,
            title: "Shower Caddies & Hangers",
        },
        {
            image : img15,
            title: "Bathroom Lighting",
        },
        {
            image : img16,
            title: "Coffee Grinders",
        },

    ]
  return (
    <div className='w-[1188px] h-[359px]' >
     <div className='w-[1188px] h-[38px] text-[#424242] text-[22px]'>Categories</div>
     <div className='w-[1188px] h-[297px] flex flex-wrap bg-[#fff]'>
           {
            data.map((item, index)=>{
                return(
                    <Categories img = {item.image} title = {item.title} />
                )

            })
           }
     </div>

    </div>
  )
}

export default CategoriesProducts