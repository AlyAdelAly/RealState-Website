import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PhotoScrollbar from './photoScrollbar';
import { GoVerified } from 'react-icons/go'
import millify from 'millify';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import Spinner from '../components/loader/Spinner';

const PropertyDetails = () => {
    const [properties, setProperties] = useState([]);
    const params = useParams();

    const baseUrl = 'https://bayut.p.rapidapi.com';
    const getPropertiesData = async () => {
        const data = await axios.get((`${baseUrl}/properties/detail?externalID=${params.id}`), {
            headers: {
                'X-RapidAPI-Key': '1915da7993msh9eb76e270a46bfep1834fejsn43b00f03c467',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        }).then(res => res.data);

        setProperties(data);
    }

    useEffect(() => {
        getPropertiesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const {
        price,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        isVerified,
        description,
        type,
        purpose,
        furnishingStatus,
        amenities,
        photos
    } = properties;
    return (
        <div className='max-w-[1000px] m-auto p-4 '>
            {photos ? <PhotoScrollbar data={photos} /> : <Spinner />}
            <div className='w-full p-6'>
                <div className='pt-2 items-center justify-between'>
                    <div className='flex items-center flex-wrap'>
                        <div className='text-stone-600 pr-2'>{isVerified && <GoVerified />}</div>
                        <div className='font-bold text-lg'>EGP {millify(price)}{rentFrequency && `/${rentFrequency}`}</div>
                    </div>
                </div>
                <div className='flex items-center p-1 justify-between w-60 text-gray-800'>
                    {rooms}
                    <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </div>
                <div className='mt-2'>
                    <h1 className='text-lg text-neutral-900 mb-2 font-bold'>
                        {title}
                    </h1>
                    <p className='text-zinc-700 leading-8'>
                        {description}
                    </p>
                </div>
                <div className='flex flex-wrap uppercase justify-between'>
                    <div className='flex justify-between w-[400px] border-b p-3 border-gray-300'>
                        <h1 className='text-lg text-zinc-700'>Type</h1>
                        <h1 className='text-lg font-bold text-neutral-800'>{type}</h1>
                    </div>
                    <div className='flex justify-between w-[400px] border-b p-3 border-gray-300'>
                        <h1 className='text-lg text-zinc-700'>Purpose</h1>
                        <h1 className='text-lg font-bold text-neutral-800'>{purpose}</h1>
                    </div>
                    {furnishingStatus && (
                        <div className='flex justify-between w-[400px] border-b p-3 border-gray-300'>
                            <h1 className='text-lg text-zinc-700'>Furnishing Status</h1>
                            <h1 className='text-lg font-bold text-neutral-800'>{furnishingStatus}</h1>
                        </div>
                    )}
                </div>
                <div>
                    {amenities && <p className='text-2xl font-black mt-5'>Facilites:</p>}
                    <div className='flex flex-wrap'>
                        {amenities?.map((item) => (
                            item?.amenities?.map((amenity) => (
                                <p className='font-bold text-lg p-2 text-gray-500 bg-slate-100 m-1 rounded-md' key={amenity.text}>
                                    {amenity.text}
                                </p>
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;