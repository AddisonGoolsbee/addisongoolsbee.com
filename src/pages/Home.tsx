import { onMount, type Component, onCleanup, createSignal, Show, createEffect } from "solid-js";
import Particles from "../components/Particles";
import Blurb from "../components/Blurb";
import Changelog from "../components/Changelog";
import Navbar from "../components/Navbar";
import { useCanonical } from "../utils/canonical";
import Party from "../components/Party";

const Home: Component = () => {
  useCanonical();
  let imgRef;

  const profileURL = "/images/profile.webp";
  const sandwichURL = "/images/sandwich.webp"
  const sandwichGifURL = "/images/sandwich.gif";

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const [topPoint, setTopPoint] = createSignal(window.innerHeight);
  const [imageLoaded, setImageLoaded] = createSignal(false);
  const [changelogVisible, setChangelogVisible] = createSignal(false);
  const [partyModeActive, setPartyModeActive] = createSignal(false);
  const [profileSrc, setProfileSrc] = createSignal(profileURL);
  const [myName, setMyName] = createSignal("Addison Goolsbee");
  const [isProfileLoaded, setIsProfileLoaded] = createSignal(false);

  onMount(() => {
    const img = new Image();
    img.onload = () => setIsProfileLoaded(true);
    img.src = profileSrc();

    setTimeout(() => {
      const img = new Image();
      img.src = sandwichURL;
    }, 0);

    window.addEventListener("resize", updateTopPoint);
    updateTopPoint();
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateTopPoint);
  });

  const updateTopPoint = () => {
    if (imgRef) {
      const rect = imgRef.getBoundingClientRect();
      if (window.innerWidth >= 640) {
        setTopPoint(0);
      } else {
        setTopPoint(rect.height);
      }
    }
  };

  const onImageLoad = () => {
    updateTopPoint();
    setImageLoaded(true);
  };

  const toggleChangelog = () => {
    setChangelogVisible(!changelogVisible());
  };

  const togglePartyMode = () => {
    setPartyModeActive(!partyModeActive());
  };

  const sandwichMode = () => {
    const newSrc = profileSrc() === profileURL ? (isSafari ? sandwichGifURL : sandwichURL) : profileURL;
    setProfileSrc(newSrc);
    const newName = myName() === "Addison Goolsbee" ? "Sandwich" : "Addison Goolsbee";
    setMyName(newName);
  };

  return (
    <div class="h-[100dvh] overflow-hidden relative bg-gray-800">
      <Show when={partyModeActive()}>
        <Party />
      </Show>
      <Particles />

      <Navbar toggleChangelog={toggleChangelog} togglePartyMode={togglePartyMode} />
      
      <Show when={isProfileLoaded()}>
        <div class={`absolute w-5/6 h-9/10 -bottom-1 flex items-end left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out z-[500] ${partyModeActive() ? "sm:left-1/2" : "sm:left-22p"}`}>
          <img src={profileSrc()} alt="Addison" class="w-full h-auto object-contain max-h-full animate-slide-up select-none" draggable="false" ref={imgRef} onLoad={onImageLoad} />
        </div>
      </Show>
      <Show when={imageLoaded()}>
        <Blurb imgTop={topPoint()} toggleChangelog={toggleChangelog} sandwichMode={sandwichMode} partyModeActive={partyModeActive()} myName={myName()} />
      </Show>
      <Changelog changelogVisible={changelogVisible} setChangelogVisible={setChangelogVisible} toggleChangelog={toggleChangelog} />
    </div>
  );
};

export default Home;
