import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const About = () => {
    const aboutImages = [
        {
            img: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            title_1: "Who We ",
            title_2: "Are?",
        },
        {
            img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            title_1: "What We ",
            title_2: "Do?",
        }
    ]
    const paragraphStory = [
        {
            paragraph: `What started out as a collective dream and an innovative idea has now become a reality.
            Finding the right home has always been a stressful process, that’s where RealState  comes in.
            We have helped more than 50,000 families easily find the most suitable property to turn into a loving home.`
        },
        {
            paragraph: `As a prop-tech property startup, we offer various services to our customers including brokerage and property financing services.
            The property financing or the "Move now, Pay later" service is allowing hundreds of families to immediately move into their dream houses
            with payment plans of up to 5 years.`
        },
        {
            paragraph: `On a mission to revolutionize the real estate industry,
            we promise to help each and every one of our customers
            to make a well-informed decision and buy their dream house.`
        }
    ];
    return (
        <div className='pt-2'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    aboutImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='max-w-[1640px] mx-auto p-4'>
                                <div className='max-h-[550px] relative'>
                                    <div className='absolute w-full h-full text-gray-200 max-h-[550px] bg-black/40 flex flex-col justify-center rounded-xl'>
                                        <h1 className='px-4 text-4xl md:text-6xl lg:text-7xl font-bold'>About <span className='text-slate-600'>Us</span></h1>
                                        <h1 className='px-4 text-4xl md:text-6xl lg:text-7xl font-bold'> <span className='text-slate-600'>{image.title_1}</span>{image.title_2}</h1>
                                    </div>
                                    <img className='w-full max-h-[550px] object-cover rounded-xl' src={image.img} alt="/" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='flex text-3xl text-slate-800 font-bold justify-start items-start pl-4 pb-4'>
                Our Company Story
            </div>
            <ol>
                {
                    paragraphStory.map((p, index) => (
                        <li key={index} className='text-zinc-600 text-lg pl-4 pb-6'>
                            {p.paragraph}
                        </li>
                    ))
                }
            </ol>
        </div>
    );
};

export default About;