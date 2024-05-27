import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useAuth } from '../Context/AuthProvider';
import Logout from './Logout';
import Contact from './Contact';

export default function Navbar() {
    const [authUser, setAuthUser] = useAuth()
    console.log(authUser)

    const navitems = (
        <>
            <li className='text-md font-normal hover:underline active:text-white '><Link to={'/'}>Home</Link></li>
            <li className='text-md font-normal hover:underline active:text-white '><Link to={'/books'}>Books</Link></li>
            <li className='text-md font-normal hover:underline active:text-white '><a onClick={() => document.getElementById('my_modal_1').showModal()}>Contact us</a></li>
            <li className='text-md font-normal hover:underline active:text-white '><Link to={'/about'}>About</Link></li>
        </>
    )

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const navigate = useNavigate()
    const handleClick = (e) => {
      navigate('/books')
    }
  
    return (
        <div className={`z-10 max-w-screen-2xl m-auto container md:px-20 px-4 fixed top-0 left-0 ${sticky ? "shadow-md bg-red-100 transition-all ease-in-out duration-500" : ""}`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">BookStore</a>
                </div>
                <div className='navbar-end'>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navitems}
                        </ul>
                    </div>
                    <div onClick={handleClick} className='hidden lg:block mr-3'>
                        <label className="border border-gray-200 px-3 py-2 flex items-center gap-2 rounded-md">                            
                            <input type="text" className="grow outline-none bg-transparent" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
<Contact />
                    {
                        authUser ? <Logout /> :
                            <>
                                <div>
                                    <a onClick={() => document.getElementById('my_modal_2').showModal()} className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-950 text-white font-normal text-lg">Login</a>
                                </div>
                                <Login />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
