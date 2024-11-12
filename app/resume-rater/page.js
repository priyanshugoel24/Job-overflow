"use client";
import React, { useState } from "react";
import Image from "next/image";

const ResumeRater = () => {
  return (
    <div>
      <div className="coverpage flex justify-evenly bg-gradient-to-r from-indigo-200 from-30% to-sky-300 to-90% h-[500px] ">
        <div className="file-upload flex flex-col items-stretch">
          <div className="heading ml-32 mt-20">
            <h2 className="text-5xl font-semibold ">
              Is your resume good enough ?
            </h2>
          </div>
          <div className="sub-heading "></div>
          <p className="text-lg ml-32 mt-10 text-purple-950">
            A free and fast AI resume checker doing 16 crucial checks to ensure
            your resume is ready to perform and get you interview callbacks.
          </p>

          <div className=" mt-6 ml-20 file-input">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-[400px] h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="cover-img ml-40"></div>
        <Image
          src="/resume-checker.svg"
          alt="resume-checker"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
};

export default ResumeRater;
