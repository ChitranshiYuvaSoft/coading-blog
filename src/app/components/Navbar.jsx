import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const user = false;
  const router = useRouter();
  return (
    <nav className="w-full h-[10%] border-gray-200 dark:bg-gray-900 navbar mb-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <span
          //   href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            CodeBlog
          </span>
        </span>
        <div className="w-[10rem] flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-around">
          {user ? (
            <>
              <button
                type="button"
                className="flex text-sm  rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                {/* <span className="sr-only">Open user menu</span> */}
                <img
                  className="w-[3rem] h-[3rem] rounded-full"
                  src="/user-profile.png"
                  alt="user photo"
                />
              </button>
            </>
          ) : (
            <>
              <span className="w-[90%] flex items-center justify-around">
                <button onClick={() => router.push('/login')} className="text-white">Login</button>
                <button  onClick={() => router.push('/register')} className="text-white">Register</button>
              </span>
            </>
          )}

          {/* <ThemeBtn/> */}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="w-[100%] flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
              
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                JavaScript
              </a>
            </li>
            <li>
              <Link
                  href={'/react'}
                className="block py-2 px-3 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                React
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                NextJS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                UI Design
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
