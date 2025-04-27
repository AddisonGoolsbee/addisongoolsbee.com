import { type Component, For } from "solid-js";

type Props = {
  src: string;
  recursionLevel: number;
  ref: (el: HTMLImageElement) => void;
  onLoad: () => void;
};

const RecursiveImageStack: Component<Props> = (props) => {
  return (
    <div class="relative w-full h-full">
      <For each={Array(props.recursionLevel + 1)}>
        {(_, index) => (
          <img
            src={props.src}
            alt="Addison"
            class="w-full h-auto object-contain max-h-full animate-slide-up select-none absolute"
            style={{
              bottom: index() === 0 ? "0" : `${index() * 12}px`,
              left: index() === 0 ? "0" : `${index() * 12}px`,
              "z-index": -index(),
            }}
            draggable="false"
            ref={index() === 0 ? props.ref : undefined}
            onLoad={index() === 0 ? props.onLoad : undefined}
          />
        )}
      </For>
    </div>
  );
};

export default RecursiveImageStack;
