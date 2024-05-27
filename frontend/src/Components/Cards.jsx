import React from 'react'

export default function Cards({item}) {
  return (
    <div>
      <div className='mb-12 mt-4'>
            <div className="card card-compact md:w-56 sm:w-48 w-36 bg-base-100 shadow-xl">
                <figure><img className='md:w-56 md:h-56 sm:h-48 h-36 w-36 sm:w-48 object-fill' src={item.imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-lg font-semibold ">{item.name}</h2>
                    <div className="card-actions justify-end">
                        <button className="px-2 py-1 rounded-md bg-purple-500 text-white font-normal"> <a href={item.downloadUrl} target='blank'>download</a> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
