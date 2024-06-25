import React from 'react';
import Image from 'next/image';

const Section: React.FC = () => {
  return (
    <section className='w-full bg-blue-200'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-24">
           
            <h2 className="text-3xl font-bold sm:text-4xl">About me ❤️❤️❤️ </h2>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
              eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
              quidem quam repellat.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>

          <div className="relative h-50 w-50 mt-20 ml-10 overflow-hidden rounded-full sm:h-48 sm:w-48 lg:order-last lg:h-56 lg:w-56">
            <Image
                 alt="alna-photo"
                 src="/alna.jpg"
                 width={900} 
                 height={900} 
                 layout="responsive" 
                 objectFit="cover" 
                 className="rounded-full"
                 />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section;
