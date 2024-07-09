//sir code

// import { useState, useEffect } from "react";

// import toast from "react-hot-toast";
// import authContext from "../contexts/authContext";

// const AuthProvider = ({ children }) => {
//     const [ auth, setAuth ] = useState(null);
//     const [ token, setToken ] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem("token");

//         async function verifyToken() {
//             const response = await fetch("http://localhost:5002/verify", {
//                 method: "POST",
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 }
//             });
//             const res = await response.json();

//             if ( response.status !== 200 ) {
//                 switch (res.err_code) {
//                     case "SESSION_EXPIRED":
//                         toast.error("Session expired!");
//                         break;
//                     case "INVALID_TOKEN":
//                         toast.error("Invalid token!");
//                         break;
//                     default:
//                         toast.error("ASdiaydyaw")
//                         break;
//                 }

//                 setToken(null);
//                 setAuth(null);
//                 // localStorage.clear();
//             }

//             setToken(token);
//             setAuth(res);
//         }
        
//         if (token)
//             verifyToken();
            
//     }, [])
    
//     return (
//         <authContext.Provider value={{
//             auth
//         }}>
//             { children }
//         </authContext.Provider>
//     ) 
// }

// export default AuthProvider;



import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import authContext from "../contexts/authContext";

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        async function verifyToken() {
            const response = await fetch("http://localhost:5002/verify", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${storedToken}`
                }
            });
            const res = await response.json();

            if (response.status !== 200) {
                switch (res.err_code) {
                    case "SESSION_EXPIRED":
                        toast.error("Session expired!");
                        break;
                    case "INVALID_TOKEN":
                        toast.error("Invalid token!");
                        break;
                    default:
                        toast.error("An error occurred!");
                        break;
                }
                setToken(null);
                setAuth(null);
                // localStorage.clear();
            } else {
                setToken(storedToken);
                setAuth(res);
            }
        }

        if (storedToken) verifyToken();
    }, []);

    return (
        <authContext.Provider value={{ auth }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
