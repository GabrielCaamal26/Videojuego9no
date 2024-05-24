import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination } from 'swiper/modules';

const Novedades: React.FC = () => {

    return (
        <>
        <h1 className='font-title text-6xl text-center my-14 md:my-16 md:mt-10 font-bold text-cyan-400' id='Novedades'>Novedades</h1>
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
                <img className='w-56 h-56 object-cover' src="https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S1_2560x1440-fdc688ce46680914ee3c4a7949ce8a67" alt="" />
                <h6 className='text-2xl'>Dead Island 2</h6>
                <span>Un juego de acción y supervivencia en primera persona desarrollado por Dambuster Studios. Ambientado en California, los jugadores enfrentan hordas de zombis utilizando una variedad de armas y tácticas en un mundo abierto infestado de muertos vivientes.</span>
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
                <img className='w-56 h-56 object-cover' src="https://as02.epimg.net/meristation/imagenes/2020/04/20/videos/1587408859_171146_1587408898_noticia_normal.jpg" alt="" />
                <h6 className='text-2xl'>Autopsy Simulator</h6>
                <span>Un juego de simulación y terror que combina la realización de autopsias detalladas con una narrativa de horror. Los jugadores deben realizar procedimientos médicos precisos mientras exploran elementos de una historia espeluznante.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://lumiere-a.akamaihd.net/v1/images/outlaws-key-art-main-02_e3c5cd6c.jpeg?region=0,0,1024,1024" alt="" />
                <h6 className='text-2xl'>Star Wars Outlaws</h6>
                <span>Un juego de acción y aventura ambientado en el universo de Star Wars. Desarrollado por Ubisoft, sigue las aventuras de una forajida que navega por el inframundo galáctico, realizando misiones y enfrentando a enemigos emblemáticos.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1RLdppgLllgGZlkjuvHBu6/bcb358556ea6d338346022ef48849675/ac-sh-meta-page-image.jpg" alt="" />
                <h6 className='text-2xl'>Assassin's Creed Shadows</h6>
                <span>Un próximo título de la serie Assassin's Creed. Aunque los detalles son limitados, se espera que continúe la tradición de la serie con una narrativa rica, sigilo y combate en un nuevo entorno histórico.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://store-images.s-microsoft.com/image/apps.40391.13915115277924383.ab2daab8-cb71-4e1a-ad73-9e4a3e87c3f3.960a3fa2-5987-49b8-9d15-602af0a1ff93" alt="" />
                <h6 className='text-2xl'>Hollow Knight: Silksong</h6>
                <span>La secuela de Hollow Knight, un juego de acción y aventuras en 2D desarrollado por Team Cherry. Los jugadores controlan a Hornet, explorando un vasto y hermoso mundo mientras luchan contra enemigos y descubren secretos.</span>
            </div>
         </SwiperSlide>
         <SwiperSlide className='flex justify-center items-center text-white'>
             <div className='flex flex-col items-center text-center w-72 gap-y-6'>
                <img className='w-56 h-56 object-cover' src="https://m.media-amazon.com/images/I/61TK5-0SLfL._AC_UF1000,1000_QL80_.jpg" alt="" />
                <h6 className='text-2xl'>Silent Hill 2 Remake</h6>
                <span>Un remake del clásico juego de terror psicológico desarrollado por Konami. Presenta gráficos y mecánicas actualizadas, manteniendo la atmósfera inquietante y la narrativa profunda del original mientras James Sunderland busca a su esposa en la misteriosa ciudad de Silent Hill.</span>
            </div>
         </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Novedades;