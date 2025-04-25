import React from 'react'
import Button from '../components/Button'

function Hero() {
    return (
        <div className='md:w-1/3 lg:w-1/4 bg-gray-100 min-h-screen flex flex-col items-center justify-start pb-10 gap-3 p-4'>
            <div className='text-center pb-5'> 
                <h1>Internship Task</h1>
                <p>This page was created just to make the navigation to <b>Settings Page</b> properly as theres no navigtion way to it.</p>
            </div>
            <Button text={"Home Page"} refLink={"/home"} textColor={"text-white"} bg={"bg-violet-600"} />
            <Button text={"Signup Page"} refLink={"/signup"} textColor={"text-white"} bg={"bg-violet-600"} />
            <Button text={"Login Page"} refLink={"/login"} textColor={"text-white"} bg={"bg-violet-600"} />
            <Button text={"Settings Page"} refLink={"/settings"} textColor={"text-white"} bg={"bg-violet-600"} />
        </div>
    )
}
export default Hero