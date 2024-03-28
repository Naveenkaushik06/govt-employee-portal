import React from "react";
import "/home/naveen/Desktop/govt-employee-portal/src/styles/assignedtask.css";
const AssignedTask = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="font-bold underline pt-10">Recent Assigned Task</h1>
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
            <td className="text-center">Pending/Completed</td>
          </tr>
          <tr>
            <td className="text-center">2.</td>
            <td className="text-center">Project Title 2</td>
            <td className="text-center">....work is alloted to team 2 and Team leader is Mr.....</td>
            <td className="text-center">01-01-2025</td>
            <td className="text-center">01-02-2025</td>
            <td className="text-center">HEAD OF DEPT...</td>
            <td className="text-center">Pending/Completed</td>
          </tr>
          <tr>
            <td className="text-center">3.</td>
            <td className="text-center">Project Title 3</td>
            <td className="text-center">....work is alloted to team 2 and Team leader is Mr.....</td>
            <td className="text-center">01-01-2025</td>
            <td className="text-center">01-02-2025</td>
            <td className="text-center">HEAD OF DEPT...</td>
            <td className="text-center">Pending/Completed</td>
          </tr>
          <tr>
            <td className="text-center">4.</td>
            <td className="text-center">Project Title 4</td>
            <td className="text-center">....work is alloted to team 2 and Team leader is Mr.....</td>
            <td className="text-center">01-01-2025</td>
            <td className="text-center">01-02-2025</td>
            <td className="text-center">HEAD OF DEPT...</td>
            <td className="text-center">Pending/Completed</td>
          </tr>
          <tr>
            <td className="text-center">5.</td>
            <td className="text-center">Project Title 5</td>
            <td className="text-center">....work is alloted to team 2 and Team leader is Mr.....</td>
            <td className="text-center">01-01-2025</td>
            <td className="text-center">01-02-2025</td>
            <td className="text-center">HEAD OF DEPT...</td>
            <td className="text-center">Pending/Completed</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AssignedTask;
