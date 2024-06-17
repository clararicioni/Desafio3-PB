import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Quality from "../components/Quality";
import InitialSection from "../components/InitialSection";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { handleSubmit, register } = useForm();

  return (
    <div>
      <Navbar />
      <InitialSection pageName="Contact" />
      <div className="font-poppins select-none">
        <div className="flex flex-col justify-center items-center text-center mt-20">
          <section className="text-black text-4xl font-semibold mb-3">
            Get In Touch With Us
          </section>
          <section className="text-grayText text-1xl max-w-644px mb-36">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </section>
        </div>
        <div className="flex lg:flex-row justify-center md:flex-col sm:flex-col">
          <div className="flex flex-col mr-48">
            <div className="flex flex-row mb-10">
              <img
                src="address.png"
                alt="address icon"
                className="max-w-5 max-h-5"
              />
              <div className="flex flex-col ml-5">
                <section className="text-2xl font-medium">Address</section>
                <section className="max-w-48">
                  236 5th SE Avenue, New York NY10000, United States
                </section>
              </div>
            </div>
            <div className="flex flex-row mb-10">
              <img
                src="phone.png"
                alt="address icon"
                className="max-w-5 max-h-5"
              />
              <div className="flex flex-col ml-5">
                <section className="text-2xl font-medium">Phone</section>
                <section className="max-w-48">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </section>
              </div>
            </div>
            <div className="flex flex-row">
              <img
                src="time.png"
                alt="address icon"
                className="max-w-5 max-h-5"
              />
              <div className="flex flex-col ml-5">
                <section className="text-2xl font-medium">Working Time</section>
                <section className="max-w-48 sm:mb-10 md:mb-10">
                  Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                </section>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="flex flex-col">
              <label className="font-medium text-1xl mb-5">Your name</label>
              <input
                type="text"
                {...register('name')}
                placeholder="Abc"
                className="border-grayText outline-none rounded-md h-12 p-4 w-96 mb-10"
                style={{borderWidth:"1px"}}
              />
              <label className="font-medium text-1xl mb-5">Email address</label>
              <input
                type="text"
                placeholder="Abc@def.com"
                className="border-grayText outline-none rounded-md h-12 p-4 w-96 mb-10"
                style={{borderWidth:"1px"}}
              />
              <label className="font-medium text-1xl mb-5">Subject</label>
              <input
                type="text"
                placeholder="This is an optional"
                className="border-grayText outline-none rounded-md h-12 p-4 w-96 mb-10"
                style={{borderWidth:"1px"}}
              />
              <label className="font-medium text-1xl mb-5">Message</label>
              <textarea
                placeholder="Hi! id like to ask about"
                className="resize-none border-grayText outline-none rounded-md h-32 p-4 w-96 mb-10"
                style={{borderWidth:"1px"}}
              />
              <button type='submit'
            className="p-6 max-w-60 max-h-10 bg-yellowPrimary rounded-md text-1xl font-normal 
            text-center items-center justify-center flex text-white hover:opacity-75 mb-20"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
          
      </div>
      <Quality />
      <Footer />
    </div>
  );
};

export default Contact;
