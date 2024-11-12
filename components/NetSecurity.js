import React from "react";
import Course from "./Course";

const networkSecurityCourses = [
  {
    imageSrc: "/course-images/Network Security/course-1.jpeg",
    title: "Microsoft CyberSecurity Analyst",
    provider: "Coursera",
    rate: "₹ 2,699",
  },
  {
    imageSrc: "/course-images/Network Security/course-2.png",
    title: "Managing Network Security",
    provider: "Coursera",
    rate: "₹ 1,799",
  },
  {
    imageSrc: "/course-images/Network Security/course-3.png",
    title: "Introduction to Network Security",
    provider: "Coursera",
    rate: "₹ 2,899",
  },
  {
    imageSrc: "/course-images/Network Security/course-4.jpg",
    title: "Cyber Security: From Beginner to Expert",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/Network Security/course-5.jpg",
    title: "Complete Ethical Hacking Bootcamp",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/Network Security/course-6.jpg",
    title: "Introduction to Computer Networks",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/Network Security/course-7.webp",
    title: "Network Security Foundations",
    provider: "Udemy",
    rate: "₹ 799",
  },
  {
    imageSrc: "/course-images/Network Security/course-8.webp",
    title: "Complete Cyber Security Course: Hackers Exposed",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
];

const NetSecurity = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">
      Network Security
    </h2>
    <div className="course-list flex ">
      {networkSecurityCourses.map((course, index) => (
        <Course
          key={index}
          imageSrc={course.imageSrc}
          title={course.title}
          provider={course.provider}
          rate={course.rate}
        />
      ))}
    </div>
  </div>
);

export default NetSecurity;
