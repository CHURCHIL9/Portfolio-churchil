import { useEffect, useRef, useState } from "react";
import LanguageProficiency from "./Language/LanguageProficiency";
import SkillProgressBar from "./SkillProgress/SkillProgress";
import CircleProgressBar from "./Circleprogress/CirclePreogressBar";
import { FaCheck } from "react-icons/fa6";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div
      ref={ref}
      className={`px-5 fade-in ${
        isVisible ? "visible" : ""
      } grid grid-cols-1 md:grid-cols-2 gap-6 `}
    >
      <div className="">
        <h2 className="text-xl mb-4">Personal Information</h2>
        <div className="grid grid-cols-3 text-sm">
          <ul className="font-bold space-y-3">
            <li>FULL NAME</li>
            <li>D.O.B</li>
            <li>ADDRESS</li>
            <li>E-MAIL</li>
            <li>PHONE</li>
          </ul>
          <ul className="space-y-3 col-span-2">
            <li>Churchil Omondi</li>
            <li>March 1999</li>
            <li>Mombasa, Kenya</li>
            <li>churchilradonji@gmail.com</li>
            <li>+254 115053375</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-xl md:mt-0 mb-4">Languages</h2>
        <ul>
          <LanguageProficiency
            language="English"
            dotsFilled={9}
            totalDots={10}
            proficiency="fluent"
          />
          <LanguageProficiency
            language="Swahili"
            dotsFilled={9}
            totalDots={10}
            proficiency="fluent"
          />
          <LanguageProficiency
            language="Luo"
            dotsFilled={9}
            totalDots={10}
            proficiency="native"
          />
        </ul>
      </div>

      <div className="">
        <h2 className="text-xl mb-4">Professional Skills</h2>
        <ul>
          <SkillProgressBar skill="Python" percentage={85} />
          <SkillProgressBar skill="R" percentage={90} />
          <SkillProgressBar skill="Excel" percentage={80} />
          <SkillProgressBar skill="MySql" percentage={75} />
        </ul>
      </div>

      <div>
        <h2 className="text-xl md:mt-0 mb-4">Other Professional Skills</h2>
        <ul className="grid grid-cols-2">
          <li className="flex flex-col justify-center items-center">
            <CircleProgressBar progress={20} size={100} />
            <h3>Javascript</h3>
          </li>
          <li className="flex flex-col justify-center items-center">
            <CircleProgressBar progress={30} size={100} />
            <h3>C</h3>
          </li>
          <li className="flex flex-col justify-center items-center">
            <CircleProgressBar progress={80} size={100} />
            <h3>Power Bi</h3>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl md:mt-0 mb-4">Few Things</h2>
        <ul className="">
          <li className="flex items-center gap-6 font-semibold">
            <FaCheck />
            <p>Open-Minded</p>
          </li>
          <li className="flex items-center gap-6 font-semibold">
            <FaCheck />
            <p>Rapid Development</p>
          </li>
          <li className="flex items-center gap-6 font-semibold">
            <FaCheck />
            <p>Team-Player</p>
          </li>
          <li className="flex items-center gap-6 font-semibold">
            <FaCheck />
            <p>Adaption</p>
          </li>
          <li className="flex items-center gap-6 font-semibold">
            <FaCheck />
            <p>Strictly Following Rules</p>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl md:mt-0 mb-4">Understanding Client</h2>
        <p>
          Understanding the client need and Business is the key. Every Project
          is new in a way and every project is different and every client is
          unique.
        </p>
      </div>
    </div>
  );
};

export default Skills;
