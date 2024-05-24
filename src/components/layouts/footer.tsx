import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className='w-full bg-[#060610] h-36 text-white flex flex-col items-center pt-6 gap-y-6 md:px-16 md:py-0 justify-center'>
            <a href='/' className='inline-flex items-center gap-x-2'>
            <svg className='w-6 h-6' fill='#5edbe7' xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" version="1.0" viewBox="-19.0 0.0 345.1 482.5" zoomAndPan="magnify"><g id="__id192_saxm1gns0s"><path d="M39.17,312.66L22.69,291.7c-41.66-52.99-23.9-130.9,36.6-160.62L326.11,0v53.96c0,41.27-23.57,78.93-60.67,97.01 L88.06,237.41c-12.91,6.29-24.22,15.51-32.76,27.06c-8.57,11.6-15.94,27.51-15.37,47.58c5.85-4.64,12.32-8.75,19.35-12.2 l266.82-131.08v53.96c0,41.27-23.57,78.93-60.67,97.01L88.06,406.17c-12.91,6.29-24.22,15.51-32.76,27.06 c-8.81,11.93-16.35,28.39-15.3,49.25l-17.31-22.01C-13.92,413.9-4.66,348.1,39.17,312.66z M212.48,423.37l113.54,59.16l-0.04-147.78 L212.7,391.78C199.78,398.29,199.66,416.69,212.48,423.37z" /></g></svg>
            <p className='font-semibold'>VideoJuegoStore</p>
            </a>
        <p className='text-slate-400 font-semibold'>VideoJuegoStore &#169; 2024</p>
        </footer>
    );
};

export default Footer;