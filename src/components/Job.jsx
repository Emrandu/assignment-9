import React from 'react';

const job = ({job}) => {
    // console.log(job)
    const {name, id, image ,availableJob} = job;
    return (
        <>
             <div className='border-2 w-48 border-slate-300 text-center p-4 rounded-lg'>
                <img className='w-36 h-36 rounded-lg mb-4  mt-2' src={image} alt="" />
                <h1 className='text-xl'>{name}</h1>
                <h6>Available Jobs: {availableJob}</h6>
             </div>
        </>
    );
};

export default job;