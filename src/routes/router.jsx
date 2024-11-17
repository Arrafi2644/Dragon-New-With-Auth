import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import News from "../Layouts/News/News";
import Error from "../Layouts/Error/Error";
import CategoryNews from "../components/CategoryNews";
import NewsDetails from "../components/NewsDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoutes from "../routes/PrivateRoutes";
import About from "../Layouts/About/About";
import Career from "../Layouts/Career/Career";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            }
        ]

    },

    {
        path: '/news/:id',
        element: <PrivateRoutes><NewsDetails></NewsDetails></PrivateRoutes>,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: '/auth/login',
        element: <Login></Login>
    },
    {
       path: '/auth/register',
       element: <Register></Register>
    },
    {
        path: 'news',
        element: <News></News>
    },
    {
     path: '/about',
     element: <About></About>
    },
    {
     path: '/career',
     element: <Career></Career>
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;