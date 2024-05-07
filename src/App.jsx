import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
    useNavigate
} from "react-router-dom";
import { Login } from './pages/login/Login'
import { ShopCar } from './pages/shop-car/ShopCar'
import { NoFound } from "./pages/no-found/NoFound";
import { useEffect, useState } from "react";

export const App = () => {

    const [isLogin, setIsLogin] = useState(false)
    const [previousPath, setPreviousPath] = useState(null);

    const handleLogin = () => {
        setIsLogin(true);
        // Redirige a la ruta originalmente solicitada si existe, de lo contrario, a la ruta predeterminada
        setPreviousPath(path);
    };

    const miFuncion = (params) => {
        console.log("desde el padre:", params);
    }   

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login bus={miFuncion} />} />
                <Route path="/shop" element={<ShopCar />} />
                <Route path="*" element={<NoFound />} />
            </Routes>
        </BrowserRouter>
    )
}