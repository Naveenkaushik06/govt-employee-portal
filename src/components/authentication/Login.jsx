import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "/home/naveen/Desktop/govt-employee-portal/src/styles/authentication.css";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");

  const handleShowHidePass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="signin-container">
      <div className="pt-10  ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="form-container rounded-3xl w-full md:w-4/12 absolute p-10 md:p-12 bg-white my-0 md:my-1 mx-auto right-0 left-0  opacity-80"
        >
          <div className="flex justify-center flex-col">
            <h2 className="">Welcome!</h2>
            <h3 className=" font-medium mt-2 text-xl">Sign in to</h3>
          </div>
          
          <div className="mt-3">
          <label className=" text-black mt-1" htmlFor="username">
            Employee ID
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Employee ID"
            className="opacity-80 p-2 md:p-4 my-4 w-full rounded-lg text-black border border-gray-500 custom-transition shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:shadow-blue-300"
          />
          </div>
          <label className=" text-black" htmlFor="pass">
            Password
          </label>
          <div className="flex">
            <input
              type={showPass ? "text" : "password"}
              id="pass"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="opacity-80 relative -2 md:p-4 my-4 w-full rounded-lg text-black border border-gray-500 custom-transition shadow appearance-none py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 focus:shadow-blue-300"
            />
            {showPass ? (
              <span className="password-toggle-icon">
                <i>
                  <FaEyeSlash onClick={handleShowHidePass} />
                </i>
              </span>
            ) : (
              <span className="password-toggle-icon">
                <i>
                  <FaEye onClick={handleShowHidePass} />
                </i>
              </span>
            )}
          </div>
          <div>
            <input type="checkbox" />
            <label className="m-3">remember me</label>
          </div>
          <button className="font-bold text-xl p-2 md:p-4 my-2 md:my-4 bg-blue-600 hover:bg-blue-700 transition-all w-full rounded-lg">
            Sign in
          </button>
          <p className="md:px-10 px-2 py-2 md:py-2 font-semibold text-xs">
            <span className="opacity-70">Forgotten password? </span>
            <span className="cursor-pointer hover:underline">
              Forget Password
            </span>
          </p>
          <p className="md:px-10 px-2 py-2 md:py-2">
            Don't have an Account?
            <span className="font-bold cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
