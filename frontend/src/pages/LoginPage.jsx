import React from 'react'
import Heading from '../components/Heading'
import Input from '../components/Input'
import Button from '../components/Button'

function LoginPage() {
  return (
    <div className='md:w-1/3 lg:w-1/4 bg-gray-100 min-h-screen flex flex-col items-center justify-start pb-10 gap-3 p-4'>
      <div className='flex justify-start gap-3'>
        <Heading heading={"Signin to your PopX account"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
      </div>
      <Input fieldType={"email"} fieldName={"email"} fieldPlaceholder={"Enter email address"} fieldLabel={"Email Address"} />
      <Input fieldType={"password"} fieldName={"password"} fieldPlaceholder={"Enter password"} fieldLabel={"Password"} />

      <Button bg={"bg-gray-300"} textColor={"text-white"} text={"Login"} refLink={"#"} />
    </div>
  )
}

export default LoginPage