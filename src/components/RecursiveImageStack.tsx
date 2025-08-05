import { type Component, For } from "solid-js";
import { isBlurry, recursionLevel } from "../signals/state";

type Props = {
  src: string;
  ref: (el: HTMLImageElement) => void;
  onLoad: () => void;
  firstImageRef?: (el: HTMLImageElement) => void;
};

const isMobile = window.innerWidth < 640;
const OFFSET = isMobile ? 20 : 40;

const RecursiveImageStack: Component<Props> = (props) => {
  return (
    <div class="relative w-full h-full select-none flex items-end">
      <For each={Array(recursionLevel() + 1)}>
        {(_, index) => {
          const wrapperStyle = `
          transform: translate(${index() * OFFSET}px, ${-index() * OFFSET}px);
          z-index: ${-index()};
        `;
          const baseImgStyle = `
  bottom: ${index() * OFFSET}px;          /* vertical offset on the bitmap */
  animation-delay: ${index() * 0.1}s;
`;
          return (
            <div
              style={wrapperStyle}
              class="absolute will-change-transform w-full h-full overflow-hidden flex items-end"
            >
              <img
                src={props.src}
                alt="Addison"
                class="w-full h-auto max-h-full object-contain opacity-0 animate-slide-up transition-opacity duration-500"
                style={`${baseImgStyle} filter: ${
                  isBlurry() ? "blur(8px)" : "none"
                };`}
                decoding="async"
                fetchpriority={index() === 0 ? "high" : "low"}
                draggable="false"
                ref={(el) => {
                  if (index() === 0) {
                    props.ref?.(el);
                    props.firstImageRef?.(el);
                  }
                }}
                onLoad={index() === 0 ? props.onLoad : undefined}
              />
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default RecursiveImageStack;
