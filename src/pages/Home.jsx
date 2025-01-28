import React from 'react'
import SimpleSlider from '../components/SimpleSlider'
import DownloadCard from '../components/DownloadCard'
import FlashSale from '../components/FlashSale'
import CategoriesProducts from '../components/CategoriesProducts'
import FlashSaleProducts from '../components/FlashSaleProducts'
import JustForYouProducts from '../components/JustForYouProducts'


const Home = () => {
  return (
    <div className=' bg-[#F5F5F5]'>
      <div className='flex justify-center '>
       
       <SimpleSlider />
       <DownloadCard/>


   </div>
   <div className='flex flex-col items-center'>

      <FlashSaleProducts/>
    <CategoriesProducts/>
   </div>
   <div className='flex flex-col items-center'>
    <JustForYouProducts/>

   </div>
    </div>
    
  )
}

export default Home