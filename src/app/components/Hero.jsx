import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full h-[25rem] bg-gradient-to-r from-slate-950 via-blue-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-[20rem] h-[20rem] bg-blue-500 opacity-30 rounded-full blur-[150px] absolute -top-10 -left-10"></div>
        <div className="w-[25rem] h-[25rem] bg-yellow-500 opacity-20 rounded-full blur-[200px] absolute bottom-10 right-20"></div>
        <div className="w-[15rem] h-[15rem] bg-purple-500 opacity-20 rounded-full blur-[150px] absolute top-20 right-40"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={200}
          //   className="w-20 h-20 mb-4"
        />
        {/* <span className="w-20 h-20 mb-4">&gt;</span> */}
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to <span className="text-blue-500">CodeBlog</span>
        </h1>
        <p className="text-md text-gray-300 max-w-[50%] mb-6">
          Share your coding journey, learn from peers, and explore the amazing
          world of programming. Start creating and sharing your blogs today!
        </p>
        {/* <button
          onClick={handleModal}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
        >
          Create a New Blog
        </button> */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[500px]">
            <h2 className="text-2xl font-bold text-slate-950 mb-4">
              Add a New Blog Post
            </h2>
            {/* Blog Form */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Content
                </label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your blog content"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg mr-2 hover:bg-red-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Post Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
