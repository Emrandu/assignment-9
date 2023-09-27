import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Featured = ({post}) => {

    console.log(post)
    const {id,name,address,company_name, job_post_name,job_type,location, logo, salary, country_name } = post ;
   
    return (
        <>
            <div className='text-left m-6 border-2 w-72 rounded-lg bg-slate-200'>
            <img className='w-48 h-48 rounded-lg ml-12 mt-4 mb-4' src={logo} alt="" /> 
             <div className='ml-6 mb-6'>
             <h2 className='font-bold text-xl text-purple-500'>{name}</h2>
             <h3>{job_post_name}</h3>
             <h5>{company_name}</h5>
              <div className='flex gap-5'>
                <p>{job_type}</p>
                <p>{location}</p>
              </div>
              <div className='flex gap-3'>
                <p>{country_name}</p>
                <p className='text-green-800'> $ {salary}</p>
              </div>
              <Link to='/details'>
              <button className='bg-gray-400 p-2 rounded-md mt-9 text-white ml-12 '>View Details</button>
              </Link>

             </div>
            </div>
        </>
    );
};

export default Featured;