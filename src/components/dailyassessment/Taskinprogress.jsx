import React from "react";

const Taskinprogress = () => {
  return (
    <div className="m-8">
      <div className="flex justify-between ml-12 mr-12 mt-5">
        <label className="m-2 p-2 border border-spacing-2 text-center">
          Task Title
        </label>
        <label className="m-2 p-2 border border-spacing-2">
          Task Description
        </label>
        <label className="m-2 p-2 border border-spacing-2">
          Task Assigned By
        </label>
      </div>

      <div className="flex justify-between ml-12 mr-12 mt-5 ">
        <input
          type="text"
          placeholder="Task Title"
          className="outline-none border border-black rounded-sm p-1 text-center opacity-70 "
        />
        <input
          type="text"
          placeholder="Task Details"
          className="outline-none border border-black rounded-sm p-1 text-center opacity-70"
        />
        <input
          type="text"
          placeholder="Task Assigned By"
          className="outline-none border border-black rounded-sm p-1 text-center opacity-70"
        />
      </div>

      <div className="flex justify-between ml-12 mr-12 mt-5">
        <label className="m-2 p-2 border border-spacing-2 text-center">
          Start Date
        </label>
        <label className="m-2 p-2 border border-spacing-2 text-center">
          End Date
        </label>
      </div>

      <div className="flex justify-between ml-12 mr-12 mt-5 ">
        <input
          type="text"
          placeholder="Project Starting Date"
          className="outline-none border border-black rounded-sm p-1 text-center opacity-70 "
        />
        <button className="pl-10 pr-10 pt-1 pb-1 m-1 bg-blue-600 ">
          Search
        </button>
        <input
          type="text"
          placeholder="Project End Date"
          className="outline-none border border-black rounded-sm p-1 text-center opacity-70"
        />
      </div>

      <div className="pt-10 pl-5 pr-5">
        <table>
          <tr>
            <th className="text-center">S.N</th>
            <th className="text-center">Project Title</th>
            <th className="text-center">Project/Work Details</th>
            <th className="text-center">Start Date</th>
            <th className="text-center">End Date</th>
            <th className="text-center">Assigned by</th>
            <th className="text-center">Project Status</th>
          </tr>
          <tr>
            <td className="text-center">1.</td>
            <td className="text-center">Project Title 1</td>
            <td className="text-center">....work is alloted to team 2 and Team leader is Mr.....</td>
            <td className="text-center">01-01-2025</td>
            <td className="text-center">01-02-2025</td>
            <td className="text-center">HEAD OF DEPT...</td>
            <td className="text-center text-blue-400 font-bold">In - Process</td>
          </tr>
          <tr>
            <td className="text-center">2.</td>
            <td className="text-center">Project Title 2</td>
            <td className="text-center">....work is alloted to team 2 and Team leader is Mr.....</td>
            <td className="text-center">01-01-2025</td>
            <td className="text-center">01-02-2025</td>
            <td className="text-center">HEAD OF DEPT...</td>
            <td className="text-center text-blue-400 font-bold">In - Process</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Taskinprogress;
