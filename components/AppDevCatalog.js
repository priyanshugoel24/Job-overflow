import React from "react";
import Course from "./Course";

const appDevCourses = [
  {
    imageSrc: "/course-images/AppDevelopment/course-1.jpg",
    title: "The Complete Android 14 Developer Course",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/AppDevelopment/course-2.jpg",
    title: "Android 14 and Kotlin Bootcamp",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/AppDevelopment/course-3.jpg",
    title: "Android 14 Development Bootcamp",
    provider: "Udemy",
    rate: "₹ 2,999",
  },
  {
    imageSrc: "/course-images/AppDevelopment/course-5.jpg",
    title: "The Complete Flutter Bootcamp",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/AppDevelopment/course-6.jpg",
    title: "The Complete iOS Developer Course",
    provider: "Udemy",
    rate: "₹ 2,499",
  },
  {
    imageSrc: "/course-images/AppDevelopment/course-7.jpg",
    title: "Mobile App Development",
    provider: "Udemy",
    rate: "₹ 3,999",
  },
  {
    imageSrc: "/course-images/AppDevelopment/course-8.jpg",
    title: "The Complete iOS Apps Bootcamp",
    provider: "Udemy",
    rate: "₹ 3,999",
  },
];

const AppDevCatalog = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">
      App Development
    </h2>
    <div className="course-list flex ">
      {appDevCourses.map((course, index) => (
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

export default AppDevCatalog;
