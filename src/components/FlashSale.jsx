import React from 'react'

const FlashSale = ({img, title, price, discount}) => {

  const calculatePriceBeforeDiscount = () => {
    const priceBefore =
      price / (1 - discount / 100);
      return priceBefore.toFixed(0);

  }
  // console.log(props.title);
  return (
    
       
          <div className='w-[188px] h-[290px]  mr-[12px] hover:shadow-2xl transition-transform'>
            <img src={img} alt="" className='w-[188px] h-[188px]'/>
            <div className='w-[172px] h-[94px]  ml-[8px] mr-[8px] mt-[4px] cursor-pointer'>
              
            <p className='w-[172px] h-[36px] mb-[4px] text-[14px] leading-normal font-medium cursor-pointer '>{title.slice(0,43)+"..."}</p>
            <div className='w-[172px] h-[22px] text-[18px] text-[#f57224] mb-[px] leading-[22px]'>Rs.{price}</div>

            <div className='flex gap-[4px]'>
            <div className='text-[12px] text-[#9e9e9e] line-through'>Rs.{calculatePriceBeforeDiscount()}</div>
            <div className="text-[#212121] text-[12px]">-{discount}%</div>
            </div>
            </div>
          </div>
      

       

       
     
  )
};

export default FlashSale