import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  let aboutMeTitle = useRef(null);
  let aboutMeText = useRef(null);
  let skillsTitle = useRef(null);
  let skillsList = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutMeTitle,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutMeTitle,
        },
      }
    );
    gsap.fromTo(
      aboutMeText,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutMeText,
        },
      }
    );
    gsap.fromTo(
      skillsTitle,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsTitle,
        },
      }
    );
    gsap.fromTo(
      skillsList,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skillsList,
        },
      }
    );
  });
  return (
    <div className="mx-5 md:pt-16 md:px-10 md:m-0" id="about">
      <div className="flex flex-col md:flex-row w-full">
        <div
          className="pt-3 md:w-1/3 md:text-right md:mr-5"
          ref={(el) => (aboutMeTitle = el)}
        >
          <h1>A LITTLE BIT ABOUT ME</h1>
        </div>
        <div
          className="text-sm py-3 px-2 md:w-1/2 leading-6"
          ref={(el) => (aboutMeText = el)}
        >
          <p>
            A <mark>bilingual</mark> web developer with an aerospace engineering
            degree now working as a full stack developer for a Japanese system
            integration company. Born and raised in the &#127468;&#127463;{" "}
            <mark>U.K.</mark> now living in &#127471;&#127477;<mark>Tokyo</mark>
            .
            <br />
            <br />
            During my degree I studied subjects ranging from aero propulsion to
            project management. This allowed me to attain{" "}
            <mark>technical knowledge</mark> and <mark>problem solving</mark>{" "}
            skills as well as be educated on the life cycle of an engineering
            project and the importance of management.
            <br />
            <br />
            After graduation, I attended a coding bootcamp to gain industry
            ready skills to start a career in web development I studied{" "}
            <mark>graphic design</mark> at school and always had a keen eye for
            aesthetics and fine detail. Now looking for opportunities to focus
            on front end and learn more about
            <mark> UI/UX</mark>. <br />
            <br />
            In my spare time I like to swing a golf club, walk 4 hours in a
            field and make the odd birdie.{" "}
            <span className="text-lg">
              &#127948;&#65039;&#8205;&#9794;&#65039;
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div
          className="pt-3 md:w-1/3 md:text-right md:mr-5"
          ref={(el) => (skillsTitle = el)}
        >
          <h1>SOME OF MY SKILLS</h1>
        </div>
        <div className="text-sm py-3 md:w-1/2" ref={(el) => (skillsList = el)}>
          <div className="flex justify-evenly leading-6">
            <div className="">
              <h3>FRONTEND</h3>
              <div className="py-1">
                <ul>
                  <li>&gt; HTML</li>
                  <li>&gt; CSS</li>
                  <li>&gt; JavaScript</li>
                  <li>&gt; React</li>
                  <li>&gt; GSAP</li>
                  <li>&gt; jQuery</li>
                </ul>
              </div>
            </div>
            <div className="">
              <h3>BACKEND</h3>
              <div className="py-1">
                <ul>
                  <li>&gt; C#</li>
                  <li>&gt; .NET Core</li>
                  <li>&gt; Ruby</li>
                  <li>&gt; Rails</li>
                </ul>
              </div>
            </div>
            <div className="">
              <h3>OTHER</h3>
              <div className="py-1">
                <ul>
                  <li>&gt; Git</li>
                  <li>&gt; SQL</li>
                  <li>&gt; Design</li>
                  <li>&gt; UI/UX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 justify-center flex">
        <a href="/resume.pdf" download="Resume.pdf" className="primary-btn">
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}

export default About;
