import React from 'react';

const About = () => {
    const paragraphStory = [
        {
            paragraph: `What started out as a collective dream and an innovative idea has now become a reality.
            Finding the right home has always been a stressful process, that’s where ${<span className='text-slate-800 font-bold'> RealState </span>} comes in.
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
        <div className='pt-14'>
            <div className='max-w-[1640px] mx-auto p-4 pb-2 lg:pb-15 md:pb-14'>
                <div className=''>
                    <div className=' flex flex-col justify-center items-center pb-6'>
                        <h1 className='px-4 text-2xl sm:text-xl md:text-3xl lg:text-5xl font-bold'>About <span className='text-slate-600'>Us</span></h1>
                        <h1 className='px-4 text-2xl sm:text-xl md:text-3xl lg:text-5xl font-bold'> <span className='text-slate-600'>Who We</span> Are?</h1>
                    </div>
                    <img className='rounded-lg w-full' src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="/" />
                </div>
            </div>
            <div className='relative text-3xl text-slate-800 font-bold justify-start items-start pl-4 pb-4'>
                Our Company Story
            </div>
            <ol>
                {
                    paragraphStory.map((p,index) => (
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