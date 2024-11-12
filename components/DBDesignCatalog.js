import React from "react";
import Course from "./Course";

const databaseDesignCourses = [
  {
    imageSrc: "/course-images/DB-Design/course-1.jpg",
    title: "Fundamentals of Database Engineering",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/DB-Design/course-2.jpg",
    title: "Relational Database Design",
    provider: "Udemy",
    rate: "₹ 2,499",
  },
  {
    imageSrc: "/course-images/DB-Design/course-3.jpg",
    title: "Complete SQL and Database Bootcamp",
    provider: "Udemy",
    rate: "₹ 3,699",
  },
  {
    imageSrc: "/course-images/DB-Design/course-4.jpg",
    title: "SQL and Database Design",
    provider: "Udemy",
    rate: "₹ 3,099",
  },
  {
    imageSrc: "/course-images/DB-Design/course-5.png",
    title: "Database Design and Diagramming in Data",
    provider: "Coursera",
    rate: "₹ 3,999",
  },
  {
    imageSrc: "/course-images/DB-Design/course-6.png",
    title: "Relational Database Design",
    provider: "Coursera",
    rate: "₹ 1,999",
  },
  {
    imageSrc: "/course-images/DB-Design/course-7.jpeg",
    title: "Database Design and BasicSQL",
    provider: "Udemy",
    rate: "₹ 2,999",
  },
];

const DBDesignCatalog = () => (
  <div className="course-catalog">
    <h2 className=" font-sans ml-3 mb-2 font-extrabold text-2xl">
      Database Design
    </h2>
    <div className="course-list flex ">
      {databaseDesignCourses.map((course, index) => (
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

export default DBDesignCatalog;
