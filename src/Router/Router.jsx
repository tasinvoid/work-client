import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../All-Page/Home/Home";
import Error from "../All-Page/Error/Error";
import BranchesList from "../All-Page/BranchesList/BranchesList";
import StudentsList from "../All-Page/StudentsList/StudentsList";
import CourseList from "../All-Page/CourseList/CourseList";
import StudentResult from "../All-Page/StudentResult/StudentResult";
import OnlineExam from "../All-Page/OnlineExam/OnlineExam";
import Institutes from "../All-Page/Institutes/Institutes";
import PrivateRouts from "../Routs/PrivateRouts";
import Login from "../All-Page/Authintications/Login";
import Register from "../All-Page/Authintications/Register";
import DashBoardLayout from "../layouts/DashBoardLayout";
import AddCourse from "../DashBoardPages/AddCourse";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "CourseList",
        element: (
          <PrivateRouts>
            <CourseList />
          </PrivateRouts>
        ),
        loader: () => fetch("http://localhost:5000/numberOfCourses"),
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "Register",
        element: <Register></Register>,
      },
      {
        path: "BranchesList",
        element: (
          <PrivateRouts>
            <BranchesList />
          </PrivateRouts>
        ),
      },
      {
        path: "StudentsList",
        element: (
          <PrivateRouts>
            {" "}
            <StudentsList />
          </PrivateRouts>
        ),
      },
      {
        path: "StudentResult",
        element: (
          <PrivateRouts>
            <StudentResult />
          </PrivateRouts>
        ),
      },
      {
        path: "OnlineExam",
        element: (
          <PrivateRouts>
            <OnlineExam />
          </PrivateRouts>
        ),
      },
      {
        path: "Institutes",
        element: (
          <PrivateRouts>
            {" "}
            <Institutes />
          </PrivateRouts>
        ),
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: (
      <PrivateRouts>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRouts>
    ),
    children: [
      {
        path: "/dashBoard/addCourse",
        Component: AddCourse,
      },
    ],
  },
]);

export default Router;
