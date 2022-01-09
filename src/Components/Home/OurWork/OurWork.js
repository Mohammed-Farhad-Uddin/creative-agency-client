import React from 'react';
import './OurWork.css';
import slide1 from '../../../images/carousel-1.png';
import slide2 from '../../../images/carousel-2.png';
import slide3 from '../../../images/carousel-3.png';
import slide4 from '../../../images/carousel-4.png';
import slide5 from '../../../images/carousel-5.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const OurWork = () => {
    return (
        <div className='ourWork-bg my-5'>
            <h2 className='text-center text-white mb-5'>Here Are Some Of <span style={{ color: 'green' }}>Our Work</span></h2>
            <div style={{width:'90%',marginLeft:'auto'}}>
                <Swiper
                    spaceBetween={200}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide> <img style={{height:'300px'}} src={slide1} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img style={{height:'300px'}} src={slide2} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img style={{height:'300px'}} src={slide3} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img style={{height:'300px'}} src={slide4} alt="" /> </SwiperSlide>
                    <SwiperSlide> <img style={{height:'300px'}} src={slide5} alt="" /> </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurWork;