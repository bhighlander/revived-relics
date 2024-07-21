'use client';
import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
    setEmailError(""); // Clear the error message when the user starts typing
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateEmail(userEmail)) {
      e.preventDefault(); // Prevent form submission
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="__footer-background__ footer flex flex-col md:flex-row justify-between text-white p-4 fixed bottom-0 left-0 w-full z-10">
      <div className="contact-info flex flex-col space-x-4 items-start">
        <Link href="/about">Contact Info</Link>
        <p>Anne-Marie Narey</p>
        <Link href="mailto:nareyannemarie@gmail.com">nareyannemarie@gmail.com</Link>
      </div>

      {/* Right section for Get in Touch and form */}
      <div className="__in-touch__ flex flex-col md:flex-row md:items-end md:justify-end space-y-2">
        <div className="md:mr-4">Get in Touch</div>
        <form
          className="__email-form__ flex space-x-2"
          onSubmit={handleSubmit}
          action={`/contact?email=${encodeURIComponent(userEmail)}`}
          method="GET"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="__email-field__ p-2 rounded bg-white text-black"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <button
            type="submit"
            className="__submit-button__ p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            Submit
          </button>
        </form>
        {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
      </div>
    </div>
  );
}
