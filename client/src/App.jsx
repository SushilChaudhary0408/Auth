import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AuthProvider from "./providers/AuthProvider";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ProtectedRoute from "./routes/ProctectedRoute";

function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Home />
        },
      ]
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  )
}

export default App
