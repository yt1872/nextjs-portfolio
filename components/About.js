import React, { useRef, useEffect } from "react";

function About() {
  return (
    <div className="mx-6 md:w-2/3 md:m-auto" id="about">
      <div>
        <div
          data-sal="slide-right"
          data-sal-easing="ease"
          data-sal-duration="500"
          data-sal-once
        >
          <h1 className="mb-4">A little about me</h1>
        </div>
        <div
          data-sal="slide-left"
          data-sal-easing="ease"
          data-sal-duration="500"
          data-sal-once
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
            ready skills to start a career in web development. I studied{" "}
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
      <div className="mb-6">
        <div
          className="mb-4 mt-6"
          data-sal="slide-right"
          data-sal-easing="ease"
          data-sal-duration="500"
          data-sal-once
        >
          <h1>Some of my skills</h1>
        </div>
        <div
          data-sal="slide-left"
          data-sal-easing="ease"
          data-sal-duration="500"
          data-sal-once
        >
          <div className="flex justify-between">
            <div>
              <h3>FRONTEND</h3>
              <div>
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
            <div>
              <h3>BACKEND</h3>
              <div>
                <ul>
                  <li>&gt; C#</li>
                  <li>&gt; .NET Core</li>
                  <li>&gt; Ruby</li>
                  <li>&gt; Rails</li>
                </ul>
              </div>
            </div>
            <div>
              <h3>OTHER</h3>
              <div>
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
      <div
        className="text-center"
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="500"
      >
        <a href="/CV2021.pdf" download="Resume.pdf" className="primary-btn">
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}

export default About;
