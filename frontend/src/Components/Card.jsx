import React from 'react'

export default function Card({item}) {
    return (
        <div className='mb-24 mt-4 mx-auto'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-96 h-96 object-fill' src={item.imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> <a href={item.downloadUrl} target='blank'>download</a> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
