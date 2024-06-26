import Layout from "./componant/layout";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./componant/Home/home";
import OurShopS from "./componant/ourshop/ourshop";
import ACTIVITIES from "./componant/Activities/Activities";

import Whoweare from "./componant/blog/Whoweare";
import Coaches from "./componant/our-Coaches/0ur-Coaches.jsx";
import Error from "./componant/error";
import Contact from "./componant/contact-page/contact.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "Activities", element: <ACTIVITIES /> },
        { path: "ourshop", element: <OurShopS /> },
        { path: "whoweare", element: <Whoweare /> },
        { path: "coaches", element: <Coaches /> },
        { path: "contact", element: <Contact/> },
   
        { path: "*", element: <Error /> },
      ],
    },
  ]);
  return (
    <div className="componant-width">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
