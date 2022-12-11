/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='text-gray-600 body-font'>
      <div className='container px-5 py-10 first-letter:mx-auto flex flex-wrap items-center'>
        <div className='lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 mx-10 border-2'>
          <img src="/src/assets/logo.png" alt="" className='w-40 '/>
          <p className='font-normal text-xl leading-relaxed mt-4'>
          Selamat datang di aplikasi ReSik,
          <br />
          buat lingkungan asri kembali bersama kami
          </p>
          <div className='mt-20'>
            <img src="/src/assets/daftar.png" alt="" />
          </div>
        </div>
        <div className='lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 drop-shadow-2xl'>
            <img src="/src/assets/logo2.png" alt="" className='w-4/5 mx-auto'/>
          <h2 className='text-gray-900 text-2xl font-bold title-font mb-5 mx-auto'>Daftar</h2>
          <div className='relative mb-4'>
            <label htmlFor='full-name' className='leading-7 text-sm text-gray-600'>
              Full Name
            </label>
            <input
              type='text'
              id='full-name'
              name='full-name'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='username' className='leading-7 text-sm text-gray-600'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-sm text-gray-600'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='city' className='leading-7 text-sm text-gray-600'>
              Kota
            </label>
            <input
              type='text'
              id='city'
              name='city'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='city' className='leading-7 text-sm text-gray-600'>
              Alamat Lengkap
            </label>
            <input
              type='text'
              id='city'
              name='city'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='sandi' className='leading-7 text-sm text-gray-600'>
              Kata Sandi
            </label>
            <input
              type='password'
              id='sandi'
              name='sandi'
              className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            />
          </div>
          <button className='text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg'>
            Daftar
          </button>
          <p className='text-sm text-text-secondary mt-3 mx-auto'> 
          Sudah Punya akun? <Link to="/login" className='text-primary hover:text-secondary'>Masuk</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register