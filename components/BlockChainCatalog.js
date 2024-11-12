import React from "react";
import Course from "./Course";

const blockchainCourses = [
  {
    imageSrc: "/course-images/BlockChain/course-1.jpg",
    title: "Blockchain and Bitcoin Fundamentals",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/BlockChain/course-2.jpg",
    title: "Blockchain A-Z: Build a Blockchain",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/BlockChain/course-3.jpg",
    title: "14 Day Blockchain Developer",
    provider: "Udemy",
    rate: "₹ 2,699",
  },
  {
    imageSrc: "/course-images/BlockChain/course-4.jpg",
    title: "Blockchain: Complete Course for Beginners",
    provider: "Udemy",
    rate: "₹ 2,699",
  },
  {
    imageSrc: "/course-images/BlockChain/course-5.png",
    title: "Blockchain Foundation",
    provider: "Udemy",
    rate: "₹ 3,999",
  },
  {
    imageSrc: "/course-images/BlockChain/course-6.jpeg",
    title: "Introduction to Blockchain Technologies",
    provider: "Coursera",
    rate: "₹ 2,899",
  },
  {
    imageSrc: "/course-images/BlockChain/course-7.jpeg",
    title: "Blockchain Security",
    provider: "Coursera",
    rate: "₹ 2,999",
  },
];

const BlockChainCatalog = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">BlockChain</h2>
    <div className="course-list flex ">
      {blockchainCourses.map((course, index) => (
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

export default BlockChainCatalog;
