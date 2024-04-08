import React from "react";
import AssignedTask from "./AssignedTask";
// import Taskcompleted from "./Taskcompleted"
// import Taskinprogress from "./Taskinprogress"
// import Planforthenextday from "./Planforthenextday"
import { Link, useParams } from "react-router-dom";

const DailyAssessment = () => {
  
  const { taskassign } = useParams();
  console.log(taskassign);

  return (
    <div>
      <h1>users</h1>
      
      
    </div>
  );
};
export default DailyAssessment;

// import * as React from "react";
// import { Link } from "react-router-dom";

// function UsersIndexPage({ users }) {
//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <Link to={user.id}>{user.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
