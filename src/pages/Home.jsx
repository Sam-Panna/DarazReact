import React from 'react'
import SimpleSlider from '../components/SimpleSlider'
import Navbar from '../components/Navbar'
import DownloadCard from '../components/DownloadCard'
import FlashSale from '../components/FlashSale'


const Home = () => {
  return (
    <div>
      <div className='flex justify-center'>
       
       <SimpleSlider />
       <DownloadCard/>


   </div>
       <FlashSale/>
    </div>
    
  )
}

export default Home