import React, { useState } from 'react'
import stars from '../../assets/star.svg'
import ticket from '../../assets/ticket.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';



const Happy = () => {
   const [setSwiperRef] = useState(null);


   return (
      <>
         <div className='container'>
            <div className=' flex items-center justify-between'>
               <h2 className='font-bold text-[48px] leading-[57px] mt-4  mb-4  '>OUR HAPPY CUSTOMERS</h2>
            </div>
            <div className=''>
               <Swiper
                  onSwiper={setSwiperRef}
                  slidesPerView={3}
                  centeredSlides={true}
                  spaceBetween={30}
                  navigation={false}
                  loop={true}
                  modules={[Pagination, Navigation, Autoplay]}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false
                  }}
                  className="mySwiper"
               >
                  <div>

                  </div>
                  <SwiperSlide>   <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'>
                     <div className=''>
                        <img src={stars} alt="" />
                     </div>
                     <div className='flex gap-1'>
                        <b>Sarah M.</b>
                        <img src={ticket} alt="" />
                     </div>
                     <div className='flex'>
                        <p className='leading-[22px] text-[rgb(97,96,96)]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                     </div>
                  </div> </SwiperSlide>
                  <SwiperSlide>   <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'>
                     <div className=''>
                        <img src={stars} alt="" />
                     </div>
                     <div className='flex gap-1'>
                        <b>Alex K.</b>
                        <img src={ticket} alt="" />
                     </div>
                     <div className='flex'>
                        <p className='leading-[22px] text-[rgb(97,96,96)]'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                     </div>
                  </div></SwiperSlide>
                  <SwiperSlide>   <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'>
                     <div className=''>
                        <img src={stars} alt="" />
                     </div>
                     <div className='flex gap-1'>
                        <b>James L.</b>
                        <img src={ticket} alt="" />
                     </div>
                     <div className='flex'>
                        <p className='leading-[22px] text-[rgb(97,96,96)]'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                     </div>
                  </div></SwiperSlide>
                  <SwiperSlide>   <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'>
                     <div className=''>
                        <img src={stars} alt="" />
                     </div>
                     <div className='flex gap-1'>
                        <b>Sarah M.</b>
                        <img src={ticket} alt="" />
                     </div>
                     <div className='flex'>
                        <p className='leading-[22px] text-[rgb(97,96,96)]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                     </div>
                  </div> </SwiperSlide>
                  <SwiperSlide>   <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'>
                     <div className=''>
                        <img src={stars} alt="" />
                     </div>
                     <div className='flex gap-1'>
                        <b>Alex K.</b>
                        <img src={ticket} alt="" />
                     </div>
                     <div className='flex'>
                        <p className='leading-[22px] text-[rgb(97,96,96)]'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                     </div>
                  </div></SwiperSlide>
                  <SwiperSlide>   <div className='border rounded-[20px] px-[32px] py-[28px] flex flex-col gap-[18px]'>
                     <div className=''>
                        <img src={stars} alt="" />
                     </div>
                     <div className='flex gap-1'>
                        <b>James L.</b>
                        <img src={ticket} alt="" />
                     </div>
                     <div className='flex'>
                        <p className='leading-[22px] text-[rgb(97,96,96)]'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                     </div>
                  </div></SwiperSlide>
               </Swiper>

            </div>
         </div>

      </>
   )
}

export default Happy;
