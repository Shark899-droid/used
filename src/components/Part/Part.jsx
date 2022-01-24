import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useGlobalContext } from '../../context.js';

const Item = () => {
  const { parts, clickLeft, clickRight, imgIndex } = useGlobalContext();
  return (
    <>
      <div className='grid grid-cols-3 gap-1 mt-10'>
        {parts.map((part) => {
          return (
            <div key={part._id}>
              <h1>{part.title}</h1>
              <div className='relative '>
                <FaArrowLeft
                  className='absolute inset-y-1/2 text-4xl cursor-pointer'
                  onClick={() => clickLeft(part._id)}
                />
                <FaArrowRight
                  className='absolute inset-y-1/2 inset-x-[90%] text-4xl cursor-pointer'
                  onClick={() => clickRight(part, part._id)}
                />
                <img src={part.image[imgIndex]} className='w-80 object-cover' />
              </div>
              <h3>{part.description}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Item;
