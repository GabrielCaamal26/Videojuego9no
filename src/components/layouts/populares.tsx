import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination } from 'swiper/modules';

const Populares: React.FC = () => {

    return (
        <>
        <h1 className='font-title text-6xl text-center my-14 md:my-16 md:mt-10 font-bold text-cyan-400' id='populares'>Populares</h1>
        <Swiper pagination={true} modules={[Pagination, Autoplay]} className="w-full h-[580px]" loop={true} slidesPerView={1} breakpoints={{
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        }} autoplay={{
            delay:3000,
            disableOnInteraction:false
        }}>
          <SwiperSlide className='flex justify-center items-center text-white'>
            <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/wz/overview/WZPLP_Hero.webp" alt="" />
                <h6 className='text-2xl'>Warzone</h6>
                <span>Un juego de batalla real gratuito de la serie Call of Duty. Los jugadores luchan en un mapa masivo, completando contratos y evitando el gas letal que reduce el área jugable, con el objetivo de ser el último en pie.</span>
            </div>
          </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg" alt="" />
                <h6 className='text-2xl'>GTA  VI</h6>
                <span>La próxima entrega de la serie Grand Theft Auto desarrollada por Rockstar Games. Aunque los detalles específicos aún son escasos, se espera que ofrezca un mundo abierto expansivo con una narrativa compleja y muchas actividades secundarias.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb" alt="" />
                <h6 className='text-2xl'>Fortnite</h6>
                <span>Un juego de batalla real gratuito desarrollado por Epic Games. Los jugadores compiten en un mapa que se va reduciendo, construyen estructuras y utilizan una amplia variedad de armas y objetos para ser el último en pie.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5" alt="" />
                <h6 className='text-2xl'>Super Mario Oddisey</h6>
                <span>Un juego de plataformas de mundo abierto desarrollado por Nintendo para la Switch. Mario viaja a través de varios reinos para rescatar a la Princesa Peach de Bowser, utilizando su nuevo compañero, Cappy, para poseer objetos y enemigos.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://images.reporteindigo.com/wp-content/uploads/2023/09/League-of-Legends.jpeg" alt="" />
                <h6 className='text-2xl'>League of Legends</h6>
                <span>Un juego de estrategia en tiempo real y multijugador en línea desarrollado por Riot Games. Los jugadores controlan a "campeones" con habilidades únicas y luchan en equipos de cinco para destruir el nexo del equipo contrario.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://cdn1.epicgames.com/offer/22600f09e936468c8ecfc22b5eac7d7c/EGST_StoreLandscape_2560x1440_2560x1440-d49d4862a0e1a243638d5f95517ed205" alt="" />
                <h6 className='text-2xl'>Prince of Persia: The Lost Crown</h6>
                <span>Un próximo juego de acción y plataformas de Ubisoft. Regresa a las raíces de la serie con mecánicas de combate y parkour, siguiendo una nueva historia ambientada en el universo de Prince of Persia.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/537b5208a8ee42935286a44b3b981da86d976bf54899bf98.jpg" alt="" />
                <h6 className='text-2xl'>Final Fantasy VII Rebirth</h6>
                <span>La segunda parte del remake del clásico Final Fantasy VII. Desarrollado por Square Enix, continúa la historia de Cloud Strife y sus amigos mientras luchan contra la corporación Shinra y el enigmático Sephiroth en un mundo detallado y expandido.</span>
            </div>
         </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Populares;