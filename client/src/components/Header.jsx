import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarToggle, Dropdown } from "flowbite-react";
import { FaMoon, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { RiMenuFold2Line } from "react-icons/ri";
import vietnam from "../images/vietnam.png";
import japan from "../images/japan.png";
import uk from "../images/united-kingdom.png";
import Logo from "../icons/Logo";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const path = useLocation().pathname;

  const MobileMenu = () => (
    <div className="md:w-1/3 sm:w-2/3 h-screen inset-y-0 top-0 left-0 bg-white absolute overflow-y-auto lg:hidden z-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Logo />
            <span className="text-lg font-semibold ml-2">Rabito English</span>
          </div>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-gray-600"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <nav className="space-y-4">
          <Link to="/about" className="block text-gray-700">
            About
          </Link>
          <Link to="/community" className="block text-gray-700">
            Community
          </Link>
          <div>
            <button
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              className="flex items-center justify-between w-full text-gray-700"
            >
              Features <FaChevronDown size={16} />
            </button>
            {isFeaturesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/features/watch-listen"
                  className="block text-gray-600"
                >
                  Watch & listen
                </Link>
                <Link
                  to="/features/live-streaming"
                  className="block text-gray-600"
                >
                  Live-streaming practice
                </Link>
                <Link
                  to="/features/pronunciation"
                  className="block text-gray-600"
                >
                  Pronunciation
                </Link>
              </div>
            )}
          </div>
          <Link to="/download" className="block text-gray-700">
            Download
          </Link>
        </nav>

        <div className="border border-[#8F90A6] mt-5"></div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Appearance: device theme
          </h3>
          <div className="space-y-2">
            <button className="block w-full text-left text-[#06C270]">
              Device theme
            </button>
            <button className="block w-full text-left text-gray-700">
              Light theme
            </button>
            <button className="block w-full text-left text-gray-700">
              Dark theme
            </button>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">
            Language: ENG
          </h3>
          <div className="space-y-2">
            <button className="flex items-center text-gray-700">
              <img src={uk} alt="UK Flag" className="w-5 h-5 mr-2" />
              English
            </button>
            <button className="flex items-center text-gray-700">
              <img src={vietnam} alt="Vietnam Flag" className="w-5 h-5 mr-2" />
              Vietnamese
            </button>
            <button className="flex items-center text-gray-700">
              <img src={japan} alt="Japan Flag" className="w-5 h-5 mr-2" />
              Japanese
            </button>
          </div>
        </div>

        <div className="border border-[#8F90A6] mt-5"></div>

        <div className="mt-6 space-y-3">
          <div className="bg-gradient-to-br from-[#FDDD48] to-[#00B7C4] p-[2px] rounded-[4px]">
            <button className="w-full px-2 py-2 text-[#06C270] bg-white rounded-[4px]">
              Login / Sign up
            </button>
          </div>
          <button className="w-full px-4 py-2 text-white bg-[#06C270] rounded">
            JOIN FOR FREE
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <header className="w-full h-[80px] sm:h-[56px] bg-white fixed z-50">
      {/* Mobile Header */}
      <div className="h-[56px] lg:hidden flex self-center gap-3 md:ml-[32px] sm:ml-[12px]">
        <button onClick={() => setIsDrawerOpen(true)} className="text-gray-600">
          <RiMenuFold2Line size={24} />
        </button>
        <div className="flex items-center">
          <Logo />
          <span className="text-lg font-semibold ml-2">Rabito English</span>
        </div>
      </div>
      {isDrawerOpen && <MobileMenu />}

      {/* Desktop Header */}
      <Navbar className="lg:h-[80px] md:h-[80px] sm:h-[56px] hidden lg:flex sticky top-0 z-50">
        <NavbarBrand className="lg:ml-16 sm:ml-0">
          <NavbarToggle />
          <div className="w-[205px] flex gap-2 items-center">
            <Logo />
            <span className="whitespace-nowrap text-xl font-semibold">
              Rabito English
            </span>
          </div>
        </NavbarBrand>

        {/*---Btns---*/}
        <div className="flex gap-3 items-center lg:order-2">
          <div>
            <button className="w-[200px] h-[44px] rounded-[4px] flex gap-2 px-5 bg-[#06C270] items-center justify-center">
              <span className="text-center text-[14px] text-white font-medium leading-6">
                Log in / Sign up
              </span>
            </button>
          </div>
          <div className="h-[25px] border border-[#90A3BF] self-center"></div>
          <Dropdown label="EN" inline as="div">
            <Dropdown.Item>
              <img src={vietnam} className="w-5 h-5 mr-1" />
              Tiếng Việt
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={uk} className="w-5 h-5 mr-1" />
              English
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={japan} className="w-5 h-5 mr-1" />
              Japanese
            </Dropdown.Item>
          </Dropdown>
          <div>
            <button className="p-2 border border-gray-300 rounded-full">
              <FaMoon className="text-gray-500" />
            </button>
          </div>
        </div>

        <Navbar.Collapse>
          <div className="flex gap-10 text-[16px] font-bold">
            <Navbar.Link active={path === "/"} as={"div"}>
              <Link to="/" className="text-black">
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/"} as={"div"}>
              <Link to="/" className="text-black">
                Community
              </Link>
            </Navbar.Link>

            <Dropdown label="Features" inline>
              <Dropdown.Item>Watch & listen</Dropdown.Item>
              <Dropdown.Item>Live-streaming practice</Dropdown.Item>
              <Dropdown.Item>Pronunciation</Dropdown.Item>
            </Dropdown>

            <Navbar.Link active={path === "/"} as={"div"}>
              <Link to="/" className="text-black">
                Download
              </Link>
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
