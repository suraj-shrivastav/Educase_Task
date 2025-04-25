import React from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Button from '../components/Button'
import Radio from '../components/Radio'

function SignupPage() {
  return (
    <div className='md:w-1/3 lg:w-1/4 bg-gray-100 min-h-screen flex flex-col items-center justify-start pb-10 gap-3 p-4'>
      <div className='flex justify-start gap-3'>
        <Heading heading={"Create your \n PopX account"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
      </div>
      <Input fieldLabel={"Full Name"} fieldType={"text"} fieldPlaceholder={"Enter your full name"} fieldName={"username"} />
      <Input fieldLabel={"Phone Number"} fieldType={"number"} fieldPlaceholder={"Enter your phone number"} fieldName={"phoneNo"} />
      <Input fieldType={"email"} fieldName={"email"} fieldPlaceholder={"Enter email address"} fieldLabel={"Email Address"} />
      <Input fieldType={"password"} fieldName={"password"} fieldPlaceholder={"Enter password"} fieldLabel={"Password"} />
      <Input fieldType={"text"} fieldName={"company"} fieldPlaceholder={"Enter your company name"} fieldLabel={"Company Name"}/>
      <div className='left-0 w-full'>
        <p>Are you an Agency?</p>
        <Radio />
      </div>
      <div className='flex flex-col items-center justify-end w-full mt-auto'>
        <Button text={"Create Account"} refLink={"/signup"} textColor={"text-white"} bg={"bg-violet-600"} />
      </div>
    </div>
  )
}

export default SignupPage
