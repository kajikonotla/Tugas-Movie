import { Button } from "../components/ui/Button"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    console.log("Button clicked!");
    navigate("/home");
  };

  return (
    <>
      {/* Background Section */}
      <div
        className="bg-cover bg-center min-h-screen relative"
      >
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-opacity-0 backdrop-blur-sm"></div>

        {/* Login Card */}
        <div className="flex justify-center items-center h-screen relative z-10">
          <fieldset className="bg-black rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
            {/* Avatar / Logo */}

            {/* Title */}
            <legend className="text-2xl font-bold text-white mb-2">
              GIDLIX
            </legend>
            <p className="text-sm text-white mb-6">You Can Wacthc Movie Free Here</p>

            {/* Input Fields */}
            <label className="block text-left text-sm text-white mb-1">Email</label>
            <input
              type="email"
              className="input input-bordered w-full mb-4"
              placeholder="Email"
            />

            <label className="block text-left text-sm text-white mb-1">Password</label>
            <input
              type="password"
              className="input input-bordered w-full mb-6"
              placeholder="Password"
            />

            {/* Login Button */}
            <Button label="Login" onClick={handleStart} />
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Login;
