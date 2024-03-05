import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4 md:px-8 flex justify-between items-center border-b h-20">
      <h1 className="font-bold text-2xl cursor-pointer text-sky-500 hover:text-sky-500/90">
        <Link href="/">KinderGarden</Link>
      </h1>
      <div className="hidden md:block">
        <div className="flex justify-center items-center gap-8">
          <h2 className="font-semibold hover:text-sky-500">
            <Link href="#about-us">About Us</Link>
          </h2>
          <h2 className="font-semibold hover:text-sky-500">
            <Link href="#activities">Activities</Link>
          </h2>
          <h2 className="font-semibold hover:text-sky-500">
            <Link href="#teachers">Teachers</Link>
          </h2>
        </div>
      </div>
      <Button className="bg-sky-500 hover:bg-sky-500/90">
        <Link href="#contact-us">Contact Us</Link>
      </Button>
    </div>
  );
}
