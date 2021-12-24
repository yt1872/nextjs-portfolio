import React, { useRef, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiCsharp,
  SiDotnet,
  SiRuby,
  SiRubyonrails,
  SiFigma,
  SiGit,
  SiAdobexd,
} from "react-icons/si";
import { FiDatabase } from "react-icons/fi";

function About() {
  return (
    <div className="w-5/6 lg:w-3/5 mx-auto" id="about">
      {/* <div className="h-full md:h-3/5 w-screen absolute left-0 mt-20 bg-cyan-600 -skew-y-6"></div> */}
      <div className="">
        <div>
          <h1>A little bit about me</h1>
          <div className="sectionUnderline"></div>
        </div>
        <p className="mb-4">
          A <mark>bilingual</mark> web developer with an aerospace engineering
          degree now working as a full stack developer for a Japanese system
          integration company. Born and raised in the <mark>U.K.</mark>{" "}
          &#127468;&#127463; now living in <mark>Tokyo</mark>{" "}
          &#127471;&#127477;.
          <br />
          <br />
          After graduating from university, the original plan was to pursue a
          career in aviation but I decided to choose a different path. The tech
          industry struck something in my heart and decided to become a software
          engineer. Although my degree equipped me with a{" "}
          <mark>technical background</mark>, I needed industry ready{" "}
          <mark>web development skills</mark> so I attended a coding bootcamp.
          <br />
          <br />
          Although learning the <mark>full stack</mark> was incredibly valuable,
          I particularly enjoyed the <mark>frontend</mark> portion of the
          curriculum. It reminded me of my interest in design and the time when
          I studied <mark>graphic design</mark> at school. Now looking for
          opportunities to focus on frontend and learn more about
          <mark> UI/UX</mark>. <br />
          <br />
          In my spare time I like to swing a golf club, walk 4 hours in a field
          and make the odd birdie.{" "}
          <span className="text-lg">
            &#127948;&#65039;&#8205;&#9794;&#65039;
          </span>
        </p>
      </div>
      <div className="mt-24 mb-4 relative">
        <div>
          <h1>Some of my skills</h1>
          <div className="sectionUnderline"></div>
        </div>
        {/* <div className="flex justify-between flex-wrap"> */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
          <div className="skillsGroup">
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skillsGroup">
            <h3>Backend</h3>
            <ul>
              <li>C#</li>
              <li>.NET</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
          <div className="skillsGroup">
            <h3>Other</h3>
            <ul>
              <li>Git</li>
              <li>SQL</li>
              <li>NEXT.js</li>
              <li>Azure</li>
            </ul>
          </div>
          <div className="skillsGroup">
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>SSMS</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="pt-8 justify-center flex">
        <a href="/resume.pdf" download="Resume.pdf" className="primary-btn">
          Download resume
        </a>
      </div>
    </div>
  );
}

export default About;
