import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const toggleDropdown = () => {
    setMdOptionsToggle(!mdOptionsToggle);
  };

  //chuc nang phan tu con
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdowns = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setDropdownOpen(false); // Đóng dropdown sau khi chọn phần tử con
  };

  return (
    <div className="dark:bg-gray-900">
      <div>
        <div className="relative">
          {/* For md screen size */}
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
              <div>
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9984 18.9999L14.6484 14.6499"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="space-x-6">
              <button
                aria-label="go to cart"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.66667 1L1 4.2V15.4C1 15.8243 1.1873 16.2313 1.5207 16.5314C1.8541 16.8314 2.30628 17 2.77778 17H15.2222C15.6937 17 16.1459 16.8314 16.4793 16.5314C16.8127 16.2313 17 15.8243 17 15.4V4.2L14.3333 1H3.66667Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 4.2002H17"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5564 7.3999C12.5564 8.2486 12.1818 9.06253 11.515 9.66264C10.8482 10.2628 9.94386 10.5999 9.00087 10.5999C8.05788 10.5999 7.15351 10.2628 6.48671 9.66264C5.81991 9.06253 5.44531 8.2486 5.44531 7.3999"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="view favourites"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-xl"
              >
                <AiOutlineUser />
              </button>
            </div>
          </div>
          {/* For md screen size */}
          {/* For large screens */}
          <div className="dark:bg-gray-900 bg-gray-50 ">
            <div className="container mx-auto flex items-center justify-between">
              <h1
                className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white"
                aria-label="the Crib."
              >
                <img
                  className="fill-stroke px-2 py-2"
                  width={93}
                  height={19}
                  src="https://cdn-icons-png.flaticon.com/256/731/731962.png"
                  alt=""
                />
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                {/* New */}   
                <li className="dropdown inline-block relative">
                  <button className="  text-gray-700 font-semibold  rounded inline-flex items-center">
                    <span className="mr-1">New & Featured</span>
                  
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 ">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three 
                      </a>
                    </li>
                  </ul>
                </li>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n",
                  }}
                />
                {/* Men */}

                <li className="dropdown inline-block relative">
                  <button className="  text-gray-700 font-semibold rounded inline-flex items-center">
                    <span className="mr-1">Men</span>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t  bg-gray-200    hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" hover:bg-gray-400  bg-gray-200  py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b  bg-gray-200   hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </li>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n",
                  }}
                />
                {/* women */}
                <li className="dropdown inline-block relative">
                  <button className="  text-gray-700 font-semibold rounded inline-flex items-center">
                    <span className="mr-1">Women</span>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t  bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" hover:bg-gray-400  bg-gray-200  py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b  bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </li>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n",
                  }}
                />
                {/* Kids */}
                <li className="dropdown inline-block relative">
                  <button className="  text-gray-700 font-semibold rounded inline-flex items-center">
                    <span className="mr-1">Kids</span>
                    
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </li>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n",
                  }}
                />
                {/* sale */}

                 <li className="dropdown inline-block relative">
                  <button className=" text-gray-700 font-semibold rounded inline-flex items-center">
                    <span className="mr-1">Sale</span>
                   
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t  bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b  bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </li>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n",
                  }}
                />
                {/* support */}
                 <li className="dropdown inline-block relative">
                  <button className=" text-gray-700 font-semibold rounded inline-flex items-center">
                    <span className="mr-1">Support</span>
                    
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t  bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className=" bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b  bg-gray-200  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three
                      </a>
                    </li>
                  </ul>
                </li>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n.dropdown:hover .dropdown-menu {\n  display: block;\n}\n",
                  }}
                />
              
              </ul>

              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8 pr-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search items"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.99961 20.9999L7.34961 16.6499"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={` ${
                      searchInput ? "hidden" : ""
                    } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="go to cart"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <svg
                      className="fill-stroke"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 5.7998H25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="go to cart"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 text-2xl"
                  >
                    <AiOutlineUser />
                  </button>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 18H20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3">
                <div>
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.9984 18.9999L14.6484 14.6499"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Home
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Men
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Women
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Kisd
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Support
                    <div>
                      <svg
                        className="fill-stroke text-black dark:text-white"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 3L7.5 6L4.5 9"
                          stroke="currentColor"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div>
                      <svg
                        className="fill-stroke"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5H21"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">Cart</p>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div className="fill-stroke text-2xl">
                      <AiOutlineUser />
                    </div>
                    <p className="text-base">SignIn</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
