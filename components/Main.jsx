import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { MdScreenSearchDesktop } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdDesignServices } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const services = [
  {
    icon: MdWeb,
    service: "Website Design",
    description:
      "Craft visually appealing and user-friendly websites tailored to your brand's identity and objectives.",
  },
  {
    icon: CgWebsite,
    service: "Website Development",
    description:
      "Build both static and dynamic websites using cutting-edge technologies to meet your specific business requirements.",
  },
  {
    icon: MdScreenSearchDesktop,
    service: "Search Engine Optimization",
    description:
      "Increase your website's visibility and rank higher on search engine results pages to attract more organic traffic.",
  },
  {
    icon: HiOutlineDesktopComputer,
    service: "Search Engine Marketing (SEM)",
    description:
      "Drive targeted traffic to your website through paid advertising campaigns on search engines like Google.",
  },
  {
    icon: MdDesignServices,
    service: "Logo Design",
    description:
      "Create a unique and memorable logo that represents your brand identity and resonates with your target audience.",
  },
  {
    icon: FaPeopleGroup,
    service: "Social Media Marketing",
    description:
      "Engage with your target audience and build brand awareness through strategic social media campaigns across platforms.",
  },
];

const projects = [
  {
    name: "I Like Calculator",
    service: "Web Development",
    link: "https://www.ilikecalculator.com/",
  },
  {
    name: "AiToolsForThat",
    service: "Web Development",
    link: "https://www.aitoolsforthat.com/",
  },
  {
    name: "Aadhyantha Academy",
    service: "Web Development",
    link: "https://www.aadhyanthaacademy.com/",
  },
];

export default function () {
  return (
    <div>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 px-4 md:px-8">
        <div className="flex flex-col justify-start text-center md:text-left md:justify-center gap-4">
          <h1 className="font-bold text-4xl md:text-6xl">Grow Online Today</h1>
          <p className="text-lg text-muted-foreground">
            Budget-friendly web design, development, and digital marketing
            solutions specifically designed to the needs of small businesses.
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <Button size="lg">
              <Link className="flex gap-2" href="#services">
                <FaLongArrowAltRight size={20} />
                SERVICES
              </Link>
            </Button>
            <Button size="lg">
              <Link className="flex gap-2" href="#projects">
                <FaLongArrowAltRight size={20} />
                PROJECTS
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image src="/hero-image.jpeg" width={500} height={250} />
        </div>
      </div>
      {/* services */}
      <div
        id="services"
        className="bg-primary-foreground rounded-md space-y-4 py-16 px-4 md:px-8"
      >
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Services We Provided
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Explore our versatile services, including website design, development,
          and digital marketing solutions, designed to elevate your online
          presence and drive business growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service) => (
            <div className="border p-8 rounded-md space-y-2 bg-white text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
              {<service.icon className="text-primary mx-auto" size={50} />}

              <h2 className="text-xl font-bold">{service.service}</h2>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* projects */}
      <div id="projects" className="space-y-4 py-16 px-4 md:px-8">
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Our Recent Projects
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          Check out our latest projects show casing our expertise in web design,
          web development, and digital marketing, high lighting our tailored
          solutions for clients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project) => (
            <div className="border p-8 rounded-md space-y-2 bg-primary-foreground text-center md:hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-muted-foreground text-sm font-medium">
                {project.service}
              </p>
              <Button>
                <Link href={project.link}>View Website</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* contact-us */}
      <div
        id="contact-us"
        className="px-4 md:px-8 py-16 space-y-4 bg-primary-foreground"
      >
        <h2 className="font-bold text-3xl md:text-4xl text-center">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-center md:px-48">
          At Web2Grow, we're passionate about helping businesses succeed online.
          With our expertise in web design, development, and digital marketing,
          we craft tailored solutions to elevate your brand and drive growth.
          Let's work together to bring your vision to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="border p-8 rounded-md space-y-2 bg-white text-center">
            <FaSquarePhone className="text-primary mx-auto" size={40} />
            <h2 className="text-xl font-bold">Call Here</h2>
            <p className="text-muted-foreground text-sm font-medium">
              +91 9848012345
            </p>
          </div>
          <div className="border p-8 rounded-md space-y-2 bg-white text-center">
            <FaSquareWhatsapp className="text-primary mx-auto" size={40} />
            <h2 className="text-xl font-bold">WhatsApp</h2>
            <p className="text-primary text-sm font-medium">
              <Link href="https://wa.me/#">+91 9848012345</Link>
            </p>
          </div>
          <div className="border p-8 rounded-md space-y-2 bg-white text-center">
            <MdEmail className="text-primary mx-auto" size={40} />
            <h2 className="text-xl font-bold">Mail Here</h2>
            <p className="text-primary text-sm font-medium">
              <Link href="#">contact@web2grow.in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
