import { motion } from "framer-motion";
import {
  Phone,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  GraduationCapIcon,
  BriefcaseBusiness,
  MailIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import {
  eltonImg,
  heroBg,
  aboutImg,
  skillsImg,
  wasteAlertImg,
  arowanaImg,
  eventsImg,
  moneyMapImg,
  opulenceImg,
} from "../assets";

const Preview = () => {
  return (
    <div>
      <div className="bg-black flex flex-col md:flex-row text-white justify-between items-center px-10 py-6 w-full sticky top-0 z-50">
        <div className="mb-4 md:mb-0">
          <h4 className="text-white font-bold">E.A.M</h4>
        </div>
        <div className="font-semibold text-lg flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <span className="text-yellow">
            <a href="/">HOME</a>
          </span>
          <span className="hover:text-yellow">
            <a href="#about">ABOUT</a>
          </span>
          <span className="hover:text-yellow">
            <a href="#resume">RESUME</a>
          </span>
          <span className="hover:text-yellow">
            <a href="#projects">PROJECTS</a>
          </span>
          <span className="hover:text-yellow">
            <a href="#contact">CONTACT</a>
          </span>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Phone className="text-white" />
          <a href="tel:+233242084838" className="text-yellow pl-2">
            +233 24 208 4838
          </a>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center "
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full px-4 md:px-20 pt-16 md:pt-0">
          <motion.div
            className="text-white text-center md:text-left px-8 md:px-10 lg:px-20 md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <h1 className="text-yellow text-3xl lg:text-4xl mb-2">
              Hello, I'm
            </h1>
            <h2 className="text-4xl lg:text-6xl xl:text-8xl font-bold mb-4">
              Elton Asamoah
            </h2>
            <h3 className="text-2xl lg:text-3xl mb-4">Web Developer</h3>
            <motion.button
              className="bg-yellow text-lg text-black font-semibold px-10 py-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="#contact">Hire Me</a>
            </motion.button>
          </motion.div>
          <div className="md:w-1/2 p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={eltonImg}
              alt="hero image"
              className="w-full max-w-full max-h-[600px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}

      <div id="about" className="bg-[#0A101E] text-white py-16">
        <h4 className="text-center text-3xl text-yellow font-semibold">
          ABOUT ME
        </h4>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="md:w-1/2 p-8">
            <img
              src={eltonImg}
              alt="profile img"
              className="w-full max-w-full max-h-[400px] object-contain"
            />
          </div>
          <div className="md:w-1/2 p-8 text-center md:text-left">
            <h2 className="text-4xl mb-2 font-bold">Elton Asamoah-Mantey</h2>
            <h3 className="text-yellow text-xl font-semibold mb-4">
              Web Developer
            </h3>
            <p className="text-lg mb-4 font-light leading-relaxed">
              I am a frontend web developer with a strong foundation in
              React.js, JavaScript, HTML, and Tailwind CSS. Leveraging several
              years of experience in administrative roles, I bring exceptional
              attention to detail and organizational expertise to the tech
              space. My passion lies in crafting responsive, user-friendly web
              applications through clean, efficient code that transforms designs
              into functional digital experiences. Driven by a commitment to
              solving complex problems and enhancing user experiences, I am
              eager to contribute to innovative projects that create meaningful
              impact in the digital realm.
            </p>

            <div className="flex justify-center md:justify-start items-center gap-4 pb-6">
              {/* <span className="text-lg pr-4">Socials:</span> */}
              <span className="border rounded-full p-2 hover:bg-yellow">
                <a
                  href="https://github.com/elton-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </a>
              </span>
              <span className="border rounded-full p-2 hover:bg-yellow">
                <a
                  href="https://www.linkedin.com/in/eltonasamoah394bl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                </a>
              </span>
              <span className="border rounded-full p-2 hover:bg-yellow">
                <a
                  href="https://x.com/elton_asamoah"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
              </span>
            </div>
            <motion.button
              className="bg-yellow text-black font-semibold px-6 py-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="/Elton_Asamoah_CV.pdf" download>
                Download CV
              </a>
            </motion.button>
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="bg-[#0A101E] text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-yellow text-center text-3xl font-semibold mb-8">
            SKILLS
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-20">
              <img
                className="object-contain w-3/4 md:w-2/3 mx-auto"
                src={skillsImg}
                alt="skills image"
              />
            </div>
            <div className="md:w-1/2">
              <ul>
                {[
                  { name: "React", level: "75%" },
                  { name: "HTML", level: "80%" },
                  { name: "CSS", level: "80%" },
                  { name: "Tailwind CSS", level: "70%" },
                  { name: "Javascript", level: "65%" },
                  { name: "GIT HUB", level: "80%" },
                ].map((skill) => (
                  <li key={skill.name} className="mb-4 text-lg">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span className="text-yellow">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1">
                      <div
                        className="bg-yellow h-1"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RESUME SECTION */}
      <div id="resume" className="bg-[#090e1a] text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-yellow text-center text-3xl font-semibold mb-8">
            RESUME
          </h2>
          <div className="flex flex-col md:flex-row justify-between md:gap-x-24">
            {/* Education Section */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <div className="flex items-center mb-6">
                <span className="text-yellow mr-4">
                  <GraduationCapIcon size={40} />
                </span>
                <h3 className="text-4xl font-semibold">Education</h3>
              </div>
              <ul className="text-lg leading-10 font-light">
                <li className="mb-8 relative">
                  <div className="absolute w-2 h-2 bg-yellow rounded-full left-0 top-2.5"></div>
                  <h4 className="text-yellow text-xl font-bold pl-6">
                    Jnr Frontend Web Developer
                  </h4>
                  <p className="pl-6">May 2024 - August 2024</p>
                  <p className="pl-6">MEST Africa</p>
                </li>
                <li className="mb-8 relative">
                  <div className="absolute w-2 h-2 bg-yellow rounded-full left-0 top-2.5"></div>
                  <h4 className="text-yellow text-xl font-bold pl-6">
                    Bachelor of Arts - Economics
                  </h4>
                  <p className="pl-6">2011 - 2015</p>
                  <p className="pl-6">
                    Kwame Nkrumah University of Science & Technology
                  </p>
                </li>
                <li className="relative">
                  <div className="absolute w-2 h-2 bg-yellow rounded-full left-0 top-2.5"></div>
                  <h4 className="text-yellow text-xl font-bold pl-6">
                    WASSCE - Economics
                  </h4>
                  <p className="pl-6">2007 - 2011</p>
                  <p className="pl-6">Opoku Ware School</p>
                </li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="md:w-1/2 md:pl-16">
              <div className="flex items-center mb-6">
                <span className="text-yellow mr-4">
                  <BriefcaseBusiness size={32} />
                </span>
                <h3 className="text-4xl font-semibold">Experience</h3>
              </div>
              <ul className="text-lg leading-10 font-light">
                <li className="mb-8 relative">
                  <div className="absolute w-2 h-2 bg-yellow rounded-full left-0 top-2.5"></div>
                  <h4 className="text-yellow text-xl font-bold pl-6">
                    Jnr Frontend Web Developer
                  </h4>
                  <p className="pl-6">August 2024 - Present</p>
                  <p className="pl-6">Freelance</p>
                </li>
                <li className="mb-8 relative">
                  <div className="absolute w-2 h-2 bg-yellow rounded-full left-0 top-2.5"></div>
                  <h4 className="text-yellow text-xl font-bold pl-6">
                    Administrative Manager
                  </h4>
                  <p className="pl-6">June 2023 – May 2024</p>
                  <p className="pl-6">GEKAMS Ghana LTD</p>
                </li>
                <li className="relative">
                  <div className="absolute w-2 h-2 bg-yellow rounded-full left-0 top-2.5"></div>
                  <h4 className="text-yellow text-xl font-bold pl-6">
                    Executive Assistant
                  </h4>
                  <p className="pl-6">September 2018 - August 2022</p>
                  <p className="pl-6">International Community School</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div id="projects" className="bg-[#0A101E] text-white py-16">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-yellow text-center text-3xl font-bold mb-8">
            PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <a
              href="https://waste-alert.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={wasteAlertImg}
                  alt="Waste Alert img"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black">
                    Waste Alert
                  </h3>
                  <p className="text-gray-600">Client Project</p>
                </div>
              </div>
            </a>

            <a
              href="https://arowanafoods.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={arowanaImg}
                  alt="Arowana foods img"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black">
                    Arowana Foods
                  </h3>
                  <p className="text-gray-600">Client Project</p>
                </div>
              </div>
            </a>

            <a
              href="https://smartexpencetracker.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={moneyMapImg}
                  alt="Waste Alert img"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black">
                    Expense Tracker App
                  </h3>
                  <p className="text-gray-600">Team Project</p>
                </div>
              </div>
            </a>

            <a
              href="https://merjevents.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={eventsImg}
                  alt="Waste Alert img"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black">
                    Event Management App
                  </h3>
                  <p className="text-gray-600">Team Project</p>
                </div>
              </div>
            </a>

            <a
              href="https://merjevents.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={opulenceImg}
                  alt="Waste Alert img"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-black">
                    Hotel Website
                  </h3>
                  <p className="text-gray-600">Personal Project</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact" className="bg-[#0A101E] text-white py-16">
  <div className="container mx-auto px-8 md:px-16 lg:px-24">
    <h2 className="text-yellow text-center text-4xl font-extrabold mb-12">
      Contact Me
    </h2>
    <div className="flex flex-col md:flex-row bg-[#101624] rounded-lg shadow-lg">
      {/* Form Section */}
      <div className="md:w-2/3 p-8">
        <h3 className="text-3xl font-bold mb-6">Just Say Hello</h3>
        <form
          className="space-y-6"
          action="https://formspree.io/f/mzzbbwrg"
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 bg-[#0A101E] border border-gray-600 rounded focus:outline-none text-yellow focus:ring-2 focus:ring-yellow"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 bg-[#0A101E] border border-gray-600 rounded focus:outline-none text-yellow focus:ring-2 focus:ring-yellow"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Your Subject"
            className="w-full p-4 bg-[#0A101E] border border-gray-600 rounded focus:outline-none text-yellow focus:ring-2 focus:ring-yellow"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-4 bg-[#0A101E] border border-gray-600 rounded focus:outline-none text-yellow focus:ring-2 focus:ring-yellow h-40"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow text-black font-bold py-3 rounded-lg transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="md:w-1/3 bg-[#0A101E] p-8 rounded-r-lg">
        <h3 className="text-3xl font-bold mb-6">Contact Info</h3>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <MailIcon className="text-yellow w-6 h-6" />
            <a
              href="mailto:eltonasamoah007@gmail.com"
              className="text-yellow hover:text-white transition"
            >
              eltonasamoah007@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <PhoneIcon className="text-yellow w-6 h-6" />
            <a
              href="tel:+233242084838"
              className="text-yellow hover:text-white transition"
            >
              +233 24-208-4838
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-4">Connect with me on social media:</p>
          <div className="flex space-x-6 text-yellow">
            <a
              href="https://www.linkedin.com/in/eltonasamoah394bl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/elton_asamoah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/elton-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Footer */}
      <div className="bg-[#0a101efb] py-10 text-white">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-yellow text-xl font-bold mb-4">About Me</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm Elton Asamoah-Mantey, a passionate frontend developer. I
                create user-friendly, dynamic, and efficient web solutions to
                help businesses grow.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-yellow text-xl font-bold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-yellow transition"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-yellow transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-yellow transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-400 hover:text-yellow transition"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-yellow text-xl font-bold mb-4">Follow Me</h3>
              <p className="text-gray-400 mb-4">
                Let's connect on social media and collaborate on exciting
                projects!
              </p>
              <div className="flex space-x-4 text-yellow">
                <a
                  href="https://www.linkedin.com/in/eltonasamoah394bl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/elton_asamoah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/elton-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  <GithubIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Elton A. Mantey. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              Designed with ❤️ by Elton.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
