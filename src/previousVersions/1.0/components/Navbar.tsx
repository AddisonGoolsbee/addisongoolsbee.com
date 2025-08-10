import { Component } from "solid-js";

type Props = {
  toggleChangelog: () => void;
};

const Navbar: Component<Props> = (props) => {
  return (
    <div class="absolute top-0 right-0 flex flex-row items-center space-x-4 animate-navBar pr-4 h-16">
      <button class="navbarButton" onClick={props.toggleChangelog}>
        version 1.0
      </button>
    </div>
  );
};

export default Navbar;
