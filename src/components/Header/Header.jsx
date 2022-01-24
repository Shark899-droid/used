import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div>
        <div className='flex justify-between px-20 items-center h-28 bg-gray-300'>
          <Link to='/AddItem' className='text-3xl'>
            Add Item
          </Link>
          <Link to='/' className='text-6xl'>
            Irpinia Parts
          </Link>
          <div className='flex'>
            <Link to='/LogIn' className='text-3xl cursor-pointer'>
              Log In
            </Link>
            <Link to='/SignIn' className='text-3xl pl-10 cursor-pointer'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
