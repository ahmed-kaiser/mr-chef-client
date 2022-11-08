import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ServiceDetail from "../pages/ServiceDetail/ServiceDetail";
import Services from "../pages/Services/Services";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
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
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;