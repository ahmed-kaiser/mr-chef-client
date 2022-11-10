import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import Profile from "../pages/Profile/Profile";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import Services from "../pages/Services/Services";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import RequiredAuth from "../private_routes/RequiredAuth";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/services',
                    element: <Services />,
                    loader: () => fetch('http://localhost:5000/services')
                },
                {
                    path: '/services/:id',
                    element: <ServiceDetail />,
                    loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                },
                {
                    path: '/signIn',
                    element: <SignIn />
                },
                {
                    path: '/signUp',
                    element: <SignUp />
                },
                {
                    path: '/myReviews',
                    element: <RequiredAuth><MyReviews /></RequiredAuth>
                },
                {
                    path: '/addService',
                    element: <RequiredAuth><AddService /></RequiredAuth>
                },
                {
                    path: '/profile',
                    element: <RequiredAuth><Profile/></RequiredAuth>
                },
                {
                    path: '/blog',
                    element: <Blog />
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;