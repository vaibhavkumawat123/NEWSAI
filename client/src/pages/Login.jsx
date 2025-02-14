import React from 'react'
import { IconMail , IconLockPassword ,  IconEyeOff } from '@tabler/icons-react';
import { motion } from "motion/react"
import { Button } from '@mantine/core';

const Login = () => {
   
  const handleEyeClick = () => {

  }

  return (
    <>
  <div className='flex justify-center items-center h-screen bg-gray-200'>
  <motion.div 
  initial={{opacity: 0 , scale: 0.9}}
  animate={{opacity:1 , scale:1}}
  transition={{duration: .5}}
  className='bg-white max-w-md rounded-xl p-4 shadow-md flex flex-col gap-5 w-[25rem] h-[35vh] items-center'>
  <h1 className='font-bold text-3xl mb-6'>Welcome Back</h1>
  <div className='flex gap-2'>

  <IconMail stroke={2} className='text-gray-500' />
    <input type="email" className='w-[16rem] focus:outline-none border-b border-gray-200 ' placeholder='Enter Your Email' />
  </div>
  <div className='flex gap-2 relative'>
  <IconLockPassword stroke={2} className='text-gray-500' />
  <div onClick={handleEyeClick}><IconEyeOff className='absolute right-2' stroke={2} /></div>
    <input type="password" className='w-[16rem] focus:outline-none border-b border-gray-200' placeholder='Enter Your Password' />
  </div>
  <Button variant="filled" size="md" radius="md">Button</Button>
  </motion.div>
  </div>
    </>

  )
}
export default Login