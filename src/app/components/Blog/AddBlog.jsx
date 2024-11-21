import { createBlog } from "@/app/redux/blog/blogSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddBlog = ({ onclose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    img: null, // Store the file object here
    description: "",
    details: "",
  });

  const { title, author, description, details, date, img } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({
      ...formData,
      img: file,
    });
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();

    // Prepare the form data for upload
    const blogData = new FormData();
    blogData.append("title", formData.title);
    blogData.append("author", formData.author);
    blogData.append("date", formData.date);
    blogData.append("img", formData.img); // Append the file
    blogData.append("description", formData.description);
    blogData.append("details", formData.details);

    console.log([...blogData]); // Debug the form data
    // dispatch(createBlog(blogData));
  };

  return (
    <div className="w-full h-[100vh] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[60%]  h-[80%] bg-red-300  flex items-center justify-center">
        <div className="w-[100%] md:w-[100%] h-[100%] bg-gray-100 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-center mb-4 text-slate-800">
            Create a New Blog
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleCreateBlog}>
            {/* Title and Author */}
            <div className="w-full h-[10%] flex items-center justify-between">
              <div className="w-[49%]">
                <label className="text-sm font-bold text-gray-600" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter blog title"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  className="w-full bg-white border rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-[49%]">
                <label className="text-sm font-bold text-gray-600" htmlFor="author">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Enter author name"
                  name="author"
                  value={author}
                  onChange={handleChange}
                  className="w-full bg-white border rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Date and File Input */}
            <div className="w-full h-[10%] flex items-center justify-between">
              <div className="w-[49%]">
                <label className="text-sm font-bold text-gray-600" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleChange}
                  className="w-full bg-white border rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-[49%]">
                <label className="text-sm font-bold text-gray-600" htmlFor="img">
                  Blog Image
                </label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleFileChange} // Use a separate handler for file input
                  className="w-full bg-white border rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Description and Details */}
            <div className="w-full h-[10%] flex items-center justify-between">
              <div className="w-[49%]">
                <label className="text-sm font-bold text-gray-600" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter a short description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  className="w-full bg-white border rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <div className="w-[49%]">
                <label className="text-sm font-bold text-gray-600" htmlFor="details">
                  Blog Details
                </label>
                <textarea
                  id="details"
                  placeholder="Enter blog details"
                  name="details"
                  value={details}
                  onChange={handleChange}
                  className="w-full bg-white border rounded-lg px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full flex items-center justify-end">
              <span className="w-[40%] flex items-center justify-around">
                <button
                  type="button"
                  onClick={onclose}
                  className="flex-1 bg-red-500 text-white py-1 hover:bg-red-600 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-500 text-white py-1 hover:bg-blue-600 transition-all"
                >
                  Create
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
