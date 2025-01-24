import React from 'react'

const FlashSale = ({img, title, price, discount}) => {
  // console.log(props.title);
  return (
    
       
          <div className='w-[188px] h-[290px] border-2 border-black mr-[12px]'>
            <img src={img} alt="" className='w-[188px] h-[188px]'/>
            <div className='w-[172px] h-[94px] border-2 border-black ml-2 mt-[6px]'>
              
            <div>{title}</div>
            <div>Rs.{price}</div>
            <div>{discount}%</div>
            </div>
          </div>
      

       

       
     
  )
};

export default FlashSale