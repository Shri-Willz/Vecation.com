import ReactDOM from 'react-dom/client';
import App from './App';
import NotFound from "../src/ui/component/NotFound/notfound"
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import Navbar from "./ui/component/NavBar/navbar.jsx";
import Footer from "./ui/component/Footer/smfooter.jsx";
import Flights from "./ui/component/Flights/Flights.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: '/flights',
        element: <Flights />,
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
    <>
    <RouterProvider router={router} />
    </>
    </StrictMode>

);