import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import ThemeBtn from "./Button/ThemeBtn";
import SearchBar from "./Button/SearchBar";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const router = useRouter();

  const logout = () => {
    localStorage.clear("token");
    window.location.reload();
  };
  return (
    <nav className="w-full h-[10%] border-gray-200 dark:bg-gray-900 navbar mb-4 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
            CodeBlog
          </span>
        </span>
        <div className="w-[auto] flex items-center md:order-2 md:space-x-0 rtl:space-x-reverse justify-around">
          <span className="w-[auto] h-[2rem] flex items-center justify-center">
            <SearchBar />
          </span>

          {token ? (
            <>
              <div className="w-[3rem] h-[3rem] rounded-full border-3 border-slate-"></div>
              <button
                className="group flex items-center justify-start w-10 h-[33px] bg-slate-700 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-24 hover:rounded-5xl active:translate-x-1 active:translate-y-1"
                onClick={logout}
              >
                <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                  <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                </div>
                <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-xs font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  Logout
                </div>
              </button>
            </>
          ) : (
            <>
              <span className="w-[90%] flex items-center justify-around">
                <button
                  onClick={() => router.push("/login")}
                  className="text-white text-xs px-2 "
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/register")}
                  className="text-white text-xs px-2"
                >
                  Register
                </button>
              </span>
            </>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          {token ? (
            <>
              <ul className="w-[100%] flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    href={"/"}
                    className="block py-2 px-3 text-sm text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/javascript"}
                    className="block py-2 px-3  text-sm text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    JavaScript
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/react"}
                    className="block py-2 px-3  text-sm text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/next"}
                    className="block py-2 px-3  text-sm text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    NextJS
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/ui"}
                    className="block py-2 px-3  text-sm text-slate-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    UI Design
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <p></p>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
