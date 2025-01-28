import React from 'react'

const Categories = ({img, title}) => {
  return (
   <div className='w-[148.5px] h-[148.5px]  flex items-center flex-col justify-center border-r-[1px] border-[#e2e2e2] border-b-[1px] hover:shadow-2xl transition-transform '>

    <div className='w-[80px] h-[80px]  '>
      <img src={img} alt="" className='w-[80px] h-[80px]'/>
    </div>
    <div className='w-[147.5px] h-[36px] flex items-center justify-center text-[14px] leading-[18px] text-[#212121]
    '><p className='mt-[8px] ml-[12px] mr-[12px] flex items-center justify-center h-[36px] leading-[18px] w-[123.5px]
     '>{title}</p></div>
   </div>
  )
}

export default Categories