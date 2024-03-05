import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Main() {
  return (
    <div>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4 md:px-8">
        <div className="flex flex-col justify-start text-center md:text-left md:justify-center gap-4">
          <h1 className="hidden md:block font-bold text-4xl md:text-6xl">
            Welcome to our
          </h1>
          <h1 className="hidden md:block font-bold text-4xl md:text-6xl text-sky-500">
            KinderGarden
          </h1>
          <h1 className="md:hidden font-bold text-4xl md:text-6xl">
            Welcome to <span className="text-sky-500">KinderGardens</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            aspernatur est ut sapiente beatae impedit eaque adipisci earum
            dignissimos perspiciatis autem voluptates facilis, minus vel culpa
            vitae praesentium minima cumque.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <Button className="bg-sky-500 hover:bg-sky-500/90" size="lg">
              <Link className="flex gap-2" href="#about-us">
                ABOUT US
              </Link>
            </Button>
            <Button className="bg-sky-500 hover:bg-sky-500/90" size="lg">
              <Link className="flex gap-2" href="#activities">
                ACTIVITIES
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/school/hero-logo.jpg" width={500} height={250} />
        </div>
      </div>
      {/* about us section */}
      <div
        id="about-us"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4 md:px-8 bg-sky-50"
      >
        <div className="flex justify-center items-center">
          <Image src="/school/about-image.png" width={500} height={250} />
        </div>
        <div className="flex flex-col justify-start text-center md:text-left md:justify-center gap-4">
          <h1 className="font-bold text-4xl">About Us</h1>
          <p className="text-lg text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            aspernatur est ut sapiente beatae impedit eaque adipisci earum
            dignissimos perspiciatis autem voluptates facilis, minus vel culpa
            vitae praesentium minima cumque.
          </p>
          <p className="text-lg text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            aspernatur est ut sapiente beatae impedit eaque adipisci earum
            dignissimos perspiciatis autem voluptates facilis, minus vel culpa
            vitae praesentium minima cumque.
          </p>
          <p className="text-lg text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            aspernatur est ut sapiente beatae impedit eaque adipisci earum
            dignissimos perspiciatis autem voluptates facilis, minus vel culpa
            vitae praesentium minima cumque.
          </p>
        </div>
      </div>
      {/* activities */}
      <div id="activities" className="space-y-4 py-16 px-4 md:px-8">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Our Activities
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          recusandae explicabo veniam ipsam fugit nostrum blanditiis itaque est
          doloremque qui! Sed, ullam vitae? Vel quos maiores id delectus vitae
          ex.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/abc.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Games</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/book.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Reading Class</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/ball.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Sport Class</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/count.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Counting Class</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/puzzle.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Recreation</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/art.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Arts Class</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/art.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Music Class</h2>
          </div>
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-sky-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src="/school/art.png" width={60} height={60} />
            <h2 className="text-xl font-bold">Fun Class</h2>
          </div>
        </div>
      </div>
      {/* teachers */}
      <div id="teachers" className="space-y-4 py-16 px-4 md:px-8 bg-sky-50">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Our Teachers
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          recusandae explicabo veniam ipsam fugit nostrum blanditiis itaque est
          doloremque qui! Sed, ullam vitae? Vel quos maiores id delectus vitae
          ex.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className=" flex flex-col items-center border p-8 rounded-md space-y-2 bg-white text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/school/teacher.jpeg"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Teacher</p>
          </div>

          <div className="flex flex-col items-center border p-8 rounded-md space-y-2 bg-white text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/school/teacher.jpeg"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Teacher</p>
          </div>
          <div className="flex flex-col items-center border p-8 rounded-md space-y-2 bg-white text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/school/teacher.jpeg"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Teacher</p>
          </div>
          <div className="flex flex-col items-center border p-8 rounded-md space-y-2 bg-white text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/school/teacher.jpeg"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Teacher</p>
          </div>
        </div>
      </div>
      {/* contact-us */}
      <div id="contact-us" className="px-4 md:px-8 py-16 space-y-4">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          cum quo, illum reprehenderit, enim eligendi aspernatur explicabo
          incidunt sint iste sed dolores voluptatem. Nam hic reiciendis quos
          accusamus, illum ea?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="border p-8 rounded-md space-y-2 bg-sky-50 text-center">
            <FaSquarePhone className="text-sky-500 mx-auto" size={40} />
            <h2 className="text-xl font-bold">Call Here</h2>
            <p className="text-muted-foreground font-medium">+91 987654321</p>
          </div>
          <div className="border p-8 rounded-md space-y-2 bg-sky-50 text-center">
            <FaSquareWhatsapp className="text-sky-500 mx-auto" size={40} />
            <h2 className="text-xl font-bold">WhatsApp</h2>
            <p className="text-sky-500 font-medium">
              <Link href="#">+91 987654321</Link>
            </p>
          </div>
          <div className="border p-8 rounded-md space-y-2 bg-sky-50 text-center">
            <MdEmail className="text-sky-500 mx-auto" size={40} />
            <h2 className="text-xl font-bold">Mail Here</h2>
            <p className="text-sky-500 font-medium">
              <Link href="#">contact@KinderGarden</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
