import type { Component } from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";

const Blurb: Component = () => {
  return (
    <div class="absolute top-0 right-0 w-2/3 h-full p-7p pl-10p flex flex-col">
      <div class="text-black bg-white bg-opacity-60 z-10 p-8 rounded-sm shadow-2xl flex-grow">
        <p class="text-3xl font-extralight">
          My name is <span class="text-teal-800 font-medium">Addison Goolsbee</span>
        </p>
        <div class="border-t-2 border-black w-full my-6"></div>
        <p> Hey there! I'm a junior at Yale University studying computer science. Welcome to my website! </p>
        <br />
        <p>
          I'm a fullstack developer with a particular interest in system design/development. I love building things—useful applications, extremely useless applications, video games, electronic devices, water jug art installations, etc.&nbsp;
          <a href="https://github.com/addisongoolsbee" target="_blank" class="link">
            Check out some of my projects
          </a>
        </p>
        <br />
        <p>
          I'm currently working on building this website using Solid.js and Tailwind CSS.&nbsp;
          <a href="https://github.com/addisongoolsbee/addisongoolsbee.com" class="link">
            The code is public
          </a>
          .&nbsp;You can look at my previous 1-hour template-based website&nbsp;
          <a href="/images/initialWebsite.png" class="link">
            here
          </a>
        </p>
      </div>
      <div class="w-full bg-teal-800 p-5 flex justify-center space-x-8">
        <a href="https://www.linkedin.com/in/addisongoolsbee" target="_blank" class="text-white text-4xl">
          <FaBrandsLinkedin />
        </a>
        <a href="https://github.com/addisongoolsbee" target="_blank" class="text-white text-4xl">
          <FaBrandsGithub />
        </a>
        <a href="mailto:addisongoolsbee@gmail.com" class="text-white text-4xl">
          <FiMail />
        </a>
        <a href="/images/resume.pdf" target="_blank" class="text-white text-4xl">
          <FiFileText />
        </a>
      </div>
    </div>
  );
};
export default Blurb;
