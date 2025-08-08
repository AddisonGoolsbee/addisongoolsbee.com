import { type Component, createSignal, For, Show } from "solid-js";
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
  const [showInput, setShowInput] = createSignal(false);

  const handleTripleTap = () => {
    const now = Date.now();
    if (!(handleTripleTap as any).taps) (handleTripleTap as any).taps = [];
    const taps: number[] = (handleTripleTap as any).taps;
    while (taps.length && now - taps[0] > 500) taps.shift();
    taps.push(now);

    if (taps.length >= 3) {
      setShowInput(!showInput());
      (handleTripleTap as any).taps = [];
      setTimeout(() => document.getElementById("secret-input")?.focus(), 0);
    }
  };

  return (
    <div
      class="relative w-full h-full select-none flex items-end"
      onTouchEnd={handleTripleTap}
    >
      <Show when={showInput()}>
        <div class="absolute top-80 inset-0 flex items-center justify-center z-30">
          <input
            id="secret-input"
            type="text"
            class="w-3/4 bg-black bg-opacity-50 text-white p-2 rounded border-none focus:ring-0"
            placeholder="Type secret here..."
            onBlur={() => setShowInput(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                (e.target as HTMLInputElement).value = "";
              }
            }}
          />
        </div>
      </Show>
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
