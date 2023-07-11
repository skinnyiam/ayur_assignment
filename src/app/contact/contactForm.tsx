"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFirestore from "../hooks/useFirestore";
type Props = {};

const ContactForm = (props: Props) => {
  const { uploadContactData } = useFirestore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tel: "",
  });

  const { name, email, message, tel } = formData;
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      console.log(formData);
      uploadContactData({ formData });
      // Perform formvalidation
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        return;
      }
      setFormData({ name: "", email: "", message: "", tel: "" });
      toast("Your Data is saved is succesfully");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col gap-12 justify-center items-center  w-fit mx-auto ">
      <ToastContainer />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black leading-normal">
          Contact Us
        </h1>
        <p className="pt-4 text-black font-medium">
          Fill up the form our team will contact you in 24 hours
        </p>
      </div>
      <form className="flex gap-4 border border-gray-400 rounded-lg px-8 py-4 ">
        <div>
          <Image src="/contect.avif" width={700} height={700} alt="contact" />
        </div>
        <div className="w-[50%] flex justify-center gap-4 flex-col">
          <div className="flex flex-col gap-3">
            <label className="font-medium">Name:</label>
            <input
              className="outline-none border border-gray-600 p-2 text-black rounded-md"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Email:</label>
            <input
              className="outline-none border border-gray-600 p-2 text-black rounded-md"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Phone Number:</label>
            <input
              className="outline-none border border-gray-600 p-2 text-black rounded-md"
              name="tel"
              value={tel}
              onChange={handleChange}
              type="tel"
              pattern="[0-9]{10}"
              required
            ></input>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Message:</label>
            <textarea
              className="outline-none border border-gray-600 p-2 text-black rounded-md"
              name="message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="flex justify-center items-center">
            <button
              className=" text-white  bg-teal-700 w-fit rounded-md text-xl  px-5 py-2 hover:bg-teal-800 transition-all ease-in-out "
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
