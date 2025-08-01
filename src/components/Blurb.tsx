import { createSignal, type Component, createEffect, onMount } from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";
import BlurbButton from "./BlurbButton";
import { DefaultBlurb } from "../utils/blurbs";

import { blurbContent, setBlurbContent } from "../signals/state";

type Props = {
  imgTop: number;
  toggleChangelog: () => void;
  sandwichMode: () => void;
  partyModeActive: boolean;
  myName: string;
};

const Blurb: Component<Props> = (props) => {
  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
  const [partyUnlocked, setPartyUnlocked] = createSignal(false);

  const isMobile = () => windowWidth() < 640;

  createEffect(() => {
    if (props.partyModeActive || partyUnlocked()) {
      setPartyUnlocked(true);
      const element = document.querySelector(".blurb-container");
      if (props.partyModeActive) {
        element?.classList.remove("grow-animation");
        element?.classList.add("shrink-animation");
      } else {
        element?.classList.remove("shrink-animation");
        element?.classList.add("grow-animation");
      }
    }
  });

  onMount(() => {
    setBlurbContent(<DefaultBlurb />);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <div
      class={`absolute top-[75px] sm:top-0 flex flex-row justify-end sm:bottom-0 sm:h-full sm:items-center`}
      style={{ bottom: `${props.imgTop + 10}px` }}
    >
      <div class="blurb-container w-full flex flex-col animate-pop-in transition-all z-[600] sm:max-h-[75dvh] mx-7 sm:mx-0 sm:ml-[45dvw] 2xl:ml-[40dvw] sm:mr-[5dvw] 2xl:mr-[12.5dvh]">
        <div class="text-black text-sm sm:text-base bg-white bg-opacity-70 z-10 rounded-t-sm sm:rounded-t-lg shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit flex flex-col justify-between">
          <div class="p-5p">
            <p class="text-2xl sm:text-3xl font-normal sm:font-light leading-normal text-center sm:text-left">
              My name is
              {isMobile() ? <br /> : ""}
              <span
                class="text-teal-800 inline-block font-medium cursor-pointer transform duration-300 hover:scale-105 sm:ml-2"
                onClick={props.sandwichMode}
              >
                {props.myName}
              </span>
            </p>
            <div class="border-t-2 border-black w-full mt-2 mb-3 sm:mt-5 sm:mb-6"></div>
            {blurbContent()}
          </div>
          <p class="italic bottom-0 text-gray-400 text-xs text-center p-1">
            This website has a few hidden secrets, try clicking "Addison
            Goolsbee"
          </p>
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
            href={props.myName === "Printer" ? "printer.pdf" : "resume.pdf"}
            text="Resume"
            icon={<FiFileText />}
          />
        </div>
      </div>
    </div>
  );
};
export default Blurb;
