import React from "react";

const AddComment = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">User Name</label>
          <input type="text" id="email" name="email" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required=""
            placeholder="Write your comment here..."
          >
            {" "}
          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddComment;
