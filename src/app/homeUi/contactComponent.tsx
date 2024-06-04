'use client';
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
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Get in Touch</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        >
          Submit
        </button>
        {emailError && <p className="text-red-500 text-center mt-2">{emailError}</p>}
      </form>
    </div>
  );
}
