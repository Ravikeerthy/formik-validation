import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import CreateUser from "./components/CreateUser";
import AddAuthor from "./components/AddAuthor";
import EditUser from "./components/EditUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastStyle = {
  backgroundColor: "black",
  color: "white",
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const App = () => {
  useEffect(() => {
    toast.success("Welcome to Online Library management Dash Board!", {
      style: toastStyle,
    });

    setTimeout(() => {
      toast.info("Click on the button to create a new user", {
        style: toastStyle,
      });
    }, 5000);
  }, []);

  const cardData = [
    {
      title: "Books",
      count: 850,
      icon: "fa-solid fa-book",
    },
    {
      title: "Authors",
      count: 600,
      icon: "fa-solid fa-user",
    },
    {
      title: "Users",
      count: 50,
      icon: "fa-solid fa-users",
    },
    {
      title: "Categories",
      count: 200,
      icon: "fa-solid fa-list-ul",
    },
  ];
  const router = createBrowserRouter([
    {
      element: <NavBar />,
      children: [
        {
          path: "/",
          element: <DashBoard cardData={cardData} />,
        },
        {
          path: "/createuser",
          element: <CreateUser />,
        },
        {
          path: "/",
          element: <EditUser />,
        },
        {
          path: "/",
          element: <AddAuthor />,
        },
      ],
    },
  ]);

  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
