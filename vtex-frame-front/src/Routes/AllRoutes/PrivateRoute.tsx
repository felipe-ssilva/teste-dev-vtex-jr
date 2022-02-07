import { Navigate, Outlet } from "react-router-dom";
import { _LocalStorage } from "../../Static/LocalStorage";

const useAuth = () => {

    if(localStorage.getItem(_LocalStorage.__accessToken) !== null) {
        return true;
    }

    return false;
}

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}



export { ProtectedRoute }