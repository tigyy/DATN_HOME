import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./components/Layouts/LayoutWebsite";
import LayoutAdmin from "./components/Layouts/LayoutAdmin";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";
import Header from "./pages/header";
import ProductsList from "./pages/products";
import Footer from "./pages/Footer";
import Slideshow from "./pages/bannerSlider";
import HomePage from "./pages/homPage";
import Slider from "./pages/slide";
import ProductABC from "./pages/product2";
import HeaderABC from "./pages/header2";
import Dropdown from "./pages/test";



export const router = createBrowserRouter([
    { path: "/", element: <LayoutWebsite />, children: [
        {index: true, element:<HomePage/>},
        // {path:"/product",element:<ProductsList/>}
    ] },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "product",
                element: <AdminProduct />,
            },
            {
                path: "product/add",
                element: <AdminProductAdd />,
            },
            {
                path: "product/:idProduct/edit",
                element: <AdminProductEdit />,
            },
        ],
    },
]);
