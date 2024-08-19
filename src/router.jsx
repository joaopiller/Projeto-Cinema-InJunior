import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import FaleConosco from "./pages/Fale-Conosco";
import Filmes from "./pages/Filmes";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import Sessoes from "./pages/Sessoes";

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
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registrar',
            element: <Registrar/>
        },
        {
            path: '/sessoes',
            element: <Sessoes/>
        }]
    }
])

export default router
