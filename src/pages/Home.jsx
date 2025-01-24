import React from 'react'
import SimpleSlider from '../components/SimpleSlider'
import DownloadCard from '../components/DownloadCard'
import FlashSale from '../components/FlashSale'
import Categories from '../components/Categories'
import FlashSaleProducts from '../components/FlashSaleProducts'


const Home = () => {
  return (
    <div className=' bg-[#F5F5F5]'>
      <div className='flex justify-center '>
       
       <SimpleSlider />
       <DownloadCard/>


   </div>
   <div>

      <FlashSaleProducts/>

   </div>
   <div>
    <Categories/>
   </div>
    </div>
    
  )
}

export default Home