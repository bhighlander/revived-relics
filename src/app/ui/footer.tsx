import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="__footer-background__ flex flex-col md:flex-row justify-between bg-purple-950 text-white p-4">
      <div className="__contact-info__ flex space-x-4">
        <Link href="/about">Contact Info</Link>
      </div>

      {/* Right section for Get in Touch and form */}
      <div className="__in-touch__ flex flex-col md:flex-row md:items-end md:justify-end space-y-2">
        {/* This div will align to the right on medium screens and up */}
        <div className="md:mr-4">Get in Touch</div>
        <form className="__email-form__ flex space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="__email-field__ p-2 rounded bg-white text-black"
          />
          <button
            type="submit"
            className="__submit-button__ p-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
