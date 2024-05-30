'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactComponent() {
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
    e.preventDefault();
    if (!validateEmail(userEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    // If the email is valid, navigate to the contact page
    window.location.href = `/contact?email=${encodeURIComponent(userEmail)}`;
  };

  return (
    <div className="contact-component">
      <div className="md:mr-4">Get in Touch</div>
      <form className="__email-form__ flex space-x-2" onSubmit={handleSubmit}>
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
  );
}
