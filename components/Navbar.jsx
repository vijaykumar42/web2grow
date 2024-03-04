import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 md:px-8 flex justify-between items-center border-b h-20">
      <h1 className="font-bold text-2xl cursor-pointer hover:text-primary">
        <Link href="/">Web2Grow</Link>
      </h1>
      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-8">
          <h2 className="font-semibold hover:text-primary">
            <Link href="#services">Services</Link>
          </h2>
          <h2 className="font-semibold hover:text-primary">
            <Link href="#projects">Projects</Link>
          </h2>
          {/* <h2 className="font-semibold hover:text-primary">
            <Link href="#about-us">About Us</Link>
          </h2> */}
        </div>
      </div>
      <Button>
        <Link href="#contact-us">Contact Us</Link>
      </Button>
    </div>
  );
}
