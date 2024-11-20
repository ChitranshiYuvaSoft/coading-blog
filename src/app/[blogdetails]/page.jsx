"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import FunButton from "../components/Button/FunButton";
import { iconFun } from "@/data/BlogData";
import ShowComment from "../components/Comment/ShowComment";


const page = () => {
  const [commentShow, setCommentShow] = useState(false);
  console.log(commentShow);

  const handleComment = (item) => {
    if (item.name == "comment") {
      if (commentShow) {
        setCommentShow(false);
      } else {
        setCommentShow(true);
      }
    } else if (item.name == "like") {
      alert("like");
    } else if (item.name == "share") {
      alert("share");
    }
  };

  const { blogDetails } = useSelector((state) => state.blog);
  console.log(blogDetails);
  return (
    <div className="home w-full h-[auto] bg-slate-950 flex items-center justify-center flex-col">
      <Header />
      <div className="w-full h-[auto] flex items-center justify-center">
        <div className="w-[55%] h-[auto] flex items-center justify-center flex-col">
          <div className="w-full h-[25rem] flex items-center justify-center ">
            <img
              src={blogDetails.img || "/React/react1.png"}
              alt="noBlogImg"
              className="w-full h-full"
            />
          </div>
          <div className="w-full h-[auto] flex items-start justify-center mt-2 py-1 flex-col">
            <p className="text-3xl text-yellow-700 font-bold my-1">
              {blogDetails.title}
            </p>
            <p className="text-xl text-slate- 500 font-bold my-1">
              {blogDetails.author}
            </p>
            <p className="text-md text-slate-600 font-bold my-1">
              {blogDetails.date}
            </p>
            <p className="text-xs text-slate-300 my-1">
              {blogDetails.description}
            </p>
          </div>
          <div className="w-full h-[auto] flex items-start justify-between my-1">
            {blogDetails.imgGroup?.map((blogImg, index) => (
              <div
                className="w-[32.5%] h-[8rem] flex items-center justify-between bg-white"
                key={index}
              >
                <img src={blogImg || "No Img"} alt="noImg" className="w-full h-full" />
              </div>
            ))}
          </div>
          <div className="w-full h-[auto] flex items-start justify-between my-1">
            <p className="text-xs text-slate-300 my-1">{blogDetails.details}</p>
          </div>
          <div className="w-full h-[3rem] flex items-center justify-end">
            <span className="w-[30%] h-[80%] flex items-center justify-around">
              {iconFun.map((item, index) => (
                <FunButton
                  item={item}
                  key={index}
                  handleComment={handleComment}
                />
              ))}
            </span>
          </div>
        </div>
      </div>

      {commentShow ? (
        <ShowComment comments={blogDetails.comments} />
      ) : (
        <div> No Comment Yet!!</div>
      )}
    </div>
  );
};

export default page;
