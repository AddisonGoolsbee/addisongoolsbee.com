import { createEffect, onCleanup } from 'solid-js';

const Party = () => {
  createEffect(() => {
    const spawnCircles = () => {
      const container = document.querySelector('#party-container') as HTMLElement;
      if (!container) return;

      const isMobile = window.innerWidth < 768;

      const numRows = isMobile ? 7 : 11;
      const numColumns = isMobile ? 11 : 21;
      const centerRow = Math.floor(numRows / 2);
      const ballRadius = isMobile ? 40 : 60;
      const maxRowFactor = Math.pow(centerRow, 2);
      const speed = isMobile ? 5 : 7;
      const sphereRadius = isMobile ? 25 : 20;
      const sphereHeightScale = isMobile ? 0.5 : 1

      const getRainbowColor = (index: number, total: number): string => {
        const hue = (index / total) * 360;
        return `hsl(${hue}, 100%, 50%)`;
      };

      const rowHeight = 100 / (numRows - 1);

      // Create and append circles once
      for (let col = 0; col < numColumns; col++) {
        for (let row = 0; row < numRows; row++) {
          const animationDelay = (col / numColumns) * speed;
          const rowFactor = (Math.pow(row - centerRow, 2) * sphereRadius) / maxRowFactor;

          const circle = document.createElement('div');
          circle.style.width = `${ballRadius}px`;
          circle.style.height = `${ballRadius}px`;
          circle.classList.add(
            'absolute',
            'rounded-full',
            'opacity-0',
            'transition-opacity',
            'duration-300',
            'ease-in-out'
          );

          circle.style.backgroundColor = getRainbowColor(col + numColumns, numColumns);
          circle.style.top = `calc(${((row * rowHeight) * sphereHeightScale) + (100 - sphereHeightScale * 100)}dvh - ${
            ballRadius * ((row + (row > 0 ? 1 : 0)) / numRows)
          }px)`;
          circle.style.animationDelay = `${animationDelay}s`;
          circle.style.animationDuration = `${speed}s`;
          circle.style.animationIterationCount = 'infinite';

          // Create unique keyframes if not already created
          const keyframeName = `move-row-${row}-${col}`;
          const existingRule = [...document.styleSheets[0].cssRules].some(
            (rule) => rule instanceof CSSKeyframesRule && rule.name === keyframeName
          );

          if (!existingRule) {
            const keyframes = `
              @keyframes ${keyframeName} {
                0% { left: calc(50vw - ${ballRadius / 2}px); z-index: 1000; animation-timing-function: ease-out; opacity: 1; }
                25% { left: calc(${100 - rowFactor}vw - ${ballRadius}px); z-index: 500; animation-timing-function: ease-in; }
                50% { left: calc(50vw - ${ballRadius / 2}px); z-index: 1; animation-timing-function: ease-out; }
                75% { left: calc(${rowFactor}vw); z-index: 500; animation-timing-function: ease-in; }
                100% { left: calc(50vw - ${ballRadius / 2}px); z-index: 1000; animation-timing-function: ease-out; opacity: 1; }
              }`;
            (document.styleSheets[0] as CSSStyleSheet).insertRule(
              keyframes,
              document.styleSheets[0].cssRules.length
            );
          }

          circle.style.animationName = keyframeName;
          container.appendChild(circle);
        }
      }
    };

    // Start the spawning process after 300ms delay
    const spawnTimeout = setTimeout(spawnCircles, 700);

    // Cleanup function to remove circles and clear timeout when unmounting
    onCleanup(() => {
      clearTimeout(spawnTimeout);
      const container = document.querySelector('#party-container') as HTMLElement;
      if (container) container.innerHTML = '';
    });
  });

  return (
    <div id="party-container" class="absolute inset-0 overflow-hidden"></div>
  );
};

export default Party;
