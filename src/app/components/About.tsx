
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Section: React.FC = () => {
  return (
    <section className='w-full bg-blue-200 relative'>
     
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/cyprus.jpg")' }} />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-24 text-gray-800 z-10">
            <h2 className="text-3xl font-bold sm:text-4xl">About me ❤️❤️❤️</h2>
            <p className="mt-10 mb-20 text-gray-800 font-bold">
              Hi, I m  Alna, 30 years old, born and raised in Cyprus, a sympathetic girl looking for peace in the world.
            </p>
            <Link
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </Link>
          </div>

          <div className="relative h-50 w-50 mt-20 ml-10 overflow-hidden rounded-full sm:h-48 sm:w-48 lg:order-last lg:h-56 lg:w-56">
         
            <Image
              alt="alna-photo"
              src="/alna.jpg"
              width={900}
              height={900}
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
