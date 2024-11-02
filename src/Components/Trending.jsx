import React, { useEffect, useState } from 'react'
import TNCard from './TNCard'

const Trending = () => {

  const [cardData, setCardData] = useState([])

  useEffect(() => {
    fetch('/CardData.json')
      .then(responce => {
        return responce.json()
      })
      .then(result => setCardData(result))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='p-4 leading-10 sm:px-28 '>
      <h1 className='text-2xl my-8'>Trending Now</h1>
    <div className='flex sm:gap-x-4 sm:items-center flex-col sm:flex-row'>
    <select className='bg-transparent border rounded-sm text-sm p-4 mb-6 sm:mb-0 md:w-40 w-5/6' >
        <option  className='text-black'>India</option>
        <option   className='text-black'>Global</option>
      </select>
      <select className='bg-transparent border rounded-sm text-sm p-4 md:w-40 w-5/6' >
        <option className='text-black' >Movies</option>
        <option className='text-black' >TV Shows</option>
      </select>
    </div>

      <div className='flex noscroll mt-14 overflow-x-auto py-6'>
        {cardData.length > 0 ? (
          cardData.map((product) => (
            <TNCard key={product.id} product={product} />
          ))
        ) : (
          <h1>NO MOVIES</h1>
        )}
      </div>

    </div>
  )
}

export default Trending
