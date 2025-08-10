import { Component } from "solid-js";

type Props = {
  toggleChangelog: () => void;
  togglePartyMode: () => void;
  handleRecursion: () => void;
};

const Navbar: Component<Props> = (props) => {
  const handleLogoClick = () => {
    props.handleRecursion();
  };

  return (
    <div class="flex flex-row items-center z-[2000] justify-between animate-navBar m-[0.95rem] sm:text-xl text-lg">
      <div
        class="relative h-[60%] overflow-hidden cursor-pointer w-10 sm:w-12 z-[2000]"
        onClick={handleLogoClick}
      >
        <img
          src="/images/whiteLogo.svg"
          alt="logo"
          class="h-full w-full object-cover select-none"
          draggable="false"
        />
      </div>
      <div class="flex flex-row items-center space-x-2 sm:space-x-6 sm:pr-4">
        <button class="navbarButton" onClick={props.togglePartyMode}>
          party
        </button>
        <button class="navbarButton" onClick={props.toggleChangelog}>
          version 1.1
        </button>
      </div>
    </div>
  );
};

export default Navbar;
