import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination } from 'swiper/modules';

const Ofertas: React.FC = () => {

    return (
        <>
        <h1 className='font-title text-6xl text-center my-14 md:my-16 md:mt-10 font-bold text-cyan-400'>Ofertas</h1>
        <Swiper pagination={true} modules={[Pagination, Autoplay]} className="w-full h-[460px]" loop={true} slidesPerView={1} breakpoints={{
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 5,
            },
        }} autoplay={{
            delay:3000,
            disableOnInteraction:false
        }}>
          <SwiperSlide className='flex justify-center items-center text-white'>
            <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S1_2560x1440-fdc688ce46680914ee3c4a7949ce8a67" alt="" />
                <h6 className='text-2xl'>Dead Island 2</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
          </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg" alt="" />
                <h6 className='text-2xl'>GTA  VI</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://as02.epimg.net/meristation/imagenes/2020/04/20/videos/1587408859_171146_1587408898_noticia_normal.jpg" alt="" />
                <h6 className='text-2xl'>Autopsy Simulator</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://lumiere-a.akamaihd.net/v1/images/outlaws-key-art-main-02_e3c5cd6c.jpeg?region=0,0,1024,1024" alt="" />
                <h6 className='text-2xl'>Star Wars Outlaws</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1RLdppgLllgGZlkjuvHBu6/bcb358556ea6d338346022ef48849675/ac-sh-meta-page-image.jpg" alt="" />
                <h6 className='text-2xl'>Assassin's Creed Shadows</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://store-images.s-microsoft.com/image/apps.40391.13915115277924383.ab2daab8-cb71-4e1a-ad73-9e4a3e87c3f3.960a3fa2-5987-49b8-9d15-602af0a1ff93" alt="" />
                <h6 className='text-2xl'>Hollow Knight: Silksong</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-56 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://m.media-amazon.com/images/I/61TK5-0SLfL._AC_UF1000,1000_QL80_.jpg" alt="" />
                <h6 className='text-2xl'>Silent Hill 2 Remake</h6>
                <span>lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunv</span>
            </div>
         </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Ofertas;