import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const PropertyCard = ({ property }) => {
    return (
        <Link to={`${property.externalID}`}>
            <div className='flex flex-wrap w-[420px] p-5 pt-10 justify-start cursor-pointer '>
                <div>
                    <img src={property.coverPhoto.url} alt='home' className='w-[400px] h-[250px] rounded-md' />
                </div>
                <div className='w-full'>
                    <div className='pt-2 items-center justify-between'>
                    <div className='flex items-center flex-wrap'>
                        <div className='text-stone-600 pr-2'>{property.isVerified && <GoVerified />}</div>
                        <div className='font-bold text-lg'>EGP {millify(property.price)}{property.rentFrequency && `/${property.rentFrequency}`}</div>
                    </div>
                    </div>
                    <div className='flex items-center p-1 justify-between w-60 text-gray-800'>
                        {property.rooms}
                        <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill />
                    </div>
                    <div className='text-lg text-neutral-900'>
                        {property.title.length > 35 ? property.title.substring(0, 35) + '....' : property.title}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default PropertyCard;