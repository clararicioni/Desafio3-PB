import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, FacebookAuth, GoogleAuth } from "../services/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleFacebookAuth = async () => {
    try {
      const user = await FacebookAuth();
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao autenticar com Facebook:", error);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const user = await GoogleAuth();
      if (user) {
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao autenticar com Google:", error);
    }
  };

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    navigate("/");
    return null;
  }

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center font-poppins">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <button
              type="submit"
              className="bg-green-800 hover:opacity-75 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleFacebookAuth}
              className="mt-5 bg-blue-800 hover:opacity-75 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login with Facebook
            </button>
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="mt-5 bg-red-800 hover:opacity-75 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login with Google
            </button>
          </div>
        </form>
        {error && (
          <p className="flex justify-center text-center font-bold font-poppins text-md text-red-900 mt-6">
            Error - {error.message}
          </p>
        )}
        <p className="text-center mt-4">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
