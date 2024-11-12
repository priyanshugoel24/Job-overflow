import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Course() {
  return (
    <div>
      <div className="cover flex justify-between bg-indigo-100">
        <div className="cover-img">
          <div className=" p-5 lg:ml-14">
            <Image
              src="/course-cover.png"
              alt="cover"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="cover-text mt-10 mr-14">
          <div className="flex flex-col">
            <div className="heading mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Top <br /> Online Courses <br /> Efficiently
              </h1>
            </div>
            <div className="span-text ml-1">
              <p className="font-semibold">
                Explore a wide range of online courses <br /> across various categories
                easily. <br /> Find the best courses that suit your needs and elevate <br />
                your skills today.
              </p>
            </div>
            <div className="start-button">
              <Link href = "/courses/best-courses">
              <button
                type="button"                
                className="mt-5 lg:mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                  View Courses
              </button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container mx-auto py-16">
          {/* <!-- Logo section --> */}
          <div className="flex justify-center items-center space-x-10 mb-8">
            <Image
              src="skillshare.svg"
              alt="SkillUp"
              width={2000}
              height={2000}
              className="h-10"
            />
            <Image
              src="udemy.svg"
              alt="LearnPro"
              width={1000}
              height={1000}
              className="h-10"
            />
            <Image
              src="coursera.svg"
              alt="EduQuest"
              width={1000}
              height={1000}
              className="h-10"
            />
            <Image
              src="edX.svg"
              alt="CourseHub"
              width={1000}
              height={1000}
              className="h-10"
            />
            <Image
              src="khanacademy.svg"
              alt="Learnify"
              width={1000}
              height={1000}
              className="h-10"
            />
          </div>

          {/* <!-- Trusted section --> */}
          <div className="text-center mb-12 mt-10">
            <p className="text-gray-600">
              Trusted by thousands of learners worldwide
            </p>
          </div>

          {/* <!-- Description section --> */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              Our site provides a curated list of top courses across multiple
              categories and platforms. Understand what's out there and find the
              one that meets your learning requirements, no matter your
              interests or skill level.
            </p>
          </div>

          {/* <!-- Features section --> */}
          <div className="flex justify-center items-start space-x-8">
            {/* <!-- Feature 1 --> */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
              <div className="mb-4">
                <Image
                  src="feature-icon-1.svg"
                  height={15}
                  width={60}
                  alt="Wide Range of Categories"
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Wide Range of Categories
              </h3>
              <p className="text-gray-600">
                Select from countless course categories.
              </p>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
              <div className="mb-4">
                <Image
                  src="feature-icon-2.svg"
                  height={20}
                  width={80}
                  alt="Curated Top Courses"
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Curated Top Courses
              </h3>
              <p className="text-gray-600">
                Get courses handpicked by experts.
              </p>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs">
              <div className="mb-4">
                <Image
                  src="feature-icon-3.svg"
                  height={20}
                  width={80}
                  alt="User Reviews & Ratings"
                  className="h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                User Reviews & Ratings
              </h3>
              <p className="text-gray-600">
                Make informed choices with reviews.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="bg-gray-300 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Stay Updated Weekly</h2>
            <p className="text-gray-700 mb-8">
              Get the latest courses delivered to your inbox.
            </p>

            <div className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 w-64 rounded-l-full border-t border-b border-l border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gray-800 text-white rounded-r-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
