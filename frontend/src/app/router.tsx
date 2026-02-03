import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoutes";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import UserDashboard from "../pages/user/UserDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Unauthorized from "../pages/Unauthorized";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/auth/login",
        element: <Login />
    },
    {
        path: "/auth/signup",
        element: <Signup />
    },
    {
        path: "/user/dashboard",
        element: (
            <ProtectedRoute role="user">
                <UserDashboard />
            </ProtectedRoute>
        )
    },
    {
        path: "/admin/dashboard",
        element: (
            <ProtectedRoute role="admin">
                <AdminDashboard />
            </ProtectedRoute>
        )
    },
    {
        path: "/unauthorized",
        element: <Unauthorized />

    }
    // {
    //     path: "/user",
    //     element: (
    //         <ProtectedRoute role="user">
    //             <UserLayout />
    //         </ProtectedRoute>
    //     ),
    //     children: [
    //         { path: "dashboard", element: <UserHome /> },
    //         { path: "history", element: <UserHistory /> },
    //         { path: "profile", element: <UserProfile /> },
    //         { path: "bloodrequests", element: <UserRequest/>},
    //         {path: "donate", element: <UserDonate/>},
    //         { index: true, element: <Navigate to="home" replace /> },
    //     ],
    // },


])