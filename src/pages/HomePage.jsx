import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import Navbar from "../components/Navbar";
import ImageHolder from "../components/ImageHolder";
import HeaderLinks from "../components/HeaderLinks";
import cv from "../assets/cv.pdf";
import { IoShareSocialSharp } from "react-icons/io5";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience/WorkExperience";
import Interests from "../components/Interests";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import PortfolioComp from "../components/PortfolioComp";
import Form from "../components/Form";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 560) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pb-8 lg:px-4 w-full lg:bg-gray-800 lg:bg-opacity-20 tracking-wider">
      <div className="max-w-[1100px] mx-auto relative">
        <div className="flex">
          <div className="lg:block hidden relative mr-4 mt-[104px] w-[2880px]">
            {/* don't even ask how that width works but it works */}
            <div className=" bg-white bg-opacity-60 shadow-xl  fixed top-[72px]">
              <ImageHolder imageClassses={"w-[300px] h-[300px]"} />

              <div className="my-12 text-center ">
                <a
                  href={cv}
                  download
                  className="px-8 py-3 rounded-full font-bold bg-black text-white "
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>
          </div>
          <div>
            <Navbar />

            <div className="lg:hidden">
              <HeaderLinks mediaClasses={"flex bg-gray-100"} />
            </div>

            <div className="lg:hidden mb-20 ">
              <ImageHolder imageClassses={"w-[200px] h-[200px]"} />

              <div className="my-12 text-center ">
                <a
                  href={cv}
                  download
                  className="px-8 py-3 rounded-full font-bold bg-black text-white "
                >
                  DOWNLOAD CV
                </a>
              </div>
            </div>

            <div
              className="lg:flex lg:flex-col lg:gap-2 shadow lg:shadow-lg rounded"
              id="home"
            >
              <div className="lg:bg-white lg:bg-opacity-60">
                <div className="px-5 mt-4">
                  <h1 className="text-4xl font-bold mb-12 text-gray-800">
                    HI, I'M CHURCHIL
                  </h1>
                  <p className="text-xl text-gray-600 ">
                    Hello! I'm <b>Churchil Omondi</b>. A <b>data scientist</b>{" "}
                    and <b>statistician</b> passionate about revealing insights
                    and building data-driven solutions. Areas of competencies
                    include <b>big data analytics</b>, programming languages,
                    and software such as{" "}
                    <b>Python, R, MySQL, Excel, Power BI</b> with over{" "}
                    <b>2 years </b>
                    of experience in <b>Data Science</b>. Be it in-depth
                    analysis of complex datasets or development of intuitive
                    visualizations, I believe in delivering high-quality,
                    impact-oriented solutions that ensure informed decisions are
                    made.
                  </p>
                </div>

                <div className="px-5 mt-12 mb-6">
                  <button className="flex gap-1 items-center hover:shadow-lg border border-gray-500 px-6 py-1 rounded-full">
                    <IoShareSocialSharp />
                    <span className="font-semibold">Share</span>
                  </button>
                </div>
              </div>

              <div className="lg:py-4 lg:bg-white lg:bg-opacity-60" id="skill">
                <Skills />
              </div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 1 }}
                className="py-4 lg:bg-white mb-8 lg:mb-0 border-t lg:bg-opacity-60 px-5"
              >
                <h2 className="text-4xl font-semibold mb-8" id="work">
                  Work Experience
                </h2>

                <WorkExperience
                  date="Jan 2023 – To Date"
                  title="MACHINE LEARNING PREDICTIVE MODELLING"
                  company="Young Future Data Firm (YFD)"
                  details={[
                    "Handled one-time contracts with numerous organizations in the analysis for material mixture optimization to achieve maximum profitability.",
                    "Used statistical models and machine learning algorithms to pinpoint compositions that work best, improving production efficiency and savings.",
                    "Worked remotely as a Junior Data Scientist and managed preprocessing and modeling of large datasets to ensure data integrity and accuracy for various analytical projects.",
                    "Built and deployed predictive models using machine learning techniques that were very instrumental to strategic decisions.",
                    "Currently working with a team of analysts to create Young Future data firm.",
                  ]}
                />

                {/* Education */}
                <h2 className="text-4xl font-semibold mb-8" id="education">
                  Education
                </h2>

                <WorkExperience
                  date="Jan 2021 – Dec 2024"
                  title="BACHELOR'S DEGREE, APPLIED STATISTICS & COMPUTING"
                  company="Moi University - Eldoret, Kenya"
                />
              </motion.div>

              <div className=" lg:bg-white py-4 mb-8 lg:mb-0 lg:bg-opacity-60 px-5">
                <h2 className="text-4xl font-semibold mb-8" id="interests">
                  INTERESTS
                </h2>

                <div>
                  <Interests />
                </div>
              </div>

              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 20 }}
                transition={{ duration: 1 }}
                className=" lg:bg-white py-4 lg:bg-opacity-60 px-5 "
                id="schedule"
              >
                <h2 className="text-4xl font-semibold mb-8">BOOK A MEETING</h2>

                <div className="text-center">
                  <p className="text-xl text-gray-600 tracking-wide">
                    Whether the app development has just begun or the
                    development has reached a certain milestone, I can
                    effectively join your side within short period of time. Get
                    in touch with me & lets discuss your project.
                  </p>

                  <div className="my-12 text-center ">
                    <a
                      href={"#"}
                      className="px-8 py-3 rounded-full font-bold bg-[#172e2c] text-gray-300 "
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 20 }}
                transition={{ duration: 1 }}
                className=" lg:bg-white py-4 border-t lg:bg-opacity-60 px-5"
              >
                <h2 className="text-4xl font-semibold mb-8">PORTFOLIO</h2>
                {/* portfolio */}
                <div>
                  <PortfolioComp />
                </div>
              </motion.div>

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className=" lg:bg-white py-4 border-t lg:bg-opacity-60 px-5"
                id="contact"
              >
                <h2 className="text-4xl font-semibold mb-8">CONTACT ME</h2>

                <div className="lg:mx-12">
                  <div className="flex list-none gap-8 mb-6">
                    <li>
                      <a href="#">
                        <FaSquareFacebook size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagramSquare size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/in/churchil-omondi-691992217">
                        <FaLinkedin size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaXTwitter size={24} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/CHURCHIL9/">
                        <FaSquareGithub size={24} />
                      </a>
                    </li>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-500">
                    Feel free to contact me in case of any question
                  </h2>
                  {/* do a form using htmlto */}
                  <Form />
                </div>
              </motion.div>
            </div>

            <div className="lg:bg-white border-t lg:bg-opacity-60 p-1 mt-2 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510564.65107951575!2d36.51774739038859!3d-1.303187387826437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1723575824241!5m2!1sen!2ske"
                // width="full"
                height="450"
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {show && (
              <div className="fixed bottom-3 right-2 bg-[#172e2c] bg-opacity-40 rounded-full overflow-hidden">
                <button
                  className="p-3 "
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <BiArrowToTop size={24} />
                </button>
              </div>
            )}
          </div>
          <div className="lg:block hidden mt-[52px]">
            <HeaderLinks mediaClasses={"flex flex-col"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
