import React from 'react'

const JustForYou = ({img, title, price, discount}) => {
  
  return (
    <div className='w-[188px] h-[292.59px] mb-[20px] mr-[10px] bg-[#fff] hover:shadow-2xl transition-transform'>
        <div className='w-[188px] h-[189px]'>
            <img src={img} alt="" className='h-[100%] w-[100%]'/>
        </div>
        <div className='w-[173px] h-[36px] overflow-hidden'>
            <p className='text-[14px] leading-[18px] font-normal cursor-pointer h-[36px]'>{title.slice(0,47)+"..."}</p>
        </div>

        <div className='flex w-[173px] h-[22px] mt-[4px] leading-[22px] gap-[4px] items-baseline '>

        <div className='  text-[#f57224] text-[18px]'>
          Rs.{price}

        </div>
      
          <div className='text-[#212121] text-[12px] opacity-[0.8] mt-[3.8px] w-[25.28px]h-[22px]'>-{discount}%</div>
       
          </div>

        

    </div>
  )
}

export default JustForYou