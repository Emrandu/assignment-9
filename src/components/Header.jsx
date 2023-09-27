import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <div className='bg-gray-300 flex justify-between p-5'>
          <div className='ml-12 font-bold text-3xl '>
              <h2 className=''>Kingdom of Jobs</h2>
            </div>  
            <nav className='mr-6 '>
               <Link className='mr-5 p-4' to='/'>Home</Link>   
               <Link className='mr-5 p-5' to='/statistics'>Statistics</Link>   
               <Link className='mr-5 p-5' to='/applied'>Applied Jobs</Link>   
               <Link className='mr-5 p-5' to='/blog'>Blog</Link>   
            </nav>  
          </div>
        </>
    );
};

export default Header;