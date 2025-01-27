import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashSale from './components/FlashSale';
import FlashSaleProducts from './components/FlashSaleProducts';

const App = () => {
  return (
    <div>
      <div>
      <Navbar />
      </div>
     
      <div>

      <Home/>
      
      </div>
      <section className=''>
        <Footer/>
      </section>
    </div>
    
  )
}

export default App