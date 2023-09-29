import React, { useEffect, useState } from 'react';
import Header from './Header';
import img from '../image/imran.jpg'
import Job from './Job'
import { Link, useLoaderData } from 'react-router-dom';
import Featured from './Featured';
import JobDetails from './JobDetails';


const Home = () => {
    const jobs = useLoaderData()

    const [posts, setPosts] = useState([]);
    // const [showAll, setShowAll] = useState(false)
    const [showAll, setShowAll] = useState(false)
     console.log(posts)
   
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    // const handleShowAll=() =>{
    //     setShowAll(true)
    // }
     const handleShowAll = () =>{
       setShowAll(true)
     }
    
    return (
        <>
           <div className='home-container mb-12'>

            <section className='section-1 md:flex mt-6 mb-12 bg-slate-100 p-6'>
                <div className='left w-2/4 ml-20'>
                    <h1 className='font-bold text-3xl'>One Step <br /> Closer To Your <br />  <span className='text-gray-400'>
                        Dream Job</span></h1>
                        <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rem, voluptas, libero impedit aliquid veniam quibusdam quod harum sequi earum dolorem illum enim error excepturi repudiandae? Iste amet doloribus eos.</p>

                       <Link to='/'>
                       <button className='bg-gray-400 p-2 rounded-lg mt-5'>Get Started</button>
                       </Link>
                </div>
                <div className='right w-2/4 ml-20'>
                    <img className='w-2/4 rounded-xl' src={img} alt="" />

                </div>
                <hr className='border-2 ' />

            </section>









            <section className='section-2 bg-green-200'>

              <div className='text-center p-2'>
              <h1 className='font-bold text-xl text-gray-600 mb-3'>Job Category List</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cupiditate!</p>
              </div>

              <div className='grid grid-cols-4 gap-5 ml-36 mt-12 mb-12 pb-6'>
                {
                    jobs.map(job=><Job 
                    key={job.id}
                    job = {job}
                    
                    >


                    </Job>)
                }
              </div>

            </section>
            <section>
            <div className='text-center p-2'>
              <h1 className='font-bold text-xl text-gray-600 mb-3'>Featured Jobs</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cupiditate!</p>

              <div className='grid grid-cols-3 mt-12 ml-36'>
              {
                  posts.slice(0, showAll ? 250 : 6).map(post =><Featured 
                  key={post.id}
                  post = {post}
                  ></Featured>)
                }

              </div>

            

        {
          !showAll && 
          <span className='bg-blue-800 text-white p-2 rounded-lg' onClick={handleShowAll}>
            <button>Show All Jobs</button>
          </span>
        }

                  

              </div>


                <div>
                  
                </div>

            </section>




           
               
            </div>   
        </>
    );
};

export default Home;