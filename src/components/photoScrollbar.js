import React ,{ useContext } from 'react';
import { Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <div className='flex justify-center items-center mr-1'>
            <Icon
                as={FaArrowAltCircleLeft}
                onClick={() => scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
                d={['none', 'none', 'none', 'block']}
            />
        </div>
    );
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <div className='flex justify-center items-center ml-1'>
            <Icon
                as={FaArrowAltCircleRight}
                onClick={() => scrollNext()}
                fontSize='2xl'
                cursor='pointer'
                d={['none', 'none', 'none', 'block']}
            />
        </div>
    );
}

const PhotoScrollbar = ({ data }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
            {data.map((item) => (
                <div className='w-[320px] md:w-[400px] lg:w-[940px] overflow-hidden p-1' key={item.id} itemID={item.id} >
                    <img src={item.url} className='w-[320px] lg:w-[940px] rounded-lg md:w-[400px] relative' alt='/' />
                </div>
            ))}
        </ScrollMenu>
    );
};

export default PhotoScrollbar;