import React from "react";
import Course from "./Course";

const gameDevCourses = [
  {
    imageSrc: "/course-images/Game Development/course-1.jpg",
    title: "Game Development with C#",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/Game Development/course-2.jpg",
    title: "Game Design Masterclass",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/Game Development/course-3.jpg",
    title: "Unity Game Development",
    provider: "Udemy",
    rate: "₹ 2,899",
  },
  {
    imageSrc: "/course-images/Game Development/course-4.jpg",
    title: "The Ultimate Guide to Game Development with Unity",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/Game Development/course-5.jpg",
    title: "Unreal Engine- Gameplay Ability System",
    provider: "Udemy",
    rate: "₹ 799",
  },
  {
    imageSrc: "/course-images/Game Development/course-6.jpeg",
    title: "Game Design Document",
    provider: "Coursera",
    rate: "₹ 899",
  },
  {
    imageSrc: "/course-images/Game Development/course-7.png",
    title: "Game Development Using Scratch",
    provider: "Coursera",
    rate: "₹ 1,699",
  },
  {
    imageSrc: "/course-images/Game Development/course-8.png",
    title: "3D Interaction Design in Virtual Reality",
    provider: "Udemy",
    rate: "₹ 3,999",
  },
];

const GameDevCatalog = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">
      Game Development
    </h2>
    <div className="course-list flex ">
      {gameDevCourses.map((course, index) => (
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

export default GameDevCatalog;
