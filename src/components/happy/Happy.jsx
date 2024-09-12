import React from 'react'
import stars from '../../assets/star.svg'
import ticket from '../../assets/ticket.svg'
import { Pagination } from 'antd'

const Happy = () => {
    // const onShowSizeChange = (current, pagesize) => {

    // }
    const App = () => <Pagination defaultCurrent={1} total={50} />;
    return (
        <>
            <div className='container flex flex-col gap-[40px]'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-[48px] leading-[57px] mt-4    '>OUR HAPPY CUSTOMERS</h2>
                    <Pagination align="start" defaultCurrent={1} total={50} />

                </div>
                <div className='flex gap-[20px] '>
                    <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'> 
                         <div className=''>
                            <img src={stars} alt="" />
                         </div>
                         <div className='flex'>
                            <b>Sarah M.</b>
                            <img src={ticket} alt="" />
                         </div>
                         <div className='flex'>
                            <p className='leading-[22px] text-[rgb(97,96,96)]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                         </div>
                    </div>
                    <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'> 
                         <div className=''>
                            <img src={stars} alt="" />
                         </div>
                         <div className='flex'>
                            <b>Sarah M.</b>
                            <img src={ticket} alt="" />
                         </div>
                         <div className='flex'>
                            <p className='leading-[22px] text-[rgb(97,96,96)]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                         </div>
                    </div>
                    <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'> 
                         <div className=''>
                            <img src={stars} alt="" />
                         </div>
                         <div className='flex'>
                            <b>Sarah M.</b>
                            <img src={ticket} alt="" />
                         </div>
                         <div className='flex'>
                            <p className='leading-[22px] text-[rgb(97,96,96)]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                         </div>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </>
    )
}

export default Happy