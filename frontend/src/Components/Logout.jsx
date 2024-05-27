import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

export default function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const onClick = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem('user')
            toast.success("Logged Out Successfully")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Something went Wrong")
            console.log(error);
        }
    }
    return (
        <div>
            <a onClick={onClick} className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-950 text-white font-normal text-lg">Logout</a>
        </div>
    )
}
