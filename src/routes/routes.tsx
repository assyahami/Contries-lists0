import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/Spinner";
const Countries = lazy(() => import("../pages/Countries"));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={<Loading />}><Countries /></Suspense>,
    },
    {
        path: '*',
        element: <h1>404 page</h1>
    }
])

export default routes