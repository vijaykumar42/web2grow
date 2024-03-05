import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBedPulse } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaAmbulance } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";

export default function Main() {
  return (
    <div>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4 md:px-8">
        <div className="flex justify-center items-center">
          <Image src="/healthcare/hero-logo.jpg" width={500} height={400} />
        </div>{" "}
        <div className="flex flex-col justify-start text-center md:text-left md:justify-center gap-4">
          <h1 className="hidden md:block font-bold text-4xl md:text-6xl">
            Stay Safe,
          </h1>
          <h1 className="hidden md:block font-bold text-4xl md:text-6xl text-teal-500">
            Stay Healthy
          </h1>
          <h1 className="md:hidden font-bold text-4xl md:text-6xl">
            Stay Safe, <span className="text-teal-500"> Stay Healthy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            aspernatur est ut sapiente beatae impedit eaque adipisci earum
            dignissimos perspiciatis autem voluptates facilis, minus vel culpa
            vitae praesentium minima cumque.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <Link className="flex gap-2" href="#about-us">
              <Button
                className="bg-teal-500 hover:bg-teal-500/90 rounded"
                size="lg"
              >
                ABOUT US
              </Button>
            </Link>
            <Link className="flex gap-2" href="#services">
              <Button
                className="bg-teal-500 hover:bg-teal-500/90 rounded"
                size="lg"
              >
                SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* about us section */}
      <div id="about-us" className="space-y-4 py-16 px-4 md:px-32 bg-teal-50">
        <h2 className="font-bold text-3xl md:text-4xl text-center">About Us</h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          recusandae explicabo veniam ipsam fugit nostrum blanditiis itaque est
          doloremque qui! Sed, ullam vitae? Vel quos maiores id delectus vitae
          ex.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaUserDoctor className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">20+</h2>
            <p className="text-muted-foreground">Doctors at Work</p>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaPeopleGroup className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">1040+</h2>
            <p className="text-muted-foreground">Happy Patients</p>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaBedPulse className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">50+</h2>
            <p className="text-muted-foreground">Bed Facility</p>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaClinicMedical className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">7+</h2>
            <p className="text-muted-foreground">Avaliable Medicals</p>
          </div>
        </div>
      </div>
      {/* services */}
      <div id="services" className="space-y-4 py-16 px-4 md:px-16">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Our Services
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          recusandae explicabo veniam ipsam fugit nostrum blanditiis itaque est
          doloremque qui! Sed, ullam vitae? Vel quos maiores id delectus vitae
          ex.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <RiHealthBookFill className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">Free Checkup</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              recusandae, illum similique mollitia laudantium a, laboriosam,
              perferendis officia placeat modi error.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-500/90 rounded">
              Know More
            </Button>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaUserDoctor className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">Expert Doctors</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              recusandae, illum similique mollitia laudantium a, laboriosam,
              perferendis officia placeat modi error.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-500/90 rounded">
              Know More
            </Button>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaAmbulance className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">24/7 Ambulance</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              recusandae, illum similique mollitia laudantium a, laboriosam,
              perferendis officia placeat modi error.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-500/90 rounded">
              Know More
            </Button>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <GiMedicines className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">Medicine</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              recusandae, illum similique mollitia laudantium a, laboriosam,
              perferendis officia placeat modi error.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-500/90 rounded">
              Know More
            </Button>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaBedPulse className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">Bed Facility</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              recusandae, illum similique mollitia laudantium a, laboriosam,
              perferendis officia placeat modi error.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-500/90 rounded">
              Know More
            </Button>
          </div>
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaHeartbeat className="text-teal-500" size={50} />
            <h2 className="text-xl font-bold">Total Care</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              recusandae, illum similique mollitia laudantium a, laboriosam,
              perferendis officia placeat modi error.
            </p>
            <Button className="bg-teal-500 hover:bg-teal-500/90 rounded">
              Know More
            </Button>
          </div>
        </div>
      </div>
      {/* doctors */}
      <div id="doctors" className="space-y-4 py-16 px-4 md:px-8 bg-teal-50">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Our Doctors
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          recusandae explicabo veniam ipsam fugit nostrum blanditiis itaque est
          doloremque qui! Sed, ullam vitae? Vel quos maiores id delectus vitae
          ex.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className=" flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/healthcare/about-logo.png"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Doctor</p>
          </div>

          <div className="flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/healthcare/about-logo.png"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Doctor</p>
          </div>
          <div className="flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/healthcare/about-logo.png"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Doctor</p>
          </div>
          <div className="flex flex-col items-center border-2 border-teal-500 p-8 rounded space-y-2 bg-teal-50 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              className="rounded-full"
              src="/healthcare/about-logo.png"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold">Lorem Ipsum</h2>
            <p className="text-muted-foreground">Doctor</p>
          </div>
        </div>
      </div>
      {/* contact-us */}
      <div id="contact-us" className="px-4 md:px-16 py-16 space-y-4">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          cum quo, illum reprehenderit, enim eligendi aspernatur explicabo
          incidunt sint iste sed dolores voluptatem. Nam hic reiciendis quos
          accusamus, illum ea?
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="md:col-start-2 border-2 border-teal-500 p-4 rounded space-y-2 bg-teal-50 text-center">
            <FaSquarePhone className="text-teal-500 mx-auto" size={40} />
            <h2 className="text-xl font-bold">Call Here</h2>
            <p className="text-muted-foreground font-medium">+91 987654321</p>
          </div>
          <div className="border-2 border-teal-500 p-4 rounded space-y-2 bg-teal-50 text-center">
            <FaSquareWhatsapp className="text-teal-500 mx-auto" size={40} />
            <h2 className="text-xl font-bold">WhatsApp</h2>
            <p className="text-teal-500 font-medium">
              <Link href="#">+91 987654321</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
