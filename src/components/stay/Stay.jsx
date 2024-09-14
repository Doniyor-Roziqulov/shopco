import React from 'react'
import { TfiEmail } from "react-icons/tfi";

const Stay = () => {
    return (
        <>
            {/* <div className='container max-w-[1280px]'>
                <div className='flex items-center relative bg-black px-[64px] py-[36px] mb-[-100px] rounded-[20px] mt-[50px] justify-between'>
                    <div className='w-[551px]'>
                        <h2 className='text-white  font-bold text-[40px] leading-[45px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    </div>
                    <div className='flex flex-col gap-[14px]'>
                        <div className='flex items-center gap-2 bg-white px-[22px] py-[12px] rounded-[62px]'>
                            <TfiEmail />
                            <input className='text-[rgb(153,153,153)] w-[349px]' type="text" placeholder='Enter your email address' />
                        </div>
                        <div className='flex items-center gap-2 bg-white px-[16px] py-[12px] rounded-[62px]'>
                            <input className='text-[rgb(153,153,153)] w-[349px] text-center' type="text" placeholder='Subscribe to Newsletter' />
                        </div>
                    </div>
                </div>

            </div> */}
            <div className="container max-w-[1280px] px-4 md:px-8">
  <div className="flex flex-col md:flex-row items-center relative bg-black px-6 md:px-16 py-8 md:py-12 mb-[-80px] md:mb-[-100px] rounded-[20px] mt-[30px] md:mt-[50px] justify-between">
    <div className="w-full md:w-[551px] mb-6 md:mb-0">
      <h2 className="text-white font-bold text-[24px] md:text-[40px] leading-[30px] md:leading-[45px] text-center md:text-left">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h2>
    </div>
    <div className="flex flex-col gap-[10px] w-full md:w-auto">
      <div className="flex flex-col sm:flex-row items-center gap-2 bg-white px-[18px] py-[10px] md:px-[22px] md:py-[12px] rounded-[62px]">
        <TfiEmail />
        <input
          className="text-[rgb(153,153,153)] w-full sm:w-[349px] px-2 md:px-0"
          type="text"
          placeholder="Enter your email address"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 bg-white px-[16px] py-[10px] md:py-[12px] rounded-[62px]">
        <input
          className="text-[rgb(153,153,153)] w-full sm:w-[349px] text-center"
          type="text"
          placeholder="Subscribe to Newsletter"
        />
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Stay