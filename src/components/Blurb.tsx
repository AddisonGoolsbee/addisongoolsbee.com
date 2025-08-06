import {
  createSignal,
  type Component,
  createEffect,
  onMount,
  onCleanup,
  Show,
} from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";
import BlurbButton from "./BlurbButton";
import { defaultBlurbStart } from "../signals/handlers";

import {
  blurbStart,
  blurbType,
  changelogVisible,
  isRainbowName,
  myName,
  partyModeActive,
  setBlurbStart,
  setChangelogVisible,
} from "../signals/state";
import HighFiveButton from "./HighFiveButton";
import { sandwich } from "../signals/handlers";

type Props = {
  imgTop: number;
};

const Blurb: Component<Props> = (props) => {
  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
  const [partyUnlocked, setPartyUnlocked] = createSignal(false);
  const [rainbowOffset, setRainbowOffset] = createSignal(0);
  const [popped, setPopped] = createSignal(false);

  const isMobile = () => windowWidth() < 640;
  let scrollableContainerRef: HTMLDivElement;

  const RainbowText = (props: {
    text: string;
    additionalClasses?: string;
    onClick?: () => void;
  }) => (
    <span
      class={`inline-block font-medium ${props.additionalClasses || ""}`}
      onClick={props.onClick}
      style={{ display: "inline-flex" }}
    >
      {props.text.split("").map((char, i) => (
        <span
          style={{
            color: `hsl(${
              (i * 360) / props.text.length + rainbowOffset()
            }, 80%, 50%)`,
            "white-space": "pre",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );

  createEffect(() => {
    if (partyModeActive() || partyUnlocked()) {
      setPartyUnlocked(true);
      const element = document.querySelector(".blurb-container");
      if (partyModeActive()) {
        element?.classList.remove("grow-animation");
        element?.classList.add("shrink-animation");
      } else {
        element?.classList.remove("shrink-animation");
        element?.classList.add("grow-animation");
      }
    }
  });

  createEffect(() => {
    let animationId: number;

    if (isRainbowName()) {
      const animate = () => {
        setRainbowOffset((prev) => (prev + 2) % 360);
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  });

  onMount(() => {
    setBlurbStart(defaultBlurbStart);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  let first = true;
  createEffect(() => {
    const v = blurbStart(); // subscribe

    if (first) {
      first = false;
      return;
    }

    setPopped(true);
    scrollableContainerRef?.scrollTo({ top: 0, behavior: "smooth" });

    const id = setTimeout(() => setPopped(false), 500);
    onCleanup(() => clearTimeout(id));
  });

  const DefaultBlurb = () => (
    <>
      <div class="p-5p">
        <p class="text-2xl sm:text-3xl font-normal sm:font-light leading-normal text-center sm:text-left">
          My name is
          {isMobile() ? (
            <br />
          ) : (
            <span style={{ display: "inline-block", width: "0.3em" }}></span>
          )}
          {isRainbowName() ? (
            <RainbowText
              text={myName()}
              additionalClasses="cursor-pointer transform duration-300 hover:scale-105"
              onClick={sandwich}
            />
          ) : (
            <span
              class={`text-teal-800 inline-block font-medium cursor-pointer transform duration-300 hover:scale-105 ${
                popped() ? "animate-pop-blurb" : ""
              }`}
              onClick={sandwich}
            >
              {myName()}
            </span>
          )}
        </p>
        <div class="border-t-2 border-black w-full mt-2 mb-3 sm:mt-5 sm:mb-6"></div>
        <p class={popped() ? "animate-pop-blurb" : ""}>{blurbStart()}</p>
        <br />
        <p>
          I'm a fullstack developer with a particular interest in system
          design/development. I love building things—useful applications,
          extremely useless applications, video games, physical devices, water
          jug art installations, and more.&nbsp;
          <a
            href="https://github.com/addisongoolsbee"
            target="_blank"
            class="link"
          >
            Check out some of my projects
          </a>
          &nbsp;or take a look at my&nbsp;
          <a
            href={myName() === "Printer" ? "printer.pdf" : "resume.pdf"}
            class="link"
            target="_blank"
          >
            resume
          </a>
          .
        </p>
        <br />
        <p>
          When I'm not busy wrestling with code or reveling in my five-gallon
          water jug collection, I like to indulge in the finer things in
          life—debating philosophy until 3 AM, juggling, foraging for wild
          mushrooms, and feeding my Alibaba shopping addiction.
        </p>
        <br />
        <p>
          Aside from coding, my other pursuits have included being the cofounder
          of Pineapple Soap Co., president of the&nbsp;
          <a
            href="https://yalecomputersociety.org"
            class="link"
            target="_blank"
          >
            Yale Computer Society
          </a>
          , in a&nbsp;
          <a
            href="https://campuspress.yale.edu/danceworks/"
            class="link"
            target="_blank"
          >
            dance group
          </a>
          , and a number of various other clubs on campus.
        </p>
        <br />
        <p>
          This website was written in Solid.js and Tailwind CSS.&nbsp;
          <a
            href="https://github.com/addisongoolsbee/addisongoolsbee.com"
            class="link"
          >
            The code is public
          </a>
          .
        </p>
        <br />
        <p>
          Feeling nostalgic? See previous iterations of my website&nbsp;
          <a
            onClick={() => setChangelogVisible(!changelogVisible())}
            class="link"
          >
            here
          </a>
          .
        </p>
        <div class="flex justify-center mt-6 sm:mt-12">
          <HighFiveButton key="highfive" />
        </div>
      </div>
      <p class="italic bottom-0 text-gray-400 text-xs text-center p-1">
        This website has a few hidden secrets, try clicking my name
      </p>
    </>
  );

  const SecretsBlurb = () => (
    <div class="p-5p">
      <p class="text-2xl sm:text-3xl font-normal sm:font-light leading-normal text-center sm:text-left">
        {isRainbowName() ? (
          <RainbowText text="Secrets" />
        ) : (
          <span class={`text-teal-800 inline-block font-medium`}>Secrets</span>
        )}
      </p>
      <div class="border-t-2 border-black w-full mt-2 mb-3 sm:mt-5 sm:mb-6"></div>
    </div>
  );

  return (
    <div
      class={`absolute top-[75px] sm:top-0 flex flex-row justify-end sm:bottom-0 sm:h-full sm:items-center`}
      style={{ bottom: `${props.imgTop + 10}px` }}
    >
      <div class="blurb-container w-full flex flex-col animate-pop-in transition-all z-[600] sm:max-h-[75dvh] mx-7 sm:mx-0 sm:ml-[45dvw] 2xl:ml-[40dvw] sm:mr-[5dvw] 2xl:mr-[12.5dvh]">
        <div
          ref={(el) => (scrollableContainerRef = el!)}
          class="text-black text-sm sm:text-base bg-white bg-opacity-70 z-10 rounded-t-sm sm:rounded-t-lg shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit flex flex-col justify-between"
        >
          <Show when={blurbType() === "default"}>
            <DefaultBlurb />
          </Show>
          <Show when={blurbType() === "secrets"}>
            <SecretsBlurb />
          </Show>
        </div>
        <div class="w-full bg-teal-800 bg-opacity-90 p-2 sm:p-5 flex justify-center space-x-7p rounded-b-sm sm:rounded-b-lg">
          <BlurbButton
            href="https://www.linkedin.com/in/addisongoolsbee"
            text="LinkedIn"
            icon={<FaBrandsLinkedin />}
          />
          <BlurbButton
            href="https://github.com/addisongoolsbee"
            text="GitHub"
            icon={<FaBrandsGithub />}
          />
          <BlurbButton
            href="mailto:addisongoolsbee@gmail.com"
            text="Email"
            icon={<FiMail />}
          />
          <BlurbButton
            href={myName() === "Printer" ? "printer.pdf" : "resume.pdf"}
            text="Resume"
            icon={<FiFileText />}
          />
        </div>
      </div>
    </div>
  );
};
export default Blurb;
