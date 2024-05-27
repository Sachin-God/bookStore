import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const onClick = async (e) =>{
        e.preventDefault()
        if (name === "" || email === "" || description === "") {
            toast.error("All Fields Required")
            document.getElementById("my_modal_1").close()
            return;
        } 
        const contacts = {
            name:name,
            email:email,
            description: description
        }
        await axios.post('http://localhost:5000/user/contact',contacts).then((res)=>{
            console.log(res.data);
            if (res.data) {
                toast.success('Contacted Successfully')
                document.getElementById("my_modal_1").close()
            }
        }).catch((error)=>{
            console.log(error);
            if (error.response){
                toast.error("Something went Wrong")
                document.getElementById("my_modal_1").close()
            }
        })
    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <form onSubmit={onClick} className="modal-box flex flex-col justify-center space-y-5 px-8 bg-gray-50">
                    <h1 className='text-lg font-semibold'>Name</h1>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} type='text' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='your name' />
                    <h1 className='text-lg font-semibold'>Email</h1>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type='email' className='border border-gray-100 px-4 py-2 rounded-md ' placeholder='your email here' />
                    <h1 className='text-lg font-semibold'>Description</h1>
                    <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className='border border-gray-100 px-4 py-2 rounded-md h-28' placeholder='Write your message here.' />
                    <button type='submit' className='px-4 py-2 bg-purple-400 hover:bg-purple-600 active:bg-purple-950 rounded-md text-white'>Submit</button>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}
