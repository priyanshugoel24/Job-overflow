import React from "react";
import Course from "./Course";

const aiCourses = [
  {
    imageSrc: "/course-images/Artificial Intelligence/course-1.png",
    title: "Artificial Intelligence A-Z 2024",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/Artificial Intelligence/course-2.jpeg",
    title: "The Complete A.I and ML Bootcamp",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/Artificial Intelligence/course-3.jpg",
    title: "The Complete Artificial Intelligence and ChatGPT Course",
    provider: "Udemy",
    rate: "₹ 799",
  },
  {
    imageSrc: "/course-images/Artificial Intelligence/course-4.png",
    title: "Artificial Intelligence for Businesses",
    provider: "Udemy",
    rate: "₹ 3,499",
  },
  {
    imageSrc: "/course-images/Artificial Intelligence/course-5.jpeg",
    title: "Modern Artificial Intelligence Masterclass",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/Artificial Intelligence/course-6.webp",
    title: "Machine Learning for Absolute Beginners",
    provider: "Udemy",
    rate: "₹ 3,299",
  },
  {
    imageSrc: "/course-images/Artificial Intelligence/course-7.jpeg",
    title: "Artificial Intelligence with Machine Learning",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
];

const AICatalog = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">
      Artificial Intelligence
    </h2>
    <div className="course-list flex ">
      {aiCourses.map((course, index) => (
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

export default AICatalog;
