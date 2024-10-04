
// // Redirecting to Login page
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const Register = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     async function handleSubmit(event) {
//         event.preventDefault();
//         setLoading(true);
//         const payload = { username, password };

//         try {
//             const response = await fetch("http://localhost:5002/register", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(payload),
//             });

//             const res = await response.json();
//             await new Promise((resolve) => setTimeout(resolve, 400));

//             if (response.status !== 200) {
//                 if (res.err_code === "USER_ALREADY_EXISTS") {
//                     toast.error("User already exists");
//                 } else {
//                     toast.error("Registration failed");
//                 }
//                 setLoading(false);
//                 return;
//             }

//             toast.success("Registered successfully.Redirecting...");
//             setTimeout(() => navigate("/login"), 3000);
//         } catch (error) {
//             toast.error("An error occurred during registration");
//             setLoading(false);
//         }
//     }

//     function handleLoginClick() {
//         navigate("/login");
//     }

//     return (
//         <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
//             <div className="form-container w-80 rounded-lg bg-gray-900 p-8 text-gray-200">
//                 <p className="title text-center text-xl font-bold">Register</p>
//                 <form className="form mt-6" onSubmit={handleSubmit}>
//                     <div className="input-group mt-1 text-sm">
//                         <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
//                         <input
//                             type="text"
//                             name="username"
//                             id="username"
//                             className="w-full rounded-md border border-gray-700 outline-none bg-gray-900 p-3 text-gray-200 focus:border-purple-300"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="input-group mt-1 text-sm">
//                         <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             className="w-full rounded-md border border-gray-700 outline-none bg-gray-900 p-3 text-gray-200 focus:border-purple-300"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <div className="forgot flex justify-end text-xs text-gray-400 mt-2 mb-4">
//                             <a href="#" className="hover:underline hover:text-purple-300">Forgot Password?</a>
//                         </div>
//                     </div>
//                     <button
//                         type="submit"
//                         className="sign w-full bg-purple-300 p-3 text-center text-gray-900 rounded-md font-semibold"
//                         disabled={loading}
//                     >
//                         {loading ? "Signing up..." : "Sign up"}
//                     </button>
//                 </form>
//                 <div className="social-message flex items-center pt-4">
//                     <div className="line flex-1 h-px bg-gray-700"></div>
//                     <p className="message px-3 text-sm text-gray-400">Register with social accounts</p>
//                     <div className="line flex-1 h-px bg-gray-700"></div>
//                 </div>
//                 <div className="social-icons flex justify-center mt-4">
//                     <button aria-label="Register with Google" className="icon rounded-md p-3 bg-transparent ml-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
//                             <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//                         </svg>
//                     </button>
//                     <button aria-label="Register with Twitter" className="icon rounded-md p-3 bg-transparent ml-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
//                             <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
//                         </svg>
//                     </button>
//                     <button aria-label="Register with GitHub" className="icon rounded-md p-3 bg-transparent ml-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
//                             <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.145-1.031 0.557-1.74 1.011-2.141-3.553-0.401-7.289-1.776-7.289-7.901 0-1.744 0.615-3.177 1.635-4.297-0.167-0.406-0.708-2.031 0.151-4.24 0 0 1.333-0.427 4.375 1.635 1.26-0.344 2.615-0.516 3.953-0.521 1.344 0.005 2.703 0.177 3.969 0.521 3.031-2.063 4.359-1.635 4.359-1.635 0.865 2.208 0.323 3.833 0.156 4.24 1.021 1.12 1.635 2.552 1.635 4.297 0 6.135-3.745 7.5-7.312 7.896 0.573 0.495 1.083 1.469 1.083 2.969 0 2.141-0.021 3.865-0.021 4.396 0 0.432 0.281 0.927 1.104 0.771 6.359-2.115 10.937-8.115 10.937-15.183 0-8.833-7.161-16-16-16z"></path>
//                         </svg>
//                     </button>
//                 </div>
//                 <p className="signup-link text-gray-400 mt-12 text-center text-xs">
//                     Already have an account?{" "}
//                     <button
//                         onClick={handleLoginClick}
//                         className="underline text-purple-300 hover:text-purple-600"
//                     >
//                         Sign in
//                     </button>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;













import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const payload = { username, password };

    try {
      const response = await fetch("http://localhost:5002/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const res = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 400));

      if (response.status !== 200) {
        if (res.err_code === "USER_ALREADY_EXISTS") {
          toast.error("User already exists");
        } else {
          toast.error("Registration failed");
        }
        setLoading(false);
        return;
      }

      localStorage.setItem("token", res.token); // Save token to local storage
      toast.success("Registered successfully. Redirecting...");
      setTimeout(() => navigate("/"), 2000); // Redirect to home page after 2 seconds
    } catch (error) {
      toast.error("An error occurred during registration");
      setLoading(false);
    }
  }

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
      <div className="form-container w-80 rounded-lg bg-gray-900 p-8 text-gray-200">
        <p className="title text-center text-xl font-bold">Register</p>
        <form className="form mt-6" onSubmit={handleSubmit}>
          <div className="input-group mt-1 text-sm">
            <label htmlFor="username" className="block text-gray-400 mb-1">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full rounded-md border border-gray-700 outline-none bg-gray-900 p-3 text-gray-200 focus:border-purple-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group mt-1 text-sm">
            <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full rounded-md border border-gray-700 outline-none bg-gray-900 p-3 text-gray-200 focus:border-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot flex justify-end text-xs text-gray-400 mt-2 mb-4">
              <a href="#" className="hover:underline hover:text-purple-300">Forgot Password?</a>
            </div>
          </div>
          <button
            type="submit"
            className="sign w-full bg-purple-300 p-3 text-center text-gray-900 rounded-md font-semibold"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <div className="social-message flex items-center pt-4">
          <div className="line flex-1 h-px bg-gray-700"></div>
          <p className="message px-3 text-sm text-gray-400">Register with social accounts</p>
          <div className="line flex-1 h-px bg-gray-700"></div>
        </div>
        <div className="social-icons flex justify-center mt-4">
          <button aria-label="Register with Google" className="icon rounded-md p-3 bg-transparent ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button aria-label="Register with Twitter" className="icon rounded-md p-3 bg-transparent ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </button>
          <button aria-label="Register with GitHub" className="icon rounded-md p-3 bg-transparent ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-5 w-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.145-1.031 0.557-1.74 1.015-2.143-3.552-0.401-7.288-1.776-7.288-7.916 0-1.748 0.625-3.177 1.646-4.297-0.167-0.401-0.713-2.016 0.156-4.204 0 0 1.339-0.427 4.396 1.635 1.276-0.356 2.641-0.531 4.001-0.541 1.36 0.01 2.723 0.188 4.004 0.541 3.052-2.063 4.391-1.635 4.391-1.635 0.873 2.188 0.328 3.803 0.161 4.204 1.021 1.12 1.645 2.547 1.645 4.297 0 6.156-3.744 7.511-7.303 7.901 0.573 0.495 1.094 1.469 1.094 2.964 0 2.143-0.021 3.865-0.021 4.385 0 0.427 0.287 0.927 1.104 0.77 6.344-2.109 10.927-8.109 10.927-15.177 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-center text-xs mt-4 text-gray-400">
          <p>Already have an account?</p>
          <button
            onClick={handleLoginClick}
            className="ml-1 hover:underline hover:text-purple-300"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
