
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';


export default function Home() {
 
  return (
    <div>
      <div className=" overscroll-none search-jobs flex ml-3 mr-3 pb-5 ">
        <div className="cover-img">
          <Image src="/cover.png" alt="cover" width={600} height={600} />
        </div>

        <div className="search-bar overscroll-none flex  flex-col">
          <div>
            <h1 className="text-4xl break-words font-bold relative top-52 left-56 ">
              Over <span className="text-blue-600">5000</span> jobs are waiting
              for you
            </h1>
            <span className=" relative top-56 left-[360px]">
              Work with the best companies and <br></br> Hire Experienced
              Professionals
            </span>
          </div>

          <div className="relative left-52 top-80">
            <form className=" bg-whitesmoke w-full max-w-4xl mx-auto">
              <div className="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 bg-whitesmoke inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                  type="button"
                >
                  All categories{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block search-bar  size-16 p-2.5 w-full z-20 text-sm text-gray-900 bg-whitesmoke rounded-e-full border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search Jobs & Internships"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          
        </div>
        
      </div>
      <hr />

      <div className="services mt-10 mb-10">
        <div className="heading">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
        </div>

        <div className="service-cards gap-8 flex justify-between mt-10 ml-10 mr-10">
          <div className="service-card card1 border">
            
            <div className="service-card-text">
              <Link href = "/jobs"><h1 className="text-2xl font-bold">Find Latest Jobs</h1></Link>
              
            </div>
            
          </div>

          <div className="service-card card2 border">
            
            <div className="service-card-text">
              <Link href = "/resume-rater"><h1 className="text-2xl font-bold">Resume Rating</h1></Link>
              
            </div>
           
          </div>

          <div className="service-card card3 border">
            
            <div className="service-card-text">
              <Link href = "/courses"><h1 className="text-2xl font-bold">Best Courses</h1></Link>
              
            </div>
            
          </div>
          
            <div className="service-card card4 border">
              <div className="service-card-text">
              <Link href = "/events"><h1 className="text-2xl font-bold">Upcoming Events</h1></Link>
              
            </div>
            
            
          </div>

        </div>
      </div>

      <hr />


      
      
      


    </div>
  );
}
