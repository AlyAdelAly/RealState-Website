import React from 'react';

const Banner = () => {
    return (
        <div className='pt-10 h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml-[135px] flex 
                flex-col items-center lg:items-start
                text-center lg:text-left justify-center flex-1
                px-4 lg:px-0'>
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-slate-500'>Find</span> Your Dream House With Us
                    </h1>
                    <p className='max-w-[480px] mb-8'>The ultimate real estate broker. Browse areas, compounds, and properties by price and location to find the perfect place.</p>
                </div>

                <div className='hidden flex-1 lg:flex justify-end items-end'>
                    <img className='rounded-xl' src={'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt='/' />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;