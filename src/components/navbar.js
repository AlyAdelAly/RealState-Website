import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md fixed w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-sans text-slate-500'>
                    <span className='text-2xl text-gray-800'>
                        Real
                    </span>
                    Estate
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${open ? 'top-16 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <Link to={link.path} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};

export default Navbar;