import React from 'react'

const Form = () => {
  return (
    <div className='w-full mt-10 mb-10'>
    <h2 className='mb-8 sm:mb-10 text-[#08a2d1] font-bold text-4xl text-center'>Contact</h2>
    <div className='flex justify-center gap-5'>
      <div className='flex flex-col gap-3'>
      <label className='text-[rgb(8,162,209)] font-bold flex flex-col'>
        <span>Nom Prénom</span>
        <input type="text" className='form-input rounded-md'/>
      </label>
      <label className='text-[#08a2d1] font-bold flex flex-col'>
        <span>Email</span>
        <input type="text" className='form-input rounded-md bg-gray-200'/>
      </label>
      </div>
      <div>
      <label className='text-[#08a2d1] font-bold flex flex-col'>
        <span>Message</span>
        <textarea className='rounded-md'></textarea>
        </label>
        </div>
        </div>
</div>
  )
}

export default Form