import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="px-4 pt-12 pb-4 md:px-8 border-t text-center space-y-4">
      <div className="flex justify-center items-center gap-4">
        <Link href="#">
          <FaLinkedin
            size={30}
            className="text-teal-500 hover:scale-125 transition-transform duration-300 ease-in-out"
          />
        </Link>
        <Link href="#">
          <FaSquareWhatsapp
            size={30}
            className="text-teal-500 hover:scale-125 transition-transform duration-300 ease-in-out"
          />
        </Link>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2024 All Rights Reserved by HealthCare. Developed by DMVK
      </p>
    </div>
  );
}
