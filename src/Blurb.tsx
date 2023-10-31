import type { Component } from "solid-js";

const Blurb: Component = () => {
  return (
    <div class="absolute top-0 right-0 w-2/3 h-full p-5p">
      <div class="text-black h-full bg-white bg-opacity-60 z-10 p-8 ml-7p rounded-sm shadow-2xl">
        <p class="text-3xl">
          My name is <span class="text-orange-600">Addison Goolsbee</span>
        </p>
        <div class="border-t-2 border-black w-full my-6"></div>
        <p> Hey there! I'm a junior at Yale University studying computer science. Welcome to my website! </p>
        <br />
        <p>
          I'm a fullstack developer with a particular interest in systems design and development. I love building things—useful applications, extremely useless applications, video games, electronic devices, water jug art installations, etc.&nbsp;
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
    </div>
  );
};
export default Blurb;
