import React from 'react'
import img1 from "../Images/FSimage1.png"
import img2 from "../Images/FSimage2.png"
import img3 from "../Images/FSimage3.png"
import img4 from "../Images/FSimage4.png"
import img5 from "../Images/FSimage5.png"
import img6 from "../Images/FSimage6.png"
import FlashSale from './FlashSale'


const FlashSaleProducts = () => {

    const data = [
        {
          image: img1,
          title: "Vintage T9 Electric Hair Clipper Plastic Body Professional Hair Trimmer For Men",
          price: 599,
          discount: 45,


        },
        {
            image: img2,
            title:"Free Size 3 Pairs All Time All Season Super Babaal Socks For Men And Boys (Best Gift For Brothers / Best Gift For Boyfriend / Best Gift For Husband) - 3 Different Colors",
            price: 155,
            discount : 48,

        },
        {
            image: img3,
            title:"Free Size 3 Pairs All Time All Season Super Babaal Socks For Men And Boys (Best Gift For Brothers / Best Gift For Boyfriend / Best Gift For Husband) - 3 Different Colors",
            price: 155,
            discount : 48,

        },
        {
            image: img4,
            title:"Free Size 3 Pairs All Time All Season Super Babaal Socks For Men And Boys (Best Gift For Brothers / Best Gift For Boyfriend / Best Gift For Husband) - 3 Different Colors",
            price: 155,
            discount : 48,

        },
        {
            image: img5,
            title:"Free Size 3 Pairs All Time All Season Super Babaal Socks For Men And Boys (Best Gift For Brothers / Best Gift For Boyfriend / Best Gift For Husband) - 3 Different Colors",
            price: 155,
            discount : 48,
            
        },
        {
            image: img6,
            title:"Free Size 3 Pairs All Time All Season Super Babaal Socks For Men And Boys (Best Gift For Brothers / Best Gift For Boyfriend / Best Gift For Husband) - 3 Different Colors",
            price: 155,
            discount : 48,

        },
    ]
    
  return (
    
    <div className=' h-[437px] w-[1188px]'>
      <div className='w-[1188px] h-[38px] '>
        <h1 className='text-[22px]  text-[#424242]'>Flash Sale</h1>


      </div>

     <div className='w-[1188px] h-[375px]  bg-[#FFFFFF]'>

     <div className=' w-[1188px] h-[60px] flex justify-between items-center mb-[10px] border-b-[1px] border-b-[#d5d5d5]  '>
        <div className=' w-[105.13px] h-[59px] text-[14px] text-[#f57224] flex items-center font-medium justify-end'><p className=' w-[85.13px] h-[16.09px]'>On Sale Now</p></div>
        <div className=' h-[35px] border-[1px] border-[#f57224] border-r-[2px] flex items-center  mr-[11px] px-[10px]' >
          <p className='text-[14px] text-[#f57224]  font-medium'>SHOP ALL PRODUCTS</p>
        </div>

      </div>
      <div className='w-[1188px] h-[290px] flex'>
     
            {
                data.map((item, index)=>{
                   
                  console.log(item);
                  
                    return(
                        <FlashSale img={item.image} title={item.title} price={item.price} discount={item.discount}
                        />
                    )
                })
            }
            </div>
             </div>
        </div>
  
  )
}

export default FlashSaleProducts