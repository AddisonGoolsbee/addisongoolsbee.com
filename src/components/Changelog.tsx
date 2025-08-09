import { type Component, For } from "solid-js";
import { Transition } from "solid-transition-group";
import { changelogVisible, toggleChangelog } from "../signals/state";

type Props = {
  handleRecursion?: () => void;
};

type VersionProps = {
  version: string;
  date?: string;
  description: string;
  changes: string[];
  url: string;
  onRecursionClick?: () => void;
};

const ChangelogVersionCard: Component<VersionProps> = (props) => {
  return (
    <button
      class="p-3 select-none bg-white shadow-lg rounded-lg mb-10 cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 hover:shadow-2xl active:scale-100 active:shadow-md block w-full text-left"
      onClick={() => {
        const shouldRecurse =
          props.onRecursionClick &&
          window.location.hash.endsWith("#/" + props.url);
        window.history.replaceState(null, "", window.location.pathname);
        window.location.hash = `/${props.url}`;
        if (shouldRecurse) {
          props.onRecursionClick();
        } else {
          window.location.reload();
        }
      }}
    >
      <div class="flex justify-between items-center flex-row">
        <p class="text-lg font-bold text-gray-800 mt-1">
          Version {props.version}
        </p>
        <p class="text-sm italic text-gray-600">{props.date}</p>
      </div>
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
        {changelogVisible() && (
          <div
            class="fixed top-0 right-0 w-1/3 min-w-[330px] h-full bg-gray-100 p-5 overflow-y-auto overflow-x-hidden scrollbar-custom2 max-h-fit z-[3000]"
            ref={changelogRef}
          >
            <button
              onClick={toggleChangelog}
              class="absolute text-xl top-2 left-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              ✕
            </button>
            <p class="text-center font-bold text-2xl mt-2 mb-6">Changelog</p>
            <p class="text-sm text-gray-700 mb-8">
              Click the cards to see how the site used to be! The full source
              code is available on&nbsp;
              <a
                class="link"
                href="https://github.com/addisongoolsbee/addisongoolsbee.com"
                target="_blank"
              >
                Github
              </a>
              .
            </p>
            <ChangelogVersionCard
              version="1.2 (In Progress)"
              date="August 2025"
              description="Secrets"
              changes={[
                "Hidden secrets page",
                "Encrypted password system",
                "One billion secrets (more or less)",
                "New blurb",
              ]}
              url=""
              onRecursionClick={props.handleRecursion}
            />
            <ChangelogVersionCard
              version="1.1"
              date="May 2025"
              description="Stuff"
              changes={[
                "Party mode",
                "Printer mode & pdf spoof",
                "Recursion mode",
                "Improved mobile layout",
                "High five button",
                "Google search improvements & analytics",
                "Hash-based navigation",
                "Miscellaneous improvements",
              ]}
              url="v1_1"
              onRecursionClick={props.handleRecursion}
            />
            <ChangelogVersionCard
              version="1.0"
              date="November 2023"
              description="Fully-functional MVP built in Solid.js"
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
              date="October 2023"
              description="Host change, restarting from scratch"
              changes={[
                "addisongoolsbee.com repository created",
                "Hosting changed from Nixihost to GitHub Pages",
                "Domain name shennanigans",
                "Solid.js/TailwindCSS/Vite base for the website with a small message",
                "GitHub action for deploying site",
              ]}
              url="v0_2"
            />
            <ChangelogVersionCard
              version="0.1"
              date="August 2023"
              description="Template-based site created in 1 hour"
              changes={[
                "Domain name and hosting purchased from Nixihost",
                "cPanel template website",
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
        {changelogVisible() && (
          <div
            class="absolute w-full h-full top-0 left-0 bg-black z-[2500] opacity-30"
            onClick={toggleChangelog}
          ></div>
        )}
      </Transition>
    </div>
  );
};
export default Changelog;
