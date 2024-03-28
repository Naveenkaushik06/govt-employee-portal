import React from 'react'

const Signin = () => {
  return (
    <div className='flex flex-col  justify-center items-center border border-rose-200 m-28'>
      <h2>Welcome! Naveen</h2>
      <h1>Sign in to</h1>
      <form className='p-2  border border-black'>
        <label className='p-4'> Employee ID</label>
        <input className='p-2 border border-blue-600 rounded-sm ' type='text' placeholder='Enter your Employee ID' />
        <br/>
        <label>Password</label>
        <input type='text' placeholder='Enter your Password' />
      </form>
    </div>
  )
}

export default Signin
