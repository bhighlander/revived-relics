import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="__footer-background__ flex flex-col md:flex-row justify-between bg-purple-950 text-white p-4">
      <div className="__contact-info__ flex space-x-4">
        <Link href="/about">Contact Info</Link>
      </div>

      <div className="__contact-footer__ flex flex-col items-center md:items-end space-y-2"></div>
      <Link href="/contact">Get in Touch</Link>
      <form className="__email-form__ flex flex-col space-y-2">
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
  );
}
