import React from "react";

const Additionalnotes = () => {
  return (
    <div className="flex justify-center items-center mt-36  flex-col">
      <textarea
        className="p-2 outline-none border border-black "
        id="w3review"
        name="textbox"
        rows="5"
        cols="50"
        placeholder="Enter Some Text Here......"
      ></textarea>
      <button className="mt-10 pl-10 pr-10 pt-1 pb-1 m-1 bg-blue-600 ">
        Submit
      </button>
    </div>
  );
};

export default Additionalnotes;
