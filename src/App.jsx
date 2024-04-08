import "./App.css";

import { Outlet, createBrowserRouter } from "react-router-dom";
import Logo from "./components/homepage/Logo";
import NavBar from "./components/homepage/NavBar";
import Footer from "./components/homepage/Footer"
import Homepage from "./components/homepage/Home";
import Attendance from "./components/attendance/Attendance";
import DailyAssessment from "./components/dailyassessment/DailyAssessment";
import MonitorSystem from "./components/monitorsystem/MonitorSystem";
import Report from "./components/report/Report";
import User from "./components/user/User";
import Error from "./components/Error";
import Header from "./components/homepage/Header";
import AssignedTask from "./components/dailyassessment/AssignedTask";
// import Taskcompleted from "./components/dailyassessment/Taskcompleted"
// import Taskinprogress from "./components/dailyassessment/Taskinprogress"
// import Planforthenextday from "./components/dailyassessment/Planforthenextday"

const AppLayout = () => {
  return (
    <div className="app">
      <Logo />
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/dailyassessment",
        element: <DailyAssessment />,
        children:[
          {
            path: "/dailyassessment/:taskassign",
            element: <AssignedTask />,
          }
          
        ]
      },
      {
        path: "/monitorsystem",
        element: <MonitorSystem />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
