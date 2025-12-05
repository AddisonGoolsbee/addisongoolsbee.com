import { createSignal, type Component, createEffect, onMount, onCleanup, Show, Switch, Match } from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";
import BlurbButton from "./BlurbButton";

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
import { sandwich, showSecretMessage } from "../signals/handlers";

type Props = {
  imgTop: number;
};

export const defaultBlurbStart =
  "Hey there! I'm an Amazon software engineer living in Seattle with a love for building stuff. I've made web apps, video games, physical gadgets, five gallon water jug 'art installations', and more.";

const Blurb: Component<Props> = (props) => {
  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);
  const [partyUnlocked, setPartyUnlocked] = createSignal(false);
  const [rainbowOffset, setRainbowOffset] = createSignal(0);
  const [popped, setPopped] = createSignal(false);
  const [showSecretHint, setShowSecretHint] = createSignal(false);
  let secretTimer: number | undefined;
  onCleanup(() => secretTimer && clearTimeout(secretTimer));

  const isMobile = () => windowWidth() < 640;
  let scrollableContainerRef: HTMLDivElement;

  const RainbowText = (props: { text: string; additionalClasses?: string; onClick?: () => void }) => (
    <span
      class={`inline-block font-medium ${props.additionalClasses || ""}`}
      onClick={props.onClick}
      style={{ display: "inline-flex" }}
    >
      {props.text.split("").map((char, i) => (
        <span
          style={{
            color: `hsl(${(i * 360) / props.text.length + rainbowOffset()}, 80%, 50%)`,
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
    blurbStart();

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
    <div>
      <div class="p-5p">
        <p class="text-2xl sm:text-3xl font-normal sm:font-light leading-tight  text-center sm:text-left">
          My name is
          {isMobile() ? <br /> : <span style={{ display: "inline-block", width: "0.3em" }}></span>}
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
        <div class="border-t-2 border-black w-full mt-3 mb-4 sm:mt-5 sm:mb-6"></div>
        <p class={`mb-4 ${popped() ? "animate-pop-blurb" : ""}`}>{blurbStart()}</p>
        <p class="mb-4">
          When I'm not coding, you might find me hiking, juggling, foraging for mushrooms,{" "}
          <span class="text-xs">or locked away in a dark room playing video games.</span> I've also co-founded a soap
          company, created a viral{" "}
          <a
            href="https://yaledailynews.com/blog/2025/04/13/yales-facemash-students-react-to-site-ranking-yalies-popularity/"
            class="link"
            target="_blank"
          >
            popularity ranking website
          </a>
          , led the{" "}
          <a href="https://yalecomputersociety.org" class="link" target="_blank">
            Yale Computer Society
          </a>
          , and danced on stage with{" "}
          <a href="https://campuspress.yale.edu/danceworks/" class="link" target="_blank">
            Danceworks
          </a>
          . Oh, and I <em>love</em>{" "}
          <span
            class="cursor-pointer"
            onClick={() => {
              showSecretMessage("Have you found the secrets tab?");
            }}
          >
            easter eggs.
          </span>
        </p>
        <p class="mb-4">
          Feeling nostalgic? You can see{" "}
          <a onClick={() => setChangelogVisible(!changelogVisible())} class="link">
            past versions of the site
          </a>{" "}
          in the changelog menu.
        </p>

        <div class="flex justify-center mt-6 sm:mt-12">
          <HighFiveButton key="highfive" />
        </div>
      </div>
      <p class="italic bottom-0 text-gray-400 text-[0.5rem] sm:text-xs text-center p-1">
        This website has a few hidden secrets, try clicking my name
      </p>
    </div>
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
      <p class="mb-4">
        Nice job finding this! I've filled my website with a <em>lot</em> of secrets. Can you uncover them all?
      </p>
      <p class="mb-4">
        Most secrets are unlocked with a password—try typing 'bicycle man'. If you're on a phone, triple tap me to
        summon the keyboard, but beware, many puzzles are best tackled on a full-sized screen.
      </p>
      {/* <p class="mb-4">
        Some secrets require a bit of technical know-how. Hover over a tech-hint
        to reveal a 🛠️ icon. Try it out:{" "}
        <span title="🛠️">there exists a secret buried in a network request</span>
      </p> */}
      <p>
        To keep you on the right trail, here's where <em>not</em> to look:
      </p>
      <ul class="space-y-2 ml-4 mt-2 mb-4">
        <li>
          <span class="font-bold">The Code:</span> Everything is encrypted, no clues are in the code or previous
          commits.
          {/* <span class="italic text-gray-400 text-xs" title="🛠️">
            Except for one.
          </span> */}
        </li>
        <li>
          <span class="font-bold">Previous Versions:</span> Older versions of the website in the changelog have no extra
          hints.
        </li>
        <li>
          <span class="font-bold">Other Websites:</span> It's all here unless a hint says otherwise.
        </li>
      </ul>
      <p>Maybe there are some secrets hidden in this very page...</p>
    </div>
  );

  return (
    <div
      class={`absolute top-[75px] sm:top-0 flex flex-row justify-end sm:bottom-0 sm:h-full sm:items-center`}
      style={{
        transition: "bottom 1s ease-out",
        bottom: `${props.imgTop + 10}px`,
      }}
    >
      <div class="blurb-container w-full flex flex-col animate-pop-in transition-all z-[600] sm:max-h-[75dvh] mx-7 sm:mx-0 sm:ml-[45dvw] 2xl:ml-[40dvw] sm:mr-[5dvw] 2xl:mr-[12.5dvh]">
        <div
          ref={(el) => (scrollableContainerRef = el!)}
          class="text-black text-sm sm:text-base bg-white bg-opacity-70 z-10 rounded-t-md sm:rounded-t-lg shadow-2xl flex-grow overflow-y-auto overflow-x-hidden scrollbar-custom max-h-fit flex flex-col justify-between"
        >
          <Switch fallback={<DefaultBlurb />}>
            <Match when={blurbType() === "default"}>
              <DefaultBlurb />
            </Match>
            <Match when={blurbType() === "secrets"}>
              <SecretsBlurb />
            </Match>
          </Switch>
        </div>
        <div class="w-full bg-teal-800 bg-opacity-90 p-3 sm:p-5 flex justify-center space-x-7p rounded-b-md sm:rounded-b-lg">
          <BlurbButton href="https://www.linkedin.com/in/addisongoolsbee" text="LinkedIn" icon={<FaBrandsLinkedin />} />
          <BlurbButton href="https://github.com/addisongoolsbee" text="GitHub" icon={<FaBrandsGithub />} />
          <BlurbButton href="mailto:addisongoolsbee@gmail.com" text="Email" icon={<FiMail />} />
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
