import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onClick = async (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            toast.success("All Fields Required")
            return;
        }
        const user = {
            email: email,
            password: password
        }
        await axios.post('https://book-store-sandy-one.vercel.app/api/user/login', user).then((res) => {
            console.log(res.data)
            document.getElementById("my_modal_2").close()
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            localStorage.setItem('user', JSON.stringify(res.data.user))

            if (res.data) {
                toast.success('Login Successful')
            }
        }).catch((error) => {
            console.log(error);
            if (error.response) {
                toast.success(error.response.data.message)
            }
        })
    }

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <form onSubmit={onClick} className="modal-box flex flex-col justify-center space-y-5 px-8 bg-gray-100">
                    <h1 className='text-lg font-semibold'>Email</h1>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='your email here' />
                    <h1 className='text-lg font-semibold'>Password</h1>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type='password' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='Password' />
                    <button type='submit' className='px-4 py-2 bg-purple-400 hover:bg-purple-600 active:bg-purple-950 rounded-md text-white'>Login</button>
                    <p className='text-center'>Don't have an Account. <span className='hover:underline text-blue-500'><Link to={'/register'}>Register here</Link></span></p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
