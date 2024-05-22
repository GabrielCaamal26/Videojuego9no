import React from 'react';

const Header: React.FC = () => {

    return (
        <header className='w-full bg-[#060610] h-16 text-white flex items-center px-16 justify-between'>
            <a href='/' className='inline-flex items-center gap-x-2'>
            <svg className='w-6 h-6' fill='#5edbe7' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.0" viewBox="-19.0 0.0 345.1 482.5" zoomAndPan="magnify"><g id="__id192_saxm1gns0s"><path d="M39.17,312.66L22.69,291.7c-41.66-52.99-23.9-130.9,36.6-160.62L326.11,0v53.96c0,41.27-23.57,78.93-60.67,97.01 L88.06,237.41c-12.91,6.29-24.22,15.51-32.76,27.06c-8.57,11.6-15.94,27.51-15.37,47.58c5.85-4.64,12.32-8.75,19.35-12.2 l266.82-131.08v53.96c0,41.27-23.57,78.93-60.67,97.01L88.06,406.17c-12.91,6.29-24.22,15.51-32.76,27.06 c-8.81,11.93-16.35,28.39-15.3,49.25l-17.31-22.01C-13.92,413.9-4.66,348.1,39.17,312.66z M212.48,423.37l113.54,59.16l-0.04-147.78 L212.7,391.78C199.78,398.29,199.66,416.69,212.48,423.37z" /></g></svg>
            <p className='font-semibold'>VideoJuegoStore</p>
            </a>

            <ul className='flex gap-x-4'>
                <li>    
                    <a href="">Populares</a>
                </li>
                <li>
                    <a href="">Novedades</a>
                </li>
                <li>
                    <a href="">Ofertas</a>
                </li>
                <li><button>
            <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
            </button></li>
            </ul>
        </header>
    );
};

export default Header;