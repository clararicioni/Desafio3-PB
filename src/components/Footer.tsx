import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEmail } from "../redux/user/actions";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const validateEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      dispatch(saveEmail(email));
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
      setErrorMessage("Invalid email format.");
    }
  };

  return (
    <footer className="flex flex-col text-black bg-white bottom-0 w-full items-center bg-blend-multiply md:pb-14 md:pt-20 md:px-24 md:h-[35.75rem] font-poppins outline-none">
      <div className="flex flex-col h-full justify-between border-b border-borderColor w-full mb-7 md:flex-row">
        <div className="w-full flex flex-col mb-8 items-center md:mb-6 md:items-start md:w-fit">
          <h1 className="font-bold mb-5 text-2xl">Funiro.</h1>
          <div className="text-base text-grayText mb-5">
            <p className="max-w-68">400 University Drive Suite 200 Coral</p>
            <p className="max-w-64">Gables,</p>
            <p className="max-w-64">FL 33134 USA</p>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com/?locale=pt_BR"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/face.png" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/insta.png" alt="Instagram" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <img src="/twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="w-full flex flex-row justify-center text-center md:text-left md:pr-5 md:w-fit md:items-start">
          <div className="flex pr-10 mb-4 md:mb-0 md:pr-10">
            <ul className="mr-10">
              <li className="text-1xl text-grayText font-medium mb-4">Links</li>
              <li>
                <Link
                  to="/home"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex pr-10 mb-4 md:mb-0 md:pr-10">
            <ul className="mr-10">
              <li className="text-1xl text-grayText font-medium mb-4">Help</li>
              <li>
                <Link
                  to="/aboutus"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="font-medium transition-all hover:underline hover:text-primaryAvacado"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex pr-10 mb-4 md:mb-0 md:pr-10">
            <ul>
              <li className="text-1xl text-grayText font-medium mb-4">
                Newsletter
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="outline-none underline p10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <button
                  className="font-medium underline"
                  onClick={handleSubmit}
                >
                  SUBSCRIBE
                </button>
              </li>
              {isValid && <li>Email:{email}</li>}
              {!isValid && errorMessage && (
                <li className="text-red-500">{errorMessage}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-2 md:flex-row items-center justify-between">
        <section className="flex md:hidden justify-center text-center whitespace-nowrap">
          2023 furino. All rights reverved
        </section>
        <section className="hidden md:flex justify-end text-center">
          2023 furino. All rights reverved
        </section>
      </div>
    </footer>
  );
};

export default Footer;
