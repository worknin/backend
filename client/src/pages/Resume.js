import React from "react";
import "../assets/css/pages/resume.css";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <>
      <div className="container">
        <h1>Resume</h1>
      </div>
      <div className="container">
        <h3>SUMMARY</h3>
        <hr />
        <p>
          Independent and creative developer well versed with ___________. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Able to analyze code and engineer well researched, cost effective and
          responsive solutions.
        </p>
      </div>

      <div className="container">
        <h3>EXPERIENCE</h3>
        <hr />
        <p>Feb 2022 – Present</p>
        <p>PROJECT ENGINEER</p>
        <p>Wipro Technologies Pvt. Ltd. – Pune, MH, India</p>
        <p>
          <ul>
            <li>Developed </li>
            <li>
              Lorem ipsum dolor sit amet. Sed quaerat itaque qui unde galisum et
              rerum voluptas aut tempora repellat! Et quisquam velit sit
              voluptate unde 33 laboriosam voluptates.
            </li>
            <li>
              Ut dicta doloribus est voluptatum quae hic nihil consequatur in
              magni facilis non voluptate totam aut obcaecati veritatis. Id
              autem praesentium non internos iste ut sint reprehenderit sit
              magni adipisci aut alias dolores.
            </li>
          </ul>
        </p>
      </div>
      <div className="container">
        <h3>EDUCATION</h3>
        <hr />
        <table>
          <tr>
            <th>Qualification</th>
            <th>Year</th>
            <th>School/College</th>
            <th>University/Board</th>
            <th>Marks</th>
          </tr>
          <tr>
            <td>B. Tech (EE)</td>
            <td>2020-21</td>
            <td>N. K. Orchid College of Engineering and Technology, Solapur</td>
            <td>Dr. Babasaheb Ambedkar Technological University, Lonere</td>
            <td>9.46 CGPA (1st Rank)</td>
          </tr>
          <tr>
            <td>Diploma (EE)</td>
            <td>2016-17</td>
            <td>Government Polytechnic, Solapur</td>
            <td>Maharashtra State Board of Technical Education, Mumbai</td>
            <td>89.27 % (2nd Rank)</td>
          </tr>
          <tr>
            <td>HSC-MCVC</td>
            <td>2014-15</td>
            <td>Kuchan High School Junior College, Solapur</td>
            <td rowspan="2">
              Maharashtra State Board of Secondary and Higher Secondary
              Education
            </td>

            <td>84.31 % (1st Rank)</td>
          </tr>
          <tr>
            <td>SSC</td>
            <td>2012-13</td>
            <td>Shree Datta Prashala & Junior College, Solapur</td>
            <td>62.20 %</td>
          </tr>
        </table>
      </div>
      <div className="container">
        <h3>PROJECTS</h3>
        <ol>
          <li>e-Commerce Management System</li>
          <li>Learning Management System</li>
          <li>Patient Management System</li>
          <li>
            <div className="container">
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    BMS Project
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/bms"
                  >
                    Abstract
                  </Link>
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                &nbsp;
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GitHub
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                &nbsp;
                <a
                  href="https://youtu.be/LOPvXc7VNtQ"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  YouTube 1
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                &nbsp;
                <a
                  href="https://youtu.be/xJm-i-xCgKA"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  YouTube 2
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                &nbsp;
                <a
                  href="https://youtu.be/4feYvAwEUqw"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  YouTube 3
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                &nbsp;
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  URL
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div className="container">
        <h3>INTERNSHIPS</h3>
      </div>
      <div className="container">
        <h3>ACADEMIC PROJECT EXPERIENCE</h3>
      </div>
      <div className="container">
        <h3>HOBIES</h3>
      </div>
      <div className="container">
        <h3>LANGUAGES</h3>
      </div>
    </>
  );
}
