import type { Component, JSX } from "solid-js";

type Props = {
  text: string;
  href: string;
  icon: JSX.Element;
};

const BlurbButton: Component<Props> = (props) => {
  return (
    <div class="blurbButtons group">
      <span class="blurbButtonLabel">{props.text}</span>
      <a href={props.href} target="_blank" rel="noopener">
        {props.icon}
      </a>
    </div>
  );
};
export default BlurbButton;
