import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'


function HomePage() {
    return (
        <div className='md:w-1/3 lg:w-1/4 bg-gray-100 min-h-screen flex flex-col items-center justify-end pb-10 gap-3 p-4'>
            <div className='flex justify-start '>
                <Heading heading={"Welcome to PopX"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
            </div>
            <Button text={"Create Account"} refLink={"/signup"} textColor={"text-white"} bg={"bg-violet-600"} />
            <Button text={"Already Registered? Login"} refLink={"/login"} textColor={"text-black"} bg={"bg-violet-300"} />
        </div>
    )
}

export default HomePage