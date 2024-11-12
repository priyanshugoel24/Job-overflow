'use client'
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import Profile from './Profile'


const Navbar = () => {
    const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
   
  
  return (
    <nav className='flex w-full sticky items-center justify-between py-2 mb-4 '>
        <div className='pl-12 flex items-center '>
            <Link className='text-3xl font-bold flex items-center p-4' href = "/">
            <h1>JobOverflow</h1>
            </Link>
        
        </div>

        <div className='mr-16'>
            <ul className='flex items-center space-x-8'>
                <li>
                    <Link href = "/">
                        <button className='p-4 text-xl font-semibold'>Home</button>
                    </Link>
                </li>
                <li>
                    <Link href = "/jobs">
                        <button className='p-4 text-xl font-semibold'>Jobs</button>
                    </Link>
                </li>
                <li>
                    <Link href = "/explore">
                        <button className='p-4 text-xl font-semibold'>Explore</button>
                    </Link>
                </li>
                <li>
                    <Link href = "/jobs">
                        <button className='p-4 text-xl font-semibold'>Post a Job</button>
                    </Link>
                </li>
            </ul>

            
        </div>
        
        {!session && 
        <div className='pr-8'>
            <Link href= "/login"><button  type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button></Link>

        </div>}

        {session && <Profile />}

        
        


        


    </nav>
  )
}

export default Navbar
