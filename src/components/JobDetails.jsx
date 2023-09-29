import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();
  console.log(details[0].flags);
  const {region, status, subregion, continents, name, flags, population, capital} = details[0];;
  console.log(details.region)

  return (
    <>
      <div className="text-center">
        <h2 className="font-bold text-2xl mt-12 mb-20">
          This is Job details page
        </h2>
          <div className="flex flex-col ">
          <img className="w-96 m-auto mb-12 rounded-lg" src={flags.png} alt="" />
          <h2 className="font-bold text-xl">Name: {name.common}</h2>
          <h6 className="font-bold text-xl">Capital: {capital}</h6>
          <div className="flex m-auto mt-6 text-xl border-2 p-6">
          <div className="mr-6 border-2 p-2 rounded-xl bg-green-300">
          <p>Status: {status}</p>
          <p>Region: {subregion}</p>
          </div>
          <div className="border-2 p-2 rounded-xl bg-green-300">
          <p>Contenents: {continents}</p>
          <p>Population: {population}</p>
          </div>
          </div>
          
         
          </div>

    



     















        <div className="flex justify-evenly mb-20 mr-20">
          <p className="text-green-800 ml-20 mr-20"> <sapn className="text-2xl">Job Resposibility: <br />
           </sapn>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            tenetur quibusdam necessitatibus animi at neque nobis soluta porro
            omnis, perspiciatis asperiores amet quia beatae quos alias iusto
            distinctio repudiandae laboriosam. Mollitia similique, blanditiis
            quibusdam ratione odio voluptates provident ex distinctio. Dolor
            corporis nam eos! Itaque beatae et dicta deleniti harum rem soluta
            aspernatur minus! Temporibus, quaerat? Enim architecto vitae non
            beatae cupiditate consectetur repudiandae harum quo sit aspernatur
            ipsam ipsum magni, corporis omnis voluptates illum. Repudiandae
            assumenda non quam consequuntur dicta veritatis quo, quibusdam
            architecto aliquid consequatur totam, ducimus provident, voluptate
            optio. Odio beatae facilis ullam dolores dicta magni optio.
          </p>
          <p> <span className="text-2xl text-pink-600">Educational Qualification: <br /></span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            tenetur quibusdam necessitatibus animi at neque nobis soluta porro
            omnis, perspiciatis asperiores amet quia beatae quos alias iusto
            distinctio repudiandae laboriosam. Mollitia similique, blanditiis
            quibusdam ratione odio voluptates provident ex distinctio. Dolor
            corporis nam eos! Itaque beatae et dicta deleniti harum rem soluta
            aspernatur minus! Temporibus, quaerat? Enim architecto vitae non
            beatae cupiditate consectetur repudiandae harum quo sit aspernatur
            ipsam ipsum magni, corporis omnis voluptates illum. Repudiandae
            assumenda non quam consequuntur dicta veritatis quo, quibusdam
            architecto aliquid consequatur totam, ducimus provident, voluptate
            optio. Odio beatae facilis ullam dolores dicta magni optio.
          </p>

          
        </div>
      </div>
    </>
  );
};

export default JobDetails;
