import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import CandCPP from "../assets/CandCPP.png";
import JavaImg from "../assets/JavaImg.png";
import DSA from "../assets/DSA.png";
import CampusRecruitment from "../assets/CRT.png";
import WebDev from "../assets/WebDev.png";
import AndroidDev from "../assets/AndroidDev.png";

// Basics of C and C++
// Java Basic to Advance
// DSA with C++ or Java
// Web Development
// Mobile App Development
// Campus Recruitment Training


const ServicesData = [
  {
    id: 1,
    title: "C or C++ Programming",
    link: "#",
    // icon: <TbWorldWww />,
    icon: CandCPP,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Java Basic to Advance",
    link: "#",
    // icon: <CiMobile3 />,
    icon: JavaImg,
    delay: 0.3,
  },
  {
    id: 3,
    title: "DSA with C++ or Java",
    link: "#",
    icon: DSA,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Web Development",
    link: "#",
    icon: WebDev,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Mobile App Development",
    link: "#",
    icon: AndroidDev,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Campus Recruitment Traning",
    link: "#",
    icon: CampusRecruitment,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Courses We Offer
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <img src={service.icon} />
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
