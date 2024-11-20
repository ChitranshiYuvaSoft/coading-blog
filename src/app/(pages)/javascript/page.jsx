import React from "react";
import "../react/react.style.css";
import { Blogs, reactBlog } from "@/data/BlogData";

const JSBlog = () => {
  const JavaScriptBlogs = reactBlog;
  return (
    <div className="w-full h-[auto] bg-slate-950 flex flex-col items-center justify-between py-2 ">
      <header className="header w-full h-[10%] px-3 py-4 shadow-lg shadow-slate-800">
        <h3 className="text-slate-100 text-xl font-semibold">Java Script</h3>
        <div className="w-full h-[80%] flex flex-col items-center justify-around ">
          <main className="w-[90%] h-[auto] flex items-center justify-around flex-col py-6">
            {JavaScriptBlogs.map((blog, index) => (
              <section
                key={blog.id}
                className="w-[100%] h-[20rem] 2 mb-2 my-2  flex items-center justify-center py-5"
              >
                {/* Odd cards: Image on the left, text on the right */}
                {index % 2 === 0 ? (
                  <>
                    <section className="w-[40%] h-[100%]">
                      <img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2 }}
                        src={blog.img}
                        alt="noImg"
                        width={"100%"}
                        height={"50%"}
                        className="h-[100%] px-4 py-3"
                      />
                    </section>
                    <section className="w-[60%] h-full flex flex-col justify-around px-5">
                      <h2 className="text-3xl font-bold text-blue-500">
                        <span>Blog Title :</span> <span>{blog.title}</span>
                      </h2>
                      <h6 className="text-md font-bold text-slate-700">
                        <span>Author :</span> <span>{blog.author.name}</span>
                      </h6>
                      <h6 className="text-md font-bold text-yellow-700">
                        <span>PublishedDate :</span>{" "}
                        <span>{blog.publishedDate}</span>
                      </h6>
                      <p className="text-xs font-bold text-slate-500">
                        <span>Description :</span>{" "}
                        <span>{blog.description}</span>
                      </p>
                      <div className="w-full flex items-center justify-end">
                        <button className="px-4 py-2 text-white bg-yellow-300">
                          More Details
                        </button>
                      </div>
                    </section>
                  </>
                ) : (
                  // Even cards: Text on the left, image on the right
                  <>
                    <section className="w-[60%] h-full flex flex-col justify-around px-5">
                      <h2 className="text-3xl font-bold text-blue-500">
                        <span>Blog Title :</span> <span>{blog.title}</span>
                      </h2>
                      <h6 className="text-md font-bold text-slate-700">
                        <span>Author :</span> <span>{blog.author.name}</span>
                      </h6>
                      <h6 className="text-md font-bold text-yellow-700">
                        <span>PublishedDate :</span>{" "}
                        <span>{blog.publishedDate}</span>
                      </h6>
                      <p className="text-xs font-bold text-slate-500">
                        <span>Description :</span>{" "}
                        <span>{blog.description}</span>
                      </p>
                      <div className="w-full flex items-center justify-start">
                        <button className="px-4 py-2 text-white bg-yellow-300">
                          More Details
                        </button>
                      </div>
                    </section>
                    <section className="w-[40%] h-full">
                      <img
                        src={blog.img}
                        alt="noImg"
                        width={"100%"}
                        height={"100%"}
                        className="h-[100%] px-4 py-3"
                      />
                    </section>
                  </>
                )}
              </section>
            ))}
          </main>
        </div>
      </header>
    </div>
  );
};

export default JSBlog;
