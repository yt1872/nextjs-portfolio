import React from "react";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ja } from "../locales/ja";

function About() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ja;
  return (
    <div className="w-5/6 lg:w-3/5 mx-auto max-w-6xl" id="about">
      <div className="">
        <div>
          <h1>{t.aboutTitle}</h1>
          <div className="sectionUnderline"></div>
        </div>
        <div className="mb-4">
          <div dangerouslySetInnerHTML={{ __html: t.about1 }} />
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: t.about2 }} />
          <br />
          <br />
          <div dangerouslySetInnerHTML={{ __html: t.about3 }} />
          <br />
          <div dangerouslySetInnerHTML={{ __html: t.about4 }} />
        </div>
      </div>
      <div className="mt-24 mb-4 relative">
        <div>
          <h1>{t.skillsTitle}</h1>
          <div className="sectionUnderline"></div>
        </div>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-4">
          <div className="skillsGroup">
            <h3>{t.frontend}</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skillsGroup">
            <h3>{t.backend}</h3>
            <ul>
              <li>C#</li>
              <li>.NET</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
          <div className="skillsGroup">
            <h3>{t.other}</h3>
            <ul>
              <li>Git</li>
              <li>SQL</li>
              <li>NEXT.js</li>
              <li>Azure</li>
            </ul>
          </div>
          <div className="skillsGroup">
            <h3>{t.tools}</h3>
            <ul>
              <li>VS Code</li>
              <li>Figma</li>
              <li>SSMS</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="pt-8 justify-center flex"
      >
        <a href="/resume.pdf" download="Resume.pdf" className="primary-btn">
          {t.downloadResume}
        </a>
      </div>
    </div>
  );
}

export default About;
