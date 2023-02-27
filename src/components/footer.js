import React, { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const Footer = () => {
    const [isIconVisible, setIsIconVisible] = useState(false);

    const changeVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsIconVisible(true)
          } else {
            setIsIconVisible(false)
          }
    }

    const backToTop = () => {
        window.scrollTo({
            top: '0',
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', changeVisibility)

        return () => {
          window.removeEventListener('scroll', changeVisibility)
        }
    }, [])

    return (
        <div className='font-bold text-center p-5 text-gray-500 border-t border-slate-300 bg-gray-300'>
            <div className='flex justify-center items-center'>
                &copy; 2023 RealEstate, Inc
            </div>
            <div className='fixed bottom-4 right-4'>
                <button onClick={backToTop} className={`bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-2 rounded-full ${isIconVisible ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    <BiArrowFromBottom size={25} />
                </button>
            </div>
        </div>
    );
};

export default Footer;