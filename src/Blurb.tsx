import { createSignal, type Component, createEffect } from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";
import BlurbButton from "./BlurbButton";

type Props = {
  imgTop: number;
}

const Blurb: Component<Props> = (props) => {
  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
  const shouldBreakLine = () => windowWidth() < 500 || (windowWidth() < 850 && windowWidth() > 630);

  // Update windowWidth on window resize
  createEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div class={`absolute right-0 top-0 w-full  p-5p pt-7vp flex flex-col animate-pop-in sm:w-2/3 sm:pl-10p sm:mb-0 sm:pb-7vp`} style={{ bottom: `${Math.ceil(props.imgTop)}px` }}>
      <div class="text-black bg-white bg-opacity-70 z-10 p-5p rounded-sm shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit">
        <p class="text-3xl font-extralight leading-normal">
          My name is
          {shouldBreakLine() ? <br /> : " "}
          <span class="text-teal-800 font-medium">Addison Goolsbee</span>
        </p>
        <div class="border-t-2 border-black w-full mt-5p mb-7p"></div>
        <p> Hey there! I'm a junior at Yale University studying computer science. Welcome to my website! </p>
        <br />
        <p>
          I'm a fullstack developer with a particular interest in system design/development. I love building things—useful applications, extremely useless applications, video games, physical devices, water jug art installations, etc.&nbsp;
          <a href="https://github.com/addisongoolsbee" target="_blank" class="link">
            Check out some of my projects
          </a>
          ,&nbsp;or take a look at my&nbsp;
          <a href="/images/resume.pdf" class="link">
            resume
          </a>
        </p>
        <br />
        <p>
          I'm currently working on building this website using Solid.js and Tailwind CSS.&nbsp;
          <a href="https://github.com/addisongoolsbee/addisongoolsbee.com" class="link">
            The code is public
          </a>
          .&nbsp;You can look at my previous template-based (lame) website&nbsp;
          <a href="/images/initialWebsite.png" class="link">
            here
          </a>
        </p>
      </div>
      <div class="w-full bg-teal-800 bg-opacity-90 p-5 flex justify-center space-x-7p">
        <BlurbButton href="https://www.linkedin.com/in/addisongoolsbee" text="LinkedIn" icon={<FaBrandsLinkedin />} />
        <BlurbButton href="https://github.com/addisongoolsbee" text="GitHub" icon={<FaBrandsGithub />} />
        <BlurbButton href="mailto:addisongoolsbee@gmail.com" text="Email" icon={<FiMail />} />
        <BlurbButton href="images/resume.pdf" text="Resume" icon={<FiFileText />} />
      </div>
    </div>
  );
};
export default Blurb;
