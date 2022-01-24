import React from 'react';
import Part from '../../components/Part/Part';

const Home = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center w-2/4 bg-gray-100 rounded-md mt-10'>
          <h1>Used Parts</h1>
          <div>
            <Part />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
