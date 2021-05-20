function About() {
  return (
    <div className="mx-5 md:px-10 md:m-0">
      <div className="flex flex-col md:flex-row w-full">
        <div className="pt-3 md:w-1/3 md:text-right md:mr-5">
          <h1>A LITTLE ABOUT ME</h1>
        </div>
        <div className="text-sm py-3 md:w-1/2">
          <p>
            A <mark>bilingual</mark> web developer with an aerospace engineering
            degree now working as a full stack developer for a japanese system
            integration company. Born and raised in the <mark>U.K.</mark> now
            living in <mark>Tokyo</mark>.
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
            on front end and learn more about<mark> UI/UX</mark>. <br />
            <br />
            In my spare time I like to swing a golf club, walk 4 hours in a
            field and make the odd birdie.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="pt-3 md:w-1/3 md:text-right md:mr-5">
          <h1>SOME OF MY SKILLS</h1>
        </div>
        <div className="text-sm py-3 md:w-1/2">
          <div className="flex justify-between">
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
        <a download="Resume.pdf" className="primary-btn">
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
}

export default About;
