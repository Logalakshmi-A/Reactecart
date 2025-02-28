import React from 'react'

function Home() {
  return (
    <div className='bg-gradient-to-r from-green-300 to-blue-300 h-lvh'>
    <div className='text-center py-10 flex flex-row'>
      <div>
        <img className='w-56 h-56' src='../public/Discount.webp'/>
      </div>
      <div>
      <h1 className='text-center py-10 text-4xl font-semibold'>Welcome to shopping</h1>
      <p className='mt-4 text-gray-600 text-3xl'>Shop your favorite products here!</p>

      <h3 className='text-center text-4xl py-10 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent ...'>Today offer 10% with all product "ONE DAY SALE"</h3>
      </div>
    </div>
    </div>
  )
}

export default Home