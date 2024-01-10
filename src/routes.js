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

import Minister from "./views/pages/Minister";
import MinistryHuman from "./views/pages/MinistryHuman";
import MinistryHousing from "./views/pages/MInistryHousing";
import PrayerRequest from "./views/pages/PrayerRequest";
import StudyMaterials from "./views/pages/StudyMaterials";
import StudyIntro from "./views/pages/StudyIntro";
import PrayerRegards from "./views/pages/PrayerRegards";
import LiveStream from "./views/pages/LiveStream";
import Sermons from "./views/pages/Sermons";
import ShowEventVideo from "./views/pages/ShowVideo";
import Donate from "./views/pages/Donate";
import AllUpcomings from "./views/pages/AllUpcomings";
import EventDetail from "./views/pages/EventDetail";
import SermonDetail from "./views/pages/SermonDetail";
import Blog from "./views/pages/Blog";
import AllBlogData from "./views/pages/AllBlogData";


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
    { path: "/prayer-regards", element: <PrayerRegards /> },
    {
      path: "minister",
      element: <Minister />,
    },
    {
      path: "ministerHuman",
      element: <MinistryHuman />,
    },
    {
      path: "ministerHousing",
      element: <MinistryHousing />,
    },
    {
      path: "prayer-request",
      element: <PrayerRequest />,
    },
    {
      path: "study-materials",
      element: <StudyMaterials />,
    },
    {
      path: "study-intro",
      element: <StudyIntro />,
    },
    {
      path: 'live-stream',
      element: <LiveStream />
    },
    {
      path: 'sermons',
      element: <Sermons />
    },
    {
      path: 'eventVideo',
      element: <ShowEventVideo />
    },
    {
      path: 'donate',
      element: <Donate />
    },
    {
      path: 'upcomings',
      element: <AllUpcomings />
    },
    {
      path: 'eventDetail',
      element: <EventDetail />
    },
    {
      path: '/sermonDetail',
      element: <SermonDetail />
    },
    {
      path: '/allBlogDetail',
      element: <AllBlogData />
    }

  ]);
  return element;
}
