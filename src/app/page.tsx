import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="max-w-[1200px] py-5 text-white mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-1.jpg" 
          alt="Picture 1 - A beautiful scenery" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-2.jpg" 
          alt="Picture 2 - A charming sunset" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-3.jpg" 
          alt="Picture 3 - A forest view" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-4.jpg" 
          alt="Picture 4 - A mountain range" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-5.jpg" 
          alt="Picture 5 - A vibrant flower" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-6.jpg" 
          alt="Picture 6 - A serene lake" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-7.jpg" 
          alt="Picture 7 - A cityscape at night" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>

      <div className="bg-rose-700 py-5 text-center relative group transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <Image 
          src="/images/pic-8.jpg" 
          alt="Picture 8 - A peaceful beach" 
          width={250} 
          height={250} 
          className="mx-auto rounded-lg transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
