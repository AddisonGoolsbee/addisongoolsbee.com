import { createSignal, onMount } from "solid-js";
import Changelog from "./Changelog";
import { Show } from "solid-js";

export const FakeChangelog = () => {
  const [changelogVisible, setChangelogVisible] = createSignal(false);
  const [buttonVisible, setButtonVisible] = createSignal(false);

  const toggleChangelog = () => {
    setChangelogVisible(!changelogVisible());
  };

  onMount(() => {
    setTimeout(() => {
      setButtonVisible(true);
    }, 2000);
  });

  return (
    <>
      <Show when={buttonVisible()}>
        <button
          class="text-gray-900 fixed top-0 right-0 p-4 text-xl font-medium shadow-lg rounded-full m-4 bg-gray-50 animate-slide-down hover:bg-gray-100 transition-all duration-100 z-50"
          onClick={toggleChangelog}
        >
          changelog
        </button>
      </Show>
      <Changelog
        changelogVisible={changelogVisible}
        setChangelogVisible={setChangelogVisible}
        toggleChangelog={toggleChangelog}
      />
    </>
  );
};
