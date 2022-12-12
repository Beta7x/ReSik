/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="text-text-primary body-font">
      <div className="w-20 ml-5">
        <img src="/src/assets/logo.png" alt="" srcSet="" className="w-full h-10 " />
      </div>
      <div className="container mx-auto flex px-12 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-text-primary">
            Manajemen Sampah
            <br className="hidden lg:inline-block" />
            Untuk Lingkungan Yang Lebih Baik
          </h1>
          <p className="mb-8 leading-relaxed">
            Mari bergabung bersama kami Manajemen sampah anda mulai dari rumah! Dapatkan hadiah
            menarik dengan menukar sampah anda!
          </p>
          <div className="flex font-medium justify-center">
            <button className="inline-flex text-white hover:text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
              <Link to="/Register">Daftar</Link>
            </button>
            <button className="ml-4 inline-flex text-primary bg-transparent border-2 border-primary py-2 px-6 focus:outline-none hover:bg-secondary hover:text-white rounded text-lg">
              <Link to="/login">Masuk</Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/src/assets/login.png"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
