import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import AdminDashboard from "./layouts/Dashboard/AdminDashboard";
import ContactUs from "./views/pages/ContactUs";
import Blog from "./views/pages/Blog";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "admin",
      element: <AdminDashboard />,
      children: [],
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <SignUp /> },
      ],
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/admin-login",
      element: <AdminLogin />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);
  return element;
}
