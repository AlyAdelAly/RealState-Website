import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from '../components/propertyCard';
import Banner from '../components/banner';

const Home = () => {
    const baseUrl = 'https://bayut.p.rapidapi.com';
    const [propForSale, setPropertyForSale] = useState([]);
    const [propForRent, setPropertyForRent] = useState([]);

    const getHousesData = async () => {
        const dataforSale = await axios.get((`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`), {
            headers: {
                'X-RapidAPI-Key': '779434cc73mshd5c96aa21289f34p1b8a84jsn9eeead9a30fe',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        }).then(res => res.data);

        const dataForRent = await axios.get((`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`), {
            headers: {
                'X-RapidAPI-Key': '779434cc73mshd5c96aa21289f34p1b8a84jsn9eeead9a30fe',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        }).then(res => res.data);

        setPropertyForSale(dataforSale.hits);
        setPropertyForRent(dataForRent.hits);
    }

    useEffect(() => {
        getHousesData();
    }, []);


    let purchaseDescription = [
        {
            forSale: true,
            purpose: 'Buy A House',
            title: 'Own Your Dream House',
            description: 'Exploring Apartments, Villas, Houses and more',
            imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            button: 'Exploring Buying',
        },
        {
            purpose: 'Rent A House',
            title: 'Rental Homes for Everyone',
            description: 'Exploring Apartments, Villas, Houses and more',
            imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            button: 'Exploring Rent',
        }
    ];

    return (
        <div className='min-h-[1800px] w-full'>
            <Banner />
            {
                purchaseDescription.map((purchase, index) => (
                    <div key={index} className='flex flex-wrap justify-center items-center m-10'>
                        <img className='rounded-lg' src={purchase.imageUrl} alt='banner' width={500} height={300} />
                        <div className='p-5'>
                            <h1 className='text-xl text-gray-500 font-medium' >{purchase.purpose}</h1>
                            <h2 className='text-2xl font-bold'>{purchase.title}</h2>
                            <h3 className='text-lg pt-3 pb-3 text-gray-700'>{purchase.description}</h3>
                            <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                                <Link to='/'>{purchase.button}</Link>
                            </button>
                        </div>
                        {
                            purchase.forSale ? <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
                                {propForSale.length > 0 && propForSale.map((property) => <PropertyCard property={property} key={property.id} />)}
                            </div> : <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
                                {propForRent.length > 0 && propForRent.map((property) => <PropertyCard property={property} key={property.id} />)}
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Home;