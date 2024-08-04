import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Form, RouterProvider, createBrowserRouter } from "react-router-dom";
import TeamSection from "./components/TeamSection.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/faculty",
    element: <TeamSection/>,
  },
  {
    path: "/gallery",
    element: <Gallery/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
