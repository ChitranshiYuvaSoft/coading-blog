"use client";
import { useEffect, useState } from "react"; // Add useState to manage modal state
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "./redux/blog/blogSlice";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DetailsBtn from "./components/Button/DetailsBtn";
import AddBlog from "./components/Blog/AddBlog";

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allBlogs } = useSelector((state) => state.blog);
  const token = localStorage.getItem("token");


  // Handle Search Functionality
  const [data, setAllData] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      setAllData(allBlogs);
      return;
    } else {
      const filterBySearch = allBlogs.filter((item) => {
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
          return item;
        }
      }); 
      setAllData(filterBySearch);
    }
  }, [allBlogs, search]);

  // Handle clicking on "Details" button
  const handleDetailsBtn = (blog) => {
    if (!token) {
      router.push("/login");
    } else {
      dispatch(getSingleBlog(blog));
      router.push(`/${blog.id}`);
    }
  };

  const handleAddBlog = () => {
    if (!token) {
      router.push("/login");
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  console.log(setSearch); // Check if it's undefined or not


  return (
    <>
      <div className="home w-full h-[auto] bg-slate-950 flex items-center justify-center flex-col">
        {!token && <Navbar search={search} setSearch={setSearch} />}
        <Hero />
        <main className="w-full h-[90%] flex items-center justify-center flex-col">
          {allBlogs?.map((blog, index) => (
            <section
              key={index}
              className="w-[100%] h-[20rem] mb-2 my-2 flex items-center justify-center py-5"
            >
              {index % 2 === 0 ? (
                <>
                  <section className="w-[40%] h-[100%]">
                    <img
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
                      <span>Author :</span> <span>{blog.author?.name}</span>
                    </h6>
                    <h6 className="text-md font-bold text-yellow-700">
                      <span>Published Date :</span>{" "}
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
                <>
                  <section className="w-[60%] h-full flex flex-col justify-around px-5">
                    <h2 className="text-3xl font-bold text-blue-500">
                      <span>Blog Title :</span> <span>{blog.title}</span>
                    </h2>
                    <h6 className="text-md font-bold text-slate-700">
                      <span>Author :</span> <span>{blog.author.name}</span>
                    </h6>
                    <h6 className="text-md font-bold text-yellow-700">
                      <span>Published Date :</span>{" "}
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

        {/* Sticky Plus Button */}
        <div
          onClick={handleAddBlog} // Navigate to the add blog page
          className="fixed bottom-4 right-4 w-[2rem] h-[2rem] bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer shadow-lg hover:bg-slate-700 transition-all duration-300 group"
        >
          <span className="text-xl font-bold">+</span>
        </div>

        {/* Modal for Creating a Blog */}
        {/* {isModalOpen && <AddBlog onclose={handleCloseModal} />} */}
      </div>
    </>
  );
};

export default Home;
