import React from "react";

const Challengesfaced = () => {
  return (
    <div className="m-28 flex justify-center ">
      <div className="flex">
        <div className="pt-2">
          <input type="radio" name="radio1" id="radio1" />
        </div>
        {/* <textarea
          className="bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="20"
          placeholder="Select Challenges Type"
        ></textarea> */}
        <div className="pl-4">
          <select
            name="cars"
            id="cars"
            className="p-2 outline-none border border-blue-600"
          >
            <option value="volvo">Select Challenges Type-1</option>
            <option value="saab">Select Challenges Type-2</option>
            <option value="opel">Select Challenges Type-3</option>
            <option value="audi">Select Challenges Type-4</option>
          </select>
        </div>
        <div className="pl-10">
          <textarea
            className=" bg-red-50 p-2 outline-none border border-black "
            id="w3review"
            name="textbox"
            rows="1"
            cols="50"
            placeholder="Enter Some Text Here......"
          ></textarea>
        </div>
      </div>
      <div className="">
        <button className="p-2 bg-blue-600">Resolve Now</button>
      </div>
    </div>
  );
};

export default Challengesfaced;




{/* <div className="flex flex-col-reverse">
        <textarea
          className="mt-3 bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="20"
          placeholder="Select Challenges Type"
        ></textarea>
        <textarea
          className="mt-3 bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="20"
          placeholder="Select Challenges Type"
        ></textarea>
        <textarea
          className="mt-3 bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="20"
          placeholder="Select Challenges Type"
        ></textarea>
      </div>

      <div className="flex flex-col-reverse pl-10">
        <textarea
          className="bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="50"
          placeholder="Enter Some Text Here......"
        ></textarea>
        <textarea
          className="bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="50"
          placeholder="Enter Some Text Here......"
        ></textarea>
        <textarea
          className="bg-red-50 p-2 outline-none border border-black "
          id="w3review"
          name="textbox"
          rows="1"
          cols="50"
          placeholder="Enter Some Text Here......"
        ></textarea>
      </div> */}