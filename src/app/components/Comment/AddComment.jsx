import React from "react";

const AddComment = () => {
  return (
    <div className="w-[60%] flex flex-col p-5 rounded-lg mb-5">
      <div className="flex flex-col mb-4">
        <label className="text-white text-sm mb-2">User Name</label>
        <input
          type="text"
          // value={newComment.userName}
          // onChange={(e) =>
          //   setNewComment({ ...newComment, userName: e.target.value })
          // }
          placeholder="Enter your name"
          className="px-4 py-2 text-white  bg-transparent border-b-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="text-white text-sm mb-2">Your Comment</label>
        <textarea
          // value={newComment.comment}
          // onChange={(e) =>
          //   setNewComment({ ...newComment, comment: e.target.value })
          // }
          placeholder="Enter your comment"
          className="px-4 py-2 bg-transparent border-b-2 border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none h-20"
        ></textarea>
      </div>
      <button
        // onClick={handleAddComment}
        className="px-4 py-1 bg-slate-200 text-slate-950 rounded-md hover:bg-slate-600 focus:outline-none hover:text-white focus:ring-2 focus:ring-slate-400"
      >
        Submit
      </button>
    </div>
  );
};

export default AddComment;
