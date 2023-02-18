import React from 'react';

const Contact = () => {
    return (
        <div className='pt-10 pb-10 lg:pt-5 lg:pb-5'>
            <div className='flex w-full min-h-screen justify-center items-center'>
                <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white bg-zinc-100'>
                    <div className='flex flex-col space-y-8'>
                        <div className='pb-0 md:pb-20'>
                            <div className='font-bold text-2xl tracking-wide text-neutral-800'>
                                Do You Need Help With Anything?
                            </div>
                            <p className='pt-2 text-zinc-600 text-sm'>
                                We receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month.
                            </p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='text-lg inline-flex space-x-2 items-center text-zinc-600'>
                                <ion-icon name='call'></ion-icon>
                                <span> +[02] 298175937</span>
                            </div>
                        </div>
                        <div>
                        <div className='text-lg inline-flex space-x-2 items-center text-zinc-600'>
                            <ion-icon name='mail'></ion-icon>
                            <span> Contact@RealState.com</span>
                        </div>
                    </div>
                    <div>
                        <div className='text-lg inline-flex space-x-2 items-center text-zinc-600'>
                            <ion-icon name='location'></ion-icon>
                            <span>90th Street, New Cairo, Egypt</span>
                        </div>
                    </div>
                    <div className='text-zinc-600 flex space-x-4 text-xl pt-0 md:pt-20'>
                        <a href=' '>
                            <ion-icon name='logo-facebook'></ion-icon>
                        </a>
                        <a href=' '>
                            <ion-icon name='logo-linkedin'></ion-icon>
                        </a>
                        <a href=' '>
                            <ion-icon name='logo-twitter'></ion-icon>
                        </a>
                    </div>
                    </div>
                    
                    <div>
                        <div className='bg-white text-gray-800 rounded-xl shadow-lg p-8'>
                            <form action='' className='flex flex-col space-y-4'>
                                <div>
                                    <label  className='text-sm font-bold'>Your Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Your Name'
                                        className='ring-1 ring-slate-300 w-full 
                                    rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-neutral-500' />
                                </div>
                                <div>
                                    <label  className='text-sm font-bold'>Email Adress</label>
                                    <input
                                        type="text"
                                        placeholder='Email Adress'
                                        className='ring-1 ring-slate-300 w-full 
                                    rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-neutral-500' />
                                </div>
                                <div>
                                    <label  className='text-sm font-bold'>Message</label>
                                    <textarea
                                        placeholder='Message'
                                        rows='6'
                                        className='ring-1 ring-slate-300 w-full 
                                        rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-neutral-500'>
                                    </textarea>
                                </div>
                                <button className="inline-block self-end bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-lg">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;