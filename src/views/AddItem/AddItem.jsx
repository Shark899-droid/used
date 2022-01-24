import React from 'react';

const AddItem = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col justify-center items-center w-2/4 bg-gray-100 rounded-md mt-10 py-20'>
          <h1 className='text-4xl'> ADD ITEM</h1>
          <label className='text-2xl mt-4' htmlFor='Title'>
            Titolo
          </label>
          <input
            type='text'
            name='Title'
            placeholder='Inserisci il titolo ...'
            className='border-4 border-gray-600 w-80 h-10 px-2'
          />

          <label className='text-2xl mt-4' htmlFor='Price'>
            Prezzo
          </label>
          <input
            type='number'
            name='Price'
            placeholder='Inserisci il prezzo ...'
            className='border-4 border-gray-600 w-80 h-10 px-2'
          />
          <button className='border-4 border-gray-800 rounded-md w-40 h-10 my-5 text-xl'>
            Add Image
          </button>

          <label className='text-2xl mt-4' htmlFor='descrizione'>
            Descrizione
          </label>
          <textarea
            name='descrizione'
            id='descrizione'
            cols='40'
            rows='10'
            className='resize-none'
          ></textarea>

          <button
            className='mt-5 border-4 border-gray-800 rounded-md w-40 h-10 bg-gray-900 text-gray-50'
            type='button'
          >
            Inserisci
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItem;
