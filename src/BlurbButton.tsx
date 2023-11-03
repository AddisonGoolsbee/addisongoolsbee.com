import type { Component, JSX } from "solid-js";
import { FaBrandsLinkedin, FaBrandsGithub } from "solid-icons/fa";
import { FiMail, FiFileText } from "solid-icons/fi";

type Props = {
  text: string;
  href: string;
  icon: JSX.Element;
};

const BlurbButton: Component<Props> = (props) => {
  return (
    <div class="blurbButtons group">
      <a href={props.href} target="_blank" rel="noopener">
        {props.icon}
      </a>
      <span class="blurbButtonLabel">{props.text}</span>
    </div>
  );
};
export default BlurbButton;
