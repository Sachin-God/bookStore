import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const onClick = async (e) => {
        e.preventDefault();
        if (name === "" || email === "" || password === "") {
            toast.success("All Fields Required")
            return;
        }
        const userinfo = {
            name:name,
            email:email,
            password:password
        }
        await axios.post('http://localhost:5000/user/register',userinfo).then((res)=>{
            console.log(res.data);
            navigate('/');
            if (res.data) {
                toast.success('signup Success')
                localStorage.setItem('user', JSON.stringify(res.data.user))
            }
        }).catch((error)=>{
            console.log(error);
            if (error.response){
                toast.success(error.response.data.message)
            }
        })
    }


    return (
        <div className='h-screen flex items-center justify-center bg-gray-50'>
            <form onSubmit={onClick} className="modal-box flex flex-col justify-center space-y-5 px-8 bg-gray-100">
                <h1 className='text-lg font-semibold'>Name</h1>
                <input value={name} onChange={(e) => { setName(e.target.value) }} type='text' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='your name' />
                <h1 className='text-lg font-semibold'>Email</h1>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='your email here' />
                <h1 className='text-lg font-semibold'>Password</h1>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='Password' />
                <button type='submit' className='px-4 py-2 bg-purple-400 hover:bg-purple-600 active:bg-purple-950 rounded-md text-white'>Register</button>
                <p className='text-center'>Already have an Account. <span className='hover:underline text-blue-500'><Link to={'/'} >Login</Link></span></p>
            </form>
        </div>
    )
}
