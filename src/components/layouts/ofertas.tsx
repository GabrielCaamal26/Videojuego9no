import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay, Pagination } from 'swiper/modules';

const Ofertas: React.FC = () => {

    const ofertas = [
        {
            id: 1,
            title: 'Cyberpunk 2077',
            description: 'Juego de rol y acción en un futuro distópico, donde los jugadores controlan a V, un mercenario con mejoras cibernéticas, en la ciudad de Night City.',
            img: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7'
        },
        {
            id:2,
            title: 'Minecraft',
            description: 'Juego de construcción y aventura en un mundo abierto donde los jugadores exploran, recolectan recursos y construyen estructuras.',
            img: 'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png'   
        },
        {
            id:3,
            title: 'GTA V',
            description: 'Juego de acción en un mundo abierto donde los jugadores alternan entre tres criminales en la ciudad de Los Santos, realizando misiones y actividades diversas.',
            img: 'https://image.api.playstation.com/vulcan/ap/rnd/202203/0911/VIB0SeEj9vT6DTv7P4thJLZi.jpg'
        },
        {
            id:4,
            title: 'Cuphead',
            description: 'Juego de plataformas y acción con estilo visual retro, donde los jugadores enfrentan difíciles jefes con precisión y coordinación.',
            img: 'https://image.api.playstation.com/vulcan/img/cfn/11307fllh6D-IvbpCa18N0vRggVeRYWA06paTNCj3DENJMScAzW2f3ry4IwFcXBAt9kWXdZGpGoOGjxJ_e9MdordMVAosNhZ.png'
        },
        {
            id:5,
            title: 'The Elder Scrolls',
            description: 'Serie de juegos de rol en mundos abiertos de fantasía, conocidos por su exploración profunda y narrativa compleja. Ejemplos: Skyrim y Oblivion.',
            img: 'https://assets.xboxservices.com/assets/86/2d/862d26ef-6763-4c30-bf2c-5ebd077a7ba6.jpg?n=2938430_GLP-Page-Hero-0_1083x1222.jpg'
        },
        {
            id:6,
            title: 'Planet Coaster',
            description: 'Simulador de parques de atracciones donde los jugadores diseñan y gestionan su propio parque temático.',
            img: 'https://image.api.playstation.com/vulcan/ap/rnd/202312/1210/74c6a0f1ff2e677bf816a649fc8666346af62537ce5ea7ab.png'
        },
        {   id:7,
            title: 'Destiny 2',
            description: 'Juego de disparos multijugador en línea donde los jugadores, como Guardianes, luchan contra fuerzas alienígenas y participan en misiones cooperativas y competitivas.',
            img: 'https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/d2_IntoTheLight_Boot-Image_MASTER_EPIC_Landscape_Offer_EN_2560x1440-40eba9b07abfa902ffdc2361ed5b264e'
        }
    ]
    return (
        <>
        <h1 className='font-title text-6xl text-center my-10 md:my-16 font-bold text-cyan-400' id='Ofertas'>Ofertas</h1>
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
        ofertas.map((oferta) => 
                      <SwiperSlide className='text-white'>
                      <div className='card text-center w-72 relative'>

                          <div className='front absolute flex flex-col items-center text-center w-72 gap-y-6'>
                          <img className='w-56 h-56 object-cover' src={oferta.img} alt={`Portada de ${oferta.title}`} />
                          <h6 className='text-2xl'>{oferta.title}</h6>
                          </div>
          
                          <div className='back absolute w-full'>
                          <span className='w-72'>{oferta.description}</span>
                          </div>
                          
                      </div>
                    </SwiperSlide>
        )
        }
        </Swiper>
      </>
    );
};

export default Ofertas;