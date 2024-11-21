"use client";
import React, { useState } from "react";
import "../Comment/Comment.style.css";

const ShowComment = ({ comments }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newComment, setNewComment] = useState({ userName: "", comment: "" });
  const [commentList, setCommentList] = useState(comments);

  const handleAddComment = () => {
    if (newComment.userName && newComment.comment) {
      setCommentList([...commentList, newComment]);
      setNewComment({ userName: "", comment: "" });
      setIsFormVisible(false);
    }
  };

  return (
    <>
      <div className="card mb-5">
        <div className="w-full h-[auto] flex items-center justify-between">
          <span className="title">Comments</span>
        </div>
        <div className="w-full h-[auto] flex items-center justify-end my-3">
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="px-3 py-1 border border-slate-100 text-white text-xs rounded-lg mr-5"
          >
            {isFormVisible ? "Cancel" : "Add"}
          </button>
        </div>

        {isFormVisible && (
          <div className="w-[60%] flex flex-col p-5 rounded-lg mb-5">
            <div className="flex flex-col mb-4">
              <label className="text-white text-sm mb-2">User Name</label>
              <input
                type="text"
                value={newComment.userName}
                onChange={(e) =>
                  setNewComment({ ...newComment, userName: e.target.value })
                }
                placeholder="Enter your name"
                className="px-4 py-2 text-white  bg-transparent border-b-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-white text-sm mb-2">Your Comment</label>
              <textarea
                value={newComment.comment}
                onChange={(e) =>
                  setNewComment({ ...newComment, comment: e.target.value })
                }
                placeholder="Enter your comment"
                className="px-4 py-2 bg-transparent border-b-2 border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none h-20"
              ></textarea>
            </div>
            <button
              onClick={handleAddComment}
              className="px-4 py-1 bg-slate-200 text-slate-950 rounded-md hover:bg-slate-600 focus:outline-none hover:text-white focus:ring-2 focus:ring-slate-400"
            >
              Submit
            </button>
          </div>
        )}

        {commentList.map((item, index) => (
          <div className="comments" key={index}>
            <div className="comment-react">
              <button>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#707277"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#707277"
                    d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                  ></path>
                </svg>
              </button>
              <hr />
              <span>14</span>
            </div>
            <div className="comment-container">
              <div className="user">
                <div className="user-pic">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinejoin="round"
                      fill="#707277"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#707277"
                      d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
                    ></path>
                    <path
                      strokeWidth="2"
                      fill="#707277"
                      stroke="#707277"
                      d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                    ></path>
                  </svg>
                </div>
                <div className="user-info">
                  <span>{item.userName}</span>
                  <p>Wednesday, March 13th at 2:45pm</p>
                </div>
              </div>
              <p className="comment-content">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowComment;
