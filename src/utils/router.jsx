import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Components/Home/Home";

import DonationCampaigns from "../Components/DonationCampaigns/DonationCampaigns";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

import PrivateRoute from "../routes/PrivateRoute";
import Dashboard from './../Components/dashboard/Dashboard';
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import ErrorPage from './../Components/ErrorPage/ErrorPage';
import UpdateProfile from "../Components/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/DonationCamp",
                element: <DonationCampaigns />,
                loader: () => fetch('/donationData.JSON'),
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: "/campaign/:id",
                element: <PrivateRoute><DetailsPage /></PrivateRoute>,
                loader: () => fetch('/donationData.JSON'),
            },
            {
                path: "*",
                element: <ErrorPage />
            },
            {
                path: "updateProfile",
                element: <UpdateProfile />

            }


        ]

    }
])


export default router;