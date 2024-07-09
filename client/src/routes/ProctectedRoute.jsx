
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("Auth status:", auth); // Debugging log
        if (!auth) {
            navigate("/login");
        }
    }, [auth, navigate]);
    
    return <Outlet />;
}

export default ProtectedRoute;
