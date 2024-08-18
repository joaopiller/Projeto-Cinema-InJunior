import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import FaleConosco from "./pages/Fale-Conosco";
import Filmes from "./pages/Filmes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [{
            index: true,
            element: <Home/>
        },
        {
            path: '/faleconosco',
            element: <FaleConosco/>
        },
        {
            path: '/filmes',
            element: <Filmes />
        }]
    }
])

export default router