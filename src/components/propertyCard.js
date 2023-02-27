import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const PropertyCard = ({ property }) => {
    return (

        <div className='shadow-lg rounded-md w-[350px] bg-slate-50'>
            <img
                src={property.coverPhoto.url} alt='property'
                className='w-full h-[200px] object-cover rounded-t-lg hover:scale-105 duration-200 cursor-pointer'
            />
            <div className='w-full p-2'>
                <div className='pt-2 items-center justify-between'>
                    <div className='flex items-center flex-wrap'>
                        <div className='text-stone-600 pr-2'>{property.isVerified && <GoVerified />}</div>
                        <div className='font-bold text-lg'>EGP {millify(property.price)}{property.rentFrequency && `/${property.rentFrequency}`}</div>
                        <button className="bg-zinc-600 hover:bg-zinc-800 text-white text-sm font-bold py-2 px-2 rounded-md ml-auto">
                            <Link to={`${property.externalID}`}>More Info</Link>
                        </button>
                    </div>

                    <div className='flex items-center p-1 justify-between w-60 text-gray-800'>
                        {property.rooms}
                        <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill /> </div>
                    <div className='text-lg text-neutral-900'>
                        {property.title.length > 30 ? property.title.substring(0, 30) + '....' : property.title}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PropertyCard;