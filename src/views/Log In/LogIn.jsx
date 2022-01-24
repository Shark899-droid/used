import React from 'react';
import './LogIn.css';

const LogIn = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center w-2/4 bg-gray-100 rounded-md mt-10 py-20'>
          <h1 className='text-4xl'> LOG IN</h1>
          <label className='text-2xl mt-4' htmlFor='Email'>
            Email
          </label>
          <input
            type='text'
            name='Email'
            placeholder='Inserisci la tua email ...'
            className='border-4 border-gray-600 w-80 h-10 px-2'
          />
          <label className='text-2xl mt-4' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='Inserisci la tua password ...'
            className='border-4 border-gray-600 w-80 h-10 px-2'
          />
          <button
            className='mt-5 border-4 border-gray-800 rounded-md w-40 h-10 bg-gray-900 text-gray-50'
            type='button'
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
