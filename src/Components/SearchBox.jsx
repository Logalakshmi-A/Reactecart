import React from 'react'

function SearchBox({setSearchItems}) {
  return (
    <div className='text-center sticky top-28'>
      <input className='border-2 border-gray-500 bg-gradient-to-r from-green-200 to-blue-200 py-2 px-2 rounded-md w-1/2 text-center'
       type="text" placeholder='Search Products' onChange={(e)=>setSearchItems(e.target.value)} />
      </div>
  )
}

export default SearchBox