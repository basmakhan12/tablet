import React from 'react'


const HeroSection = () => {
  return (
    <section className="bg-white w-[768] py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left ">
          <h1 className="text-6xl font-bold leading-tight text-gray-900 mb-4 ml-0">
            Learn new skills online with ease
          </h1>
          <p className="text-gray-600 text-md mb-6 text-sm ">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800">
              Start learning now
            </button>
            <button className="px-6 py-3 bg-gray-200 text-black font-medium rounded-lg hover:bg-gray-300">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-start h-[400px]">
          <img
            src="/image/picture.jpeg"
            alt="Woman holding books"
            className="w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



