import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import Catagory from "../../Components/Catagory/Catagory";
import News from "../../Components/News/News";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/catagory/id",
        element: <Catagory></Catagory>,
      },
      {
        path: "/news/id",
        element: <News></News>,
      },
    ],
  },
]);
