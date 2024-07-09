
import { useContext } from "react";
import authContext from "../contexts/authContext";

function useAuth() {
    const auth = useContext(authContext);
    return auth;
}

export default useAuth;
