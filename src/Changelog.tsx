import { type Component, JSX } from "solid-js";
import { Transition } from "solid-transition-group";

type Props = {
    changelogVisible: () => boolean;
    setChangelogVisible: () => void;
    toggleChangelog: () => void;
  };

const Changelog: Component<Props> = (props) => {
  const changelogKeyframes = [{ transform: "translateX(100%)" }, { transform: "translateX(0%)" }];
  const changelogAnimation = { duration: 600, easing: "ease-out" };
  const dimmerKeyFrames = [{ opacity: "0" }, { opacity: "0.3" }];
  const dimmerAnimation = { duration: 600, easing: "ease-out" };

  let changelogRef;

  return (
    <div>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate(changelogKeyframes, changelogAnimation);
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(changelogKeyframes, { ...changelogAnimation, direction: "reverse" });
          a.finished.then(done);
        }}
      >
        {props.changelogVisible() && (
          <div class="fixed top-0 right-0 w-1/3 h-full bg-gray-50 p-4 z-30" ref={changelogRef}>
            <button onClick={props.toggleChangelog}>click me</button>
          </div>
        )}
      </Transition>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate(dimmerKeyFrames, dimmerAnimation);
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate(dimmerKeyFrames, { ...dimmerAnimation, direction: "reverse" });
          a.finished.then(done);
        }}
      >
        {props.changelogVisible() && (
          <div
            class="absolute w-full h-full top-0 left-0 bg-black z-20 opacity-30"
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
