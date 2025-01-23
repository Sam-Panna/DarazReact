import React from 'react'
import { FaApple } from "react-icons/fa6";

const DownloadCard = () => {
  return (
    <div>
      <div className='h-[344px] w-[194px] p-[6px] bg-[#FEF9F3]'>
        <div className='flex '>
          <div className='h-[42px] w-[42px]'><img src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg" alt="" className='h-auto max-h-[100%] max-w-[100%] w-[auto]' />
          </div>
          <h1>Download the App</h1>
        </div>
        
        <div className=' h-[158px] w-[182px] relative'>
          <div className=''>
          <img src="	https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png" alt="" className=' mt-[6px]' />

          </div>





          <div className='absolute top-0'>

          <div className='h-7 ml-[7px]  flex items-center justify-start'>

            <img src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01cAMOjU1zqQJZU8EbT_!!6000000006765-2-tps-19-18.png_80x80q80.png" alt="" className=' w-[10px] h-[9px]' />


            <span className='text-[10px] font-medium max-w-[56px] text-white'>4.8 Rated</span>

          </div>



          <div className='w-[180px]  h-6 flex justify-center items-cente'>
            <span className='text-[12px] text-white absolute font-semibold '>Download App</span>
          </div>

          <div className='w-[182px] h-[78px] mt-2 pl-[33px]'>
            <div className='w-[149px] h-[36px] flex gap-2'>
              <div className='h-[36px] w-[36px]'><img src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png" alt="" className='' /></div>

              <span className='w-[78px] h-[30px] leading-4 text-[14px] text-white  font-semibold'>Free Delivery</span>

            </div>


            <div className='w-[149px] h-[36px] flex mt-[6px] gap-2'>
              <div className='h-[36px] w-[36px]' ><img src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png" alt="" /></div>

              <span className='w-[78px] h-[30px] leading-4 text-[14px] text-white font-semibold'>Limited Time</span>
            </div>


          </div>
          </div>





        </div>

        <div className='w-[182px] h-[108px] flex items-center '>

          
            <div className='w-[90px] h-[90px]'><img src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01da6D0K1Khogk708ZP_!!6000000001196-0-tps-150-150.jpg_360x360q80.jpg" alt="" /></div>
            <div className='w-[83px] h-[60px]'> 
              <button className='border-2  rounded-md flex text-[10px] items-center w-[83px] h-[24px] '><FaApple  className='size-4'/>App Store</button>

            </div>
          
        </div>

      </div>
    </div>
  )
}

export default DownloadCard