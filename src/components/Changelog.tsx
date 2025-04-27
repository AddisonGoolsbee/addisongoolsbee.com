import { type Component, For } from "solid-js";
import { Transition } from "solid-transition-group";
import { A } from "@solidjs/router";

type Props = {
  changelogVisible: () => boolean;
  setChangelogVisible: () => void;
  toggleChangelog: () => void;
};

type VersionProps = {
  version: string;
  description: string;
  changes: string[];
  url: string;
};

const ChangelogVersionCard: Component<VersionProps> = (props) => {
  return (
    <button
      class="p-3 select-none bg-white shadow-lg rounded-lg mb-10 cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-2xl active:scale-100 active:shadow-md block w-full text-left"
      onClick={() => {
        window.location.hash = `/${props.url}`;
        window.location.search = "";
      }}
    >
      <p class="text-lg font-bold text-gray-800 mt-1">
        Version {props.version}
      </p>
      <p class="text-sm text-gray-600">{props.description}</p>
      <ul class="list-outside list-disc mt-2 text-sm pl-3">
        <For each={props.changes}>
          {(change) => <li class="text-gray-600 mb-1">{change}</li>}
        </For>
      </ul>
    </button>
  );
};

const Changelog: Component<Props> = (props) => {
  const changelogKeyframes = [
    { transform: "translateX(100%)" },
    { transform: "translateX(0%)" },
  ];
  const changelogAnimation = { duration: 600, easing: "ease-in-out" };
  const dimmerKeyFrames = [{ opacity: "0" }, { opacity: "0.3" }];
  const dimmerAnimation = { duration: 600, easing: "ease-in-out" };

  let changelogRef;

  return (
    <div>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate(changelogKeyframes, changelogAnimation);
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(changelogKeyframes, {
            ...changelogAnimation,
            direction: "reverse",
          });
          a.finished.then(done);
        }}
      >
        {props.changelogVisible() && (
          <div
            class="fixed top-0 right-0 w-1/3 min-w-[330px] h-full bg-gray-50 p-5 overflow-y-auto overflow-x-hidden scrollbar-custom2 max-h-fit z-[3000]"
            ref={changelogRef}
          >
            <p class="text-center font-medium text-xl mt-2 mb-5">Changelog</p>
            <p class="text-sm text-gray-700 mb-8">
              Below is a comprehensive list of the changes to my website over
              time. The full source code is available on&nbsp;
              <a
                class="link"
                href="https://github.com/addisongoolsbee/addisongoolsbee.com"
                target="_blank"
              >
                Github
              </a>
              <br />
              <br />
              You can click on any version to pull up a demo of what the site
              used to look like
            </p>
            <ChangelogVersionCard
              version="1.1"
              description="Party mode"
              changes={[
                "Party mode",
                "Printer mode",
                "Google search improvements",
                "Improved mobile layout",
                "Miscellaneous improvements",
              ]}
              url=""
            />
            <ChangelogVersionCard
              version="1.0"
              description="Fully-funcitonal MVP built in Solid.js"
              changes={[
                "Home page layout: cutout of myself on left, blurb on right",
                "Rewritten blurb",
                "Glowing dots in the background",
                "Changelog",
                "Site logo",
                "Blurb footer link icons with animations",
                "Responsive layout",
                "Initial page load animations",
                "Mobile layout",
                "Sandwich mode",
              ]}
              url="v1_0"
            />
            <ChangelogVersionCard
              version="0.2"
              description="Host change, restarting from scratch"
              changes={[
                "Hosting changed from Nixihost to GitHub Pages",
                "Domain name forwards from Nixihost, through Cloudflare, to GitHub Pages",
                "addisongoolsbee.com repository created",
                "Solid.js/TailwindCSS/Vite base for the website with a small message",
                "GitHub action for deploying site",
              ]}
              url="v0_2"
            />
            <ChangelogVersionCard
              version="0.1"
              description="Template-based site created in 1 hour"
              changes={[
                "Domain name and hosting purchased from Nixihost",
                "cPanel template website",
                "Enforce HTTPS",
                "Google Analytics",
              ]}
              url="v0_1"
            />
          </div>
        )}
      </Transition>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate(dimmerKeyFrames, dimmerAnimation);
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(dimmerKeyFrames, {
            ...dimmerAnimation,
            direction: "reverse",
          });
          a.finished.then(done);
        }}
      >
        {props.changelogVisible() && (
          <div
            class="absolute w-full h-full top-0 left-0 bg-black z-[2500] opacity-30"
            onClick={() => {
              props.toggleChangelog();
            }}
          ></div>
        )}
      </Transition>
    </div>
  );
};
export default Changelog;
