"use client"
import React from 'react'
import Header from '../components/Header'
import { useSelector } from 'react-redux'

const page = () => {
  const {blogDetails} = useSelector(state => state.blog)
  console.log(blogDetails)
  return (
    <div className="home w-full h-[100vh] bg-slate-950 flex items-center justify-center flex-col">
        <Header/>
        <div className='w-full h-[90%] bg-slate-300 flex items-center justify-center'>
            <div className='w-[70%] h-[100%] bg-slate-600 flex items-center justify-center'>
                <div className='w-[90%] h-[95%] bg-slate-400'>
                    <div className='w-full h-[40rem]'>

                    </div>
                </div>
            </div>
            <div className='w-[30%] h-[100%] bg-slate-300'> 

            </div>
        </div>
    </div>
  )
}

export default page