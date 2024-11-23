import React from 'react';

const Header = () => {
  return (
    <div className="w-[768px] h-auto">
      <nav>
        {/* Logo and Branding Section */}
        <div className="w-full h-[50px] p-4 border-b border-solid border-[#000000] bg-[#FFFFFF] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/image/logo.svg"
              alt="logo"
              className="w-[30px] h-[30px]"
            />
            <div className="ml-3 text-[#000000] text-lg md:text-xl font-bold">
              Ddsgnr
            </div>
          </div>
        </div>

        {/* Navbar Links Section */}
        <div className="bg-[#FFFFFF] h-auto flex items-center justify-center">
          <ul className="flex flex-wrap gap-4 md:gap-8 text-center p-4 md:p-0">
            <li>
              <a
                href="#home"
                className="text-[#000000] hover:text-[#10F2C5] font-medium text-sm md:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#courses"
                className="text-[#000000] hover:text-[#10F2C5] font-medium text-sm md:text-base"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-[#000000] hover:text-[#10F2C5] font-medium text-sm md:text-base"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#achievement"
                className="text-[#000000] hover:text-[#10F2C5] font-medium text-sm md:text-base"
              >
                Achievement
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
