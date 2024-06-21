import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Quality from "../components/Quality";
import InitialSection from "../components/InitialSection";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { ContactFormData } from "../redux/user/types";
import { saveContactInfo } from "../redux/user/actions";

type ContactInfoProps = {
  icon: string;
  title: string;
  info: string;
};

const Contact: React.FC = () => {
  const dispatch = useDispatch();
  const contactInfo = useSelector(
    (state: RootState) => state.userReducer.contactInfo
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [savedMessageVisible, setSavedMessageVisible] = useState(false);

  const validateEmail = (value: string) => {
    if (!value.includes(".com")) {
      return "Email must contain '.com'";
    }
    return true;
  };

  const onSubmit = (data: ContactFormData) => {
    dispatch(saveContactInfo(data));
    setSavedMessageVisible(true);
  };

  return (
    <div className="font-poppins select-none">
      <Navbar />
      <InitialSection pageName="Contact" />
      <div className="container mx-auto px-4 lg:px-0">
        <div className="text-center mt-20">
          <h2 className="text-4xl font-semibold mb-3">Get In Touch With Us</h2>
          <p className="text-grayText text-lg max-w-lg mx-auto mb-10">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-20">
          <div className="mb-10 lg:mb-0">
            <ContactInfo
              icon="address.png"
              title="Address"
              info="236 5th SE Avenue, New York NY10000, United States"
            />
            <ContactInfo
              icon="phone.png"
              title="Phone"
              info="Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
            />
            <ContactInfo
              icon="time.png"
              title="Working Time"
              info="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full">
            <div className="flex flex-col">
              <label className="font-medium text-lg mb-2">Your name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your name"
                className={`border-grayText outline-none rounded-md border-1px p-2 h-12 px-4 mb-4 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && errors.name.type === "required" && (
                <span className="text-red-500 text-sm mb-4">
                  Name is required
                </span>
              )}

              <label className="font-medium text-lg mb-2">Email address</label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                  validate: validateEmail,
                })}
                placeholder="Enter your email"
                className={`border-grayText outline-none rounded-md border-1px p-2 h-12 px-4 mb-4 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && typeof errors.email === "string" && (
                <span className="text-red-500 text-sm mb-4">
                  {errors.email}
                </span>
              )}

              <label className="font-medium text-lg mb-2">Subject</label>
              <input
                type="text"
                {...register("subject")}
                placeholder="Enter subject (optional)"
                className="border-grayText outline-none rounded-md border-1px p-2 h-12 px-4 mb-4"
              />

              <label className="font-medium text-lg mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Enter your message"
                className={`resize-none border-grayText outline-none rounded-md border-1px p-2 h-32 px-4 mb-4 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm mb-4">
                  Message is required
                </span>
              )}

              <button
                type="submit"
                className="py-3 max-w-60 bg-yellowPrimary rounded-md mb-5 text-lg text-white hover:opacity-75"
              >
                Submit
              </button>
            </div>
            {savedMessageVisible && (
              <div className="mt-4 mb-4">
                <p className="font-medium text-black">Informações salvas:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>{`Name: ${contactInfo.name}`}</li>
                  <li>{`Email: ${contactInfo.email}`}</li>
                  <li>{`Subject: ${contactInfo.subject}`}</li>
                  <li>{`Message: ${contactInfo.message}`}</li>
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
      <Quality />
      <Footer />
    </div>
  );
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, info }) => (
  <div className="flex items-center mb-8">
    <img src={icon} alt={`${title} icon`} className="max-w-7 max-h-7 mr-3" />
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="max-w-xs">{info}</p>
    </div>
  </div>
);

export default Contact;
