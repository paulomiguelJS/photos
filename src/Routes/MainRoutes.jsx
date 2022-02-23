import { useRoutes } from "react-router-dom";
import Album from "../Pages/Album/Album";
import Home from "../Pages/Home/Home";
import Photo from "../Pages/Photo/Photo";


const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/album", element: <Album /> },
    { path: "/photos", element: <Photo /> },
  ]);
};

export default MainRoutes;
