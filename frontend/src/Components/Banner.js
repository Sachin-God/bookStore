import React from 'react'
import img from '../assets/stack.webp'
import Login from './Login'
import { useAuth } from '../Context/AuthProvider'
import { Link } from 'react-router-dom'

export default function Banner() {
  const [authUser, setAuthUser] = useAuth()
  return (
    <>
      <div className='my-16 mt-28 max-w-screen-2xl m-auto container md:px-20 px-4 flex flex-col-reverse md:flex-row justify-center items-center'>
        <div className='w-full md:w-1/2 flex-row'>
          <div className=' space-y-12'>
            <h1 className='font-bold text-4xl md:text-5xl'>Welcome ! Download Any Book <span className='text-red-600 font-bold text-4xl md:text-5xl'>Here</span></h1>
            <p className='font-md text-lg md:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolor hic beatae vitae, nam eum optio eaque unde enim modi est fugit soluta officiis, perspiciatis sint mollitia cum in adipisci!</p>
          </div>
          <div className='mt-8 space-y-6'>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            {
              authUser ? <>
                <button className="btn btn-secondary" ><Link to={'/books'}>Browse</Link></button>
              </> 
              :
                <>

                  <button className="btn btn-secondary" onClick={() => document.getElementById('my_modal_2').showModal()}>Login</button>
                </>
            }
            <Login />
          </div>

        </div>
        <div className='w-full md:w-1/2'>
          <img className='min-w-96 w-[90%]' src={img} alt='book-stack' />
        </div>
      </div>
    </>
  )
}
