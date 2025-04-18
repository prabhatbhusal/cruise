import React from 'react'

const page = () => {
  return (
    <div>
      <div className={`h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image2.png)] bg-blend-overlay text-white`}>
        <h1 className='text-xl font-black '>ONE CRUISE AT A TIME</h1>
        <p  className='text-md font-medium'>Where every journey is as unforgettable as the </p>
        <p className='text-md font-medium'>destination- your passport to all things cruising.</p>
      </div>
      <div className={`h-100 w-full bg-[#23918BA6] flex flex-col justify-center items-center bg-[url(/images/image3.png)] bg-blend-multiply text-white p-40 gap-5`}>
        <h1 className='text-2xl font-black '>a tale form the sea</h1>
        <h1  className='text-2xl font-medium'>Set Sail with Unforgettable Experiences </h1>
        <p className='text-md '>Not just a journey — it’s a collection of once-in-a-lifetime moments. Imagine waking up to a new horizon each day, dining under the stars, exploring exotic ports, and sharing laughter with fellow travelers. Whether you're chasing sunsets in the Caribbean, discovering hidden gems in the Mediterranean, or relaxing on a luxury deck with a drink in hand — unforgettable is just the beginning.</p>
        <p className='text-md '>Come aboard and create memories that stay with you long after the waves fade.</p>
      </div>
      
    </div>
  )
}

export default page
