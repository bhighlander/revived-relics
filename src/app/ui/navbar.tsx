import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between bg-gray-800 text-white p-4">
            <div className="flex items-center space-x-4">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="flex items-center">
                <Image 
                    src="/logotransparent.png"
                    width={50}
                    height={50}
                    alt="Revived Relics" 
                />
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    );
}
