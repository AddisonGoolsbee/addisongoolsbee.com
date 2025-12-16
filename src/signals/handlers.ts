import {
  myName,
  setMyName,
  profileSrc,
  setProfileSrc,
  setBlurbStart,
  currentDecoderSecret,
  isBlurry,
  setIsBlurry,
  setIsRainbowName,
  isRainbowName,
  setParticleEmoji,
  setPartyModeActive,
  setChangelogVisible,
  setRecursionLevel,
  setSecretMessage,
  setSecretMessageVisible,
  setParticleImageSrc,
} from "./state";
import { decryptWithPassword } from "../utils/cryptography";
import { defaultBlurbStart } from "../components/Blurb";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const addisonImage = "/images/profile.webp";
let gnocchiLoopActive = false;
let gnocchiLoopTimeout: ReturnType<typeof setTimeout> | null = null;
let gnocchiFirstPlayTimeout: ReturnType<typeof setTimeout> | null = null;

export const animateProfileSrc = async (newSrc: string) => {
  if (newSrc === profileSrc()) {
    return;
  }

  const profileImages = document.querySelectorAll<HTMLImageElement>('img[alt="Addison"]');

  // Animate current images sliding down/out
  if (profileImages.length > 0) {
    profileImages.forEach((img) => {
      img.classList.remove("animate-slide-up");
      img.classList.add("animate-slide-down-out");
    });

    await new Promise((resolve) => setTimeout(resolve, 800));
  }

  // Set the new src
  setProfileSrc(newSrc);

  // Wait until ALL new images are loaded
  const newProfileImages = document.querySelectorAll<HTMLImageElement>('img[alt="Addison"]');

  await Promise.all(
    Array.from(newProfileImages).map((img) => {
      return new Promise<void>((resolve) => {
        if (img.complete && img.naturalWidth !== 0) {
          resolve(); // already loaded
        } else {
          img.addEventListener("load", () => resolve(), { once: true });
          img.addEventListener("error", () => resolve(), { once: true }); // fail gracefully
        }
      });
    })
  );

  // Now trigger slide-up animation
  newProfileImages.forEach((img) => {
    img.classList.remove("animate-slide-down-out");
    img.classList.add("animate-slide-up");
  });
};

let secretTimer: number | undefined;

export function showSecretMessage(text: string, duration = 3000, fadeMs = 300) {
  setSecretMessage(text);
  setSecretMessageVisible(true);

  if (secretTimer) clearTimeout(secretTimer);
  secretTimer = window.setTimeout(() => {
    setSecretMessageVisible(false);
    window.setTimeout(() => setSecretMessage(""), fadeMs);
  }, duration);
}

export const reset = () => {
  setBlurbStart(defaultBlurbStart);
  setMyName("Addison Goolsbee");
  animateProfileSrc(addisonImage);
  setIsRainbowName(false);
  setIsBlurry(false);
  setParticleEmoji("");
  setPartyModeActive(false);
  setChangelogVisible(false);
  setRecursionLevel(0);
  if (window && window.location && window.history) {
    const url = window.location.origin + window.location.pathname + window.location.search;
    window.history.replaceState({}, document.title, url);
  }
  gnocchiLoopActive = false;
  if (gnocchiLoopTimeout) {
    clearTimeout(gnocchiLoopTimeout);
    gnocchiLoopTimeout = null;
  }
  if (gnocchiFirstPlayTimeout) {
    clearTimeout(gnocchiFirstPlayTimeout);
    gnocchiFirstPlayTimeout = null;
  }
  try {
    gnocchiSound.pause();
    gnocchiSound.currentTime = 0;
  } catch {
    // ignore
  }
};

export const sandwich = () => {
  const newSrc = myName() === "Sandwich" ? addisonImage : isSafari ? "/images/sandwich.gif" : "/images/sandwich.webp";
  animateProfileSrc(newSrc);
  const newName = myName() === "Sandwich" ? "Addison Goolsbee" : "Sandwich";
  setMyName(newName);
  setBlurbStart(defaultBlurbStart);
};

export const brie = async () => {
  try {
    const newProfileSrc = await decryptWithPassword(
      "ad6db69d9aec241e93d42a621d07c0ba4d26a2f44b032abe2f718f670806b5d524dd44183f4ab15d193e734de55acd01a5dd2d3030ad2ee10dd4e7599fc77b1e5c8727c98d54ba314d94e5c9cc918d1d1b9129",
      currentDecoderSecret()
    );
    animateProfileSrc(newProfileSrc);
    const newName = await decryptWithPassword(
      "5562f5aa8bcf22ac15b05428a4ce5cbd9ef66347cc442b0da187209c11e9dbbf12bae55cd09a217819d9992ee4755d03cec774738b03",
      currentDecoderSecret()
    );
    setMyName(newName);
    const newBlurb = await decryptWithPassword(
      "8cefb71d8c788c6b3d49760049a73fccb1018a5936a7edff8ee5825db9b5655b07a06ed56d24adaf3f69b94dab752902a12c075f891c8d43d681a836e682d25dd113e6ba17a51fbe1b189fd1ceb6eda24314c6ee1498bced3fb9f8471baa6252c337ed990afb8bbddbce166aa3a4069040e4a294ab269c83c9f754",
      currentDecoderSecret()
    );
    setBlurbStart(newBlurb);
  } catch (error) {
    console.error(error);
  }
};

export const carbonara = async () => {
  try {
    const link = await decryptWithPassword(
      "1fe475d0667b7aa49932d3dfb4e1b5763eb88d75f4405fc09dee131b5cc961e36366664c48a02435a0d4c089ba51aa1c573324f6e4253bc96fe2eda63dbb0b46a56c153cb8355c128cef057693c683df1622b3cc7c4fa9d4591b0b9945c1f838ca954b5508097dfca3a093206986bd2280505e40ce652ae3e77abf",
      currentDecoderSecret()
    );
    window.open(link, "_blank");
  } catch (error) {
    console.error("Failed to unlock carbonara secret:", error);
  }
};

export const cremebrulee = async () => {
  try {
    const newBlurb = await decryptWithPassword(
      "f249ab4ab0b1dc6eaa9932d1ecc9bbd1a2d34638951c7c702aae7bff16e4de7d84e506e6d924358f723bf436aa1900de64767576cfa4b054dfdd53144323d573243a139efc01",
      currentDecoderSecret()
    );
    setBlurbStart(newBlurb);
    const newName = await decryptWithPassword(
      "8cfe20a759d28689943f98cea4faa0af43cc9bacadefaed4088b369a7c77261f94c9fc19d9cab8be953efca0997ecf18a4610286ccd64f",
      currentDecoderSecret()
    );
    setMyName(newName);
    setIsBlurry(!isBlurry());
  } catch (error) {
    console.error("Failed to unlock cremebrulee secret:", error);
  }
};

export const eggshell = async () => {
  try {
    setBlurbStart(defaultBlurbStart);
    setMyName("Addison Goolsbee");
    animateProfileSrc(addisonImage);
    setIsRainbowName(!isRainbowName());
  } catch (error) {
    console.error("Failed to unlock eggshell secret:", error);
  }
};

export const pancake = async () => {
  try {
    const newParticleEmoji = await decryptWithPassword(
      "5b9d01ba01e779641e653e4b7256d50ac6e2ad59bfbdc242eddcf228b3cfbbd2f2fb9339c727068e1b4dc83f003c7d7767894e1701ad0d82c2",
      currentDecoderSecret()
    );
    setParticleEmoji(newParticleEmoji);
  } catch (error) {
    console.error("Failed to unlock pancake secret:", error);
  }
};

export const waffle = async () => {
  try {
    const imageSrc = await decryptWithPassword(
      "78cc4d1d337efb59d5976866607036b320d4743a2acdb0984ec3f458353df7870864e9a8c3f1920d450c55075ce5b6606a19969e888ff18483a269e6a0cb32fc97237ab7e5b83d9cd1f1a7527b6ccc942001f43565afafa1d80f104a0e2a19f13c8fbe93b38b26d2596d11",
      currentDecoderSecret()
    );
    setParticleEmoji("");
    setParticleImageSrc(imageSrc);
  } catch (error) {
    console.error("Failed to unlock waffle secret:", error);
  }
};

let kumquatTriggers = 0;
const kumquatSound = new Audio("/sounds/kumquat.mp3");
kumquatSound.load();

export const kumquat = async () => {
  const image = await decryptWithPassword(
    "a79f4c68742d82ba1ae8032339f548b281d945c97ac615c3036d9cb48540abb059b31ae433ee0ff9d2f0004ea74fce96874902652758e670d5a25e65c6305348ede785d4646cbe7aeb23ab56760ce631a57be6396f0c034afe0662f21da2b2fefb55bd929855e60ed3fbcd",
    currentDecoderSecret()
  );
  const img = document.createElement("img");
  img.src = image;
  img.style.position = "fixed";
  img.style.pointerEvents = "none";
  img.style.left = `${Math.random() * (window.innerWidth + 100) - 50}px`;
  img.style.top = `${Math.random() * (window.innerHeight + 100) - 50}px`;
  const scale = 1 + Math.random() * 0.5;
  const rotation = Math.random() * 360;
  img.style.transform = `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
  img.style.width = "500px";
  img.style.height = "500px";
  img.style.objectFit = "contain";
  img.style.borderRadius = "50%";
  document.body.appendChild(img);

  // Movement logic (+90deg offset)
  const angleRad = ((rotation + 90) * Math.PI) / 180;
  let x = parseFloat(img.style.left);
  let y = parseFloat(img.style.top);
  let velocity = 0; // initial velocity
  const acceleration = 0.02; // px/frame^2
  const duration = 10000; // ms
  const start = performance.now();

  function animate(now: number) {
    const elapsed = now - start;
    if (elapsed > duration) {
      img.remove();
      return;
    }
    velocity += acceleration * (elapsed / duration);
    x += Math.cos(angleRad) * velocity;
    y += Math.sin(angleRad) * velocity;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  kumquatTriggers++;
  if (kumquatTriggers % 10 === 0) {
    const newBlurb = await decryptWithPassword(
      "6a70a356222bbf6b3c322591a8b0c21c9552814771a75594f35792f15b415a0eea6765e4f4516160762f3eeafca83742278cadbbd40f",
      currentDecoderSecret()
    );
    setBlurbStart(newBlurb);
    const newName = await decryptWithPassword(
      "740f64c46cb6640b48f5351cbb55eebe98e948d6ac5e56a9ae563fa17f818f2fc11b8125c62d1152865f6e4fb5a92c5cd0ebf5",
      currentDecoderSecret()
    );
    setMyName(newName);
    const newProfileSrc = await decryptWithPassword(
      "7862662757bf235b0a81c6048b35444957c8fc23acc9252bf3bff8643c7677cdd438a6a9c81775ba5c342de5d2aefed2f4479327b787db2a4be61a2ed7d8fb9ca458bae52141f8c411d0f7c5ceb9230edfeb8acd4f",
      currentDecoderSecret()
    );
    animateProfileSrc(newProfileSrc);
    kumquatSound.currentTime = 0;
    kumquatSound.volume = 0.7;
    kumquatSound.playbackRate = 0.2;

    kumquatSound.play().catch((err) => console.error("Failed to play sound:", err));
  } else {
    kumquatSound.currentTime = 0;
    kumquatSound.volume = 0.5;
    kumquatSound.playbackRate = 1;
    kumquatSound.play().catch((err) => console.error("Failed to play sound:", err));
  }
};

const gnocchiSound = new Audio("/sounds/gnocchi.mp3");
gnocchiSound.load();
export const gnocchi = async () => {
  try {
    const newProfileSrc = await decryptWithPassword(
      "d812810726df0a7aaa9477aaa71132e40aa2c691fed5952fb139f85e7182edef644f5f6fafe5881ef3439df43adfaf68a819e18f272da6980cdeca72ac71b8ec1c24e8dfe615d2203e18aceb80a616064d2fe0b103d3317b88bfe495bfac32388c6ba87922e7f23252691d",
      currentDecoderSecret()
    );
    animateProfileSrc(newProfileSrc);
    const firstTime = !gnocchiLoopActive;
    gnocchiSound.currentTime = 0;
    gnocchiSound.volume = 0.7;
    if (firstTime) {
      gnocchiLoopActive = true;
      gnocchiFirstPlayTimeout = setTimeout(() => {
        gnocchiSound.play().catch((err) => console.error("Failed to play sound:", err));
      }, 1000);
      scheduleGnocchiLoop();
    } else {
      gnocchiSound.play().catch((err) => console.error("Failed to play sound:", err));
    }
  } catch (error) {
    console.error("Failed to unlock gnocchi secret:", error);
  }
};

function scheduleGnocchiLoop() {
  const delay = Math.random() * (10_000 - 5_000) + 5_000;
  gnocchiLoopTimeout = setTimeout(async () => {
    try {
      gnocchiSound.currentTime = 0;
      await gnocchiSound.play();
    } catch (e) {
      console.error("Gnocchi play failed:", e);
    }
    if (gnocchiLoopActive) scheduleGnocchiLoop();
  }, delay);
}

export const cheesecake0 = async () => {
  const name = await decryptWithPassword(
    "80123f70aade2eea45f6654dad5eef2551fe9e2deca67b2bf4b48cf769f0578be0e144b99d424be3df445157d604101bd5d5a2a9ce8d",
    currentDecoderSecret()
  );
  const blurb = await decryptWithPassword(
    "a2f79d3240a046d3c7500085e91100b3765129851b6fa397469eb5e994ee22ffb2d67b984fd1759fc001609e42e9f02bcd2eef463973df29acff345a18c2851d3c4f7d76617701c67a9b4c47016311d3260f203b1b434a5ed5ac48e893a39ecd6c77f21e8407ec5443891cfa5d2fcf448ef6f9cc8ffd77cb6cd101f59b062163a915e864caf9f4fbec7321e3e0237693def76b08f044d94b98520610b6695f90e17f228b1553cfe9521e35f468720be247da",
    currentDecoderSecret()
  );
  setMyName(name);
  setBlurbStart(blurb);
};
