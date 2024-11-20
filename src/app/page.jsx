"use client";
import { reactBlog } from "@/data/BlogData";
import ReactBlog from "./(pages)/react/page";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import { useRouter } from "next/navigation";
import DetailsBtn from "./components/Button/DetailsBtn";
import { useDispatch } from "react-redux";
import { getSingleBlog } from "./redux/blog/blogSlice";

const Home = () => {
  const blogs = reactBlog;
  const router = useRouter();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  // No User Have Redirect on Login
  const handleDetailsBtn = (blog) => {
    console.log(blog, "single blog data");
    if (!token) {
      router.push("/login");
    } else {
      dispatch(getSingleBlog(blog))
      router.push(`/${blog.id}`);
    }
  };
  return (
    <>
      <div className="home w-full h-[auto] bg-slate-950 flex items-center justify-center flex-col">
        <Navbar />
        <main className="w-full h-[90%] flex items-center justify-center flex-col">
          {blogs.map((blog, index) => (
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
                      <span>Description :</span> <span>{blog.description}</span>
                    </p>
                    <div className="w-full flex items-center justify-end">
                      <DetailsBtn onclose={handleDetailsBtn} blog={blog} />
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
                      <span>Description :</span> <span>{blog.description}</span>
                    </p>
                    <div className="w-full flex items-center justify-start">
                      <DetailsBtn onclose={handleDetailsBtn} blog={blog} />
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
    </>
  );
};

export default Home;
