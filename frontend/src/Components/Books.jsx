import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Data from '../Data.json'
import { Link, useNavigate } from 'react-router-dom'
import Cards from './Cards'
import axios from 'axios'

export default function Books() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/books/book")
        console.log(res.data);
        setBook(res.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])

  console.log(Data)
  return (
    <>
      <Navbar/>
      <div className='max-w-screen-2xl min-h-screen m-auto container lg:px-20 px-5 space-y-4 '>
        <div className='mt-28'>
          <h1 className='text-center text-4xl md:text-5xl font-semibold'><span className='text-red-500 font-bold'>Welcome!</span> We are Glad to have You on Board.</h1>
          <div className='mt-6 flex justify-center'>
            <Link to={'/'}><button className='px-4 py-2 rounded-lg text-white text-xl font-normal bg-purple-500 hover:bg-purple-600 active:bg-purple-950'>Back</button></Link>
          </div>
        </div>
        <div className='mt-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5'>
          {
            book.map((item) => {
              return <Cards item={item} key={item.id} />
            })
          }

        </div>
      </div>
      <Footer />
    </>
  )
}
