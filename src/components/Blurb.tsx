import { createSignal, type Component, createEffect } from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";
import BlurbButton from "./BlurbButton";

type Props = {
  imgTop: number;
  toggleChangelog: () => void;
  sandwichMode: () => void;
  myName: string;
};

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
    <div class={`absolute right-0 top-0 w-full p-5p pt-7vp flex flex-col animate-pop-in sm:w-2/3 sm:pl-10p sm:mb-0 sm:pb-7vp`} style={{ bottom: `${Math.ceil(props.imgTop)}px` }}>
      <div class="text-black bg-white bg-opacity-70 z-10 rounded-sm shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit flex flex-col justify-between">
        <div class="p-5p">
          <p class="text-3xl font-extralight leading-normal">
            My name is&nbsp;&nbsp;
            {shouldBreakLine() ? <br /> : ""}
            <span class="text-teal-800 inline-block font-medium cursor-pointer transform duration-300 hover:scale-105" onClick={props.sandwichMode}>
              {props.myName}
            </span>
          </p>
          <div class="border-t-2 border-black w-full mt-5p mb-7p"></div>
          <p> Hey there! I'm a {props.myName === "Addison Goolsbee" ? "junior" : props.myName.toLowerCase()} at Yale University studying computer science. Welcome to my website! </p>
          <br />
          <p>
            I'm a fullstack developer with a particular interest in system design/development. I love building things—useful applications, extremely useless applications, video games, physical devices, water jug art installations, and more.&nbsp;
            <a href="https://github.com/addisongoolsbee" target="_blank" class="link">
              Check out some of my projects
            </a>
            &nbsp;or take a look at my&nbsp;
            <a href="/images/resume.pdf" class="link">
              resume
            </a>
            .
          </p>
          <br />
          <p>When I'm not busy wrestling with code or reveling in my five-gallon water jug collection, I like to indulge in the finer things in life—debating philosophy until 3 AM, juggling, foraging for wild mushrooms, and feeding my Alibaba shopping addiction.</p>
          <br />
          <p>
            Aside from coding, I also am the co-founder of a pineapple soap business on campus, run the&nbsp;
            <a href="https://yalecomputersociety.org" class="link" target="_blank">
              Yale Computer Society
            </a>
            , am in a&nbsp;
            <a href="https://campuspress.yale.edu/danceworks/" class="link" target="_blank">
              dance group
            </a>
            , and am involved in a number of various other clubs on campus.
          </p>
          <br />
          <p>
            I'm currently working on building my website using Solid.js and Tailwind CSS.&nbsp;
            <a href="https://github.com/addisongoolsbee/addisongoolsbee.com" class="link">
              The code is public
            </a>
            .
          </p>
          <br />
          <p>
            Feeling nostalgic? See previous iterations of my webiste&nbsp;
            <a onClick={props.toggleChangelog} class="link">
              here
            </a>
            .
          </p>
          <br />
        </div>
        <p class="italic bottom-0 text-gray-400 text-xs text-center p-1">This website has a few hidden secrets, try clicking "Addison Goolsbee"</p>
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
