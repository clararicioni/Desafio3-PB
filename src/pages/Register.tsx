import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../services/firebaseConfig";

export function Register (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password);
  }
  if(loading){
    return <p>Carregando...</p>
  }
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center font-poppins">
    <div className="bg-white p-8 shadow-md w-96 rounded-lg">
    <div className="flex items-center">
          <img src="logo.png" alt="logo" className="w-16 h-16" />
          <h2 className="text-3xl font-bold">Furniro</h2>
        </div>
        <h2 className="text-2xl text-darkGrayText font-bold mb-4">Register</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full border border-gray-300 rounded px-3 py-2 outline-none" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full border border-gray-300 rounded px-3 py-2 outline-none" />
            </div>
            <div className="flex justify-between">
                <button onClick={handleSignOut} type="submit" className="bg-yellowPrimary hover:opacity-75 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
            </div>
            <p className="text-center mt-4">
            Already have an account? 
          <a
            href="/login"
            className="text-blue-500 font-semibold hover:underline"
          >Log-in
          </a>
        </p>
        </form>
    </div>
  </div>
  )
}

export default Register
