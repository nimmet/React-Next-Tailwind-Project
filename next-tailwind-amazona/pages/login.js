
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Layout } from '../components/Layout'

const Login = () => {
    const [register,setRegister] = useState(false)
    const passwordRef = useRef('')
    const [pass,setPass] = useState()

    const loginHandler =() => {
       if(pass.length < 5){
        alert("Password must be at least 5 characters")
        passwordRef.current.focus()
       }
       console.log(passwordRef.current);
    }

  return (
    <Layout title="Login">
    { !register ?
       <div className=' flex flex-col gap-5 mx-20 md:mx-[350px]'>
        <h1 className=' text-lg font-[500]'> { register?'Register': 'Login'}</h1>

        <form >
        <div className=' flex flex-col gap-1 mb-2'>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required 
                className='rounded-md h-10  bg-sky-100 outline-none active:outline hover:outline-sky-300 outline-offset-0
                '
            />
        </div>

        <div className=' flex flex-col gap-1'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required
            ref={passwordRef} 
            value={pass}
            onChange={(e)=> {
                
                 setPass(e.target.value)}}
                 className='rounded-md h-10  bg-sky-100 outline-none active:outline hover:outline-sky-300 outline-offset-0'
            />
           
        </div>

        <div className=' flex flex-col gap-3 mt-5'>

        <button className='primary-button w-min'
        onClick={()=>loginHandler}
        >Login</button>
        <div>
        Don't have an account?
        <Link href="" className='  '
        onClick={()=> setRegister(!register)}> Register</Link>
        </div>
        
        </div>
        </form>
       </div>
       :
       <div className=' flex flex-col gap-5 mx-20 md:mx-[350px]'>
       <h1 className=' text-lg font-[500]'> { register?'Register': 'Login'}</h1>

        <form >

        <div className=' flex flex-col gap-1 mb-2'>

<label htmlFor="name">Name</label>
<input type="text" name="name"  
    className='rounded-md h-10  bg-sky-100 outline-none active:outline hover:outline-sky-300 outline-offset-0
    '
/>
</div>
        <div className=' flex flex-col gap-1 mb-2'>

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required 
                className='rounded-md h-10  bg-sky-100 outline-none active:outline hover:outline-sky-300 outline-offset-0
                '
            />
        </div>

        <div className=' flex flex-col gap-1'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" 
            ref={passwordRef} 
            required 
                 className='rounded-md h-10  bg-sky-100 outline-none active:outline hover:outline-sky-300 outline-offset-0'
            />
        </div>

        <div className=' flex flex-col gap-3 mt-5'>

        <button className='primary-button w-min'>Login</button>
        <div>
        Don't have an account?
        <Link href="" className='  '
        onClick={()=> setRegister(!register)}> Register</Link>
        </div>
        </div>
        </form>
       </div>
    }
    </Layout>

  )
}

export default Login