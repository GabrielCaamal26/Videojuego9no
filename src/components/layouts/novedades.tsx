import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination } from 'swiper/modules';

const Novedades: React.FC = () => {

        const novedades = [
            {
                id: 1,
                title:'Dead Island 2',
                description:'Un juego de acción y supervivencia en primera persona desarrollado por Dambuster Studios. Ambientado en California, los jugadores enfrentan hordas de zombis utilizando una variedad de armas y tácticas en un mundo abierto infestado de muertos vivientes.',
                img: 'https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S1_2560x1440-fdc688ce46680914ee3c4a7949ce8a67'
            },
            {
                id: 2,
                title: 'GTA  VI',
                description: 'La próxima entrega de la serie Grand Theft Auto desarrollada por Rockstar Games. Aunque los detalles específicos aún son escasos, se espera que ofrezca un mundo abierto expansivo con una narrativa compleja y muchas actividades secundarias.',
                img: 'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg'
            },
            {
                id:3,
                title: 'Autopsy Simulator',
                description: 'Un juego de simulación y terror que combina la realización de autopsias detalladas con una narrativa de horror. Los jugadores deben realizar procedimientos médicos precisos mientras exploran elementos de una historia espeluznante.',
                img: 'https://as02.epimg.net/meristation/imagenes/2020/04/20/videos/1587408859_171146_1587408898_noticia_normal.jpg'
            },
            {
                id: 4,
                title: 'Star Wars Outlaws',
                description: 'Un juego de acción y aventura ambientado en el universo de Star Wars. Desarrollado por Ubisoft, sigue las aventuras de una forajida que navega por el inframundo galáctico, realizando misiones y enfrentando a enemigos emblemáticos.',
                img:'https://lumiere-a.akamaihd.net/v1/images/outlaws-key-art-main-02_e3c5cd6c.jpeg?region=0,0,1024,1024'
            },
            {   id: 5,
                title: 'Assassin\'s Creed Shadows',
                description: 'Un próximo título de la serie Assassin\'s Creed. Aunque los detalles son limitados, se espera que continúe la tradición de la serie con una narrativa rica, sigilo y combate en un nuevo entorno histórico.',
                img: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1RLdppgLllgGZlkjuvHBu6/bcb358556ea6d338346022ef48849675/ac-sh-meta-page-image.jpg'
            },
            {
                id:6,
                title: 'Hollow Knight: Silksong',
                description:'La secuela del aclamado juego de plataformas y acción Hollow Knight. Desarrollado por Team Cherry, sigue las aventuras de Hornet mientras explora un nuevo reino lleno de desafíos, enemigos y secretos por descubrir.',
                img:'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030300/capsule_616x353.jpg?t=1695443850'
            }
        ]
        return (
            <>
            <h1 className='font-title text-6xl text-center my-10 md:my-16 font-bold text-cyan-400' id='Novedades'>Novedades</h1>
            <Swiper pagination={true} modules={[Pagination, Autoplay]} className="w-full h-[380px]" loop={true} slidesPerView={1} breakpoints={{
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
    
            {
            novedades.map((novedad) => 
                          <SwiperSlide className='text-white'>
                          <div className='card text-center w-72 relative'>
    
                              <div className='front absolute flex flex-col items-center text-center w-72 gap-y-6'>
                              <img className='w-56 h-56 object-cover' src={novedad.img} alt={`Portada de ${novedad.title}`} />
                              <h6 className='text-2xl'>{novedad.title}</h6>
                              </div>
              
                              <div className='back absolute w-full'>
                              <span className='w-72'>{novedad.description}</span>
                              </div>
                              
                          </div>
                        </SwiperSlide>
            )
            }
            </Swiper>
      </>
    );
};

export default Novedades;