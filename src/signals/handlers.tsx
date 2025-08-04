import {
  myName,
  setMyName,
  setProfileSrc,
  setBlurbStart,
  currentDecoderSecret,
  isBlurry,
  setIsBlurry,
  setIsRainbowName,
  isRainbowName,
  setParticleEmoji,
  particleEmoji,
} from "./state";
import { brieBlurb, defaultBlurb } from "../utils/blurbs";
import { decryptWithPassword } from "../utils/cryptography";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const addisonImage = "/images/profile.webp";

export const sandwichMode = () => {
  const newSrc =
    myName() === "Sandwich"
      ? addisonImage
      : isSafari
      ? "/images/sandwich.gif"
      : "/images/sandwich.webp";
  setProfileSrc(newSrc);
  const newName = myName() === "Sandwich" ? "Addison Goolsbee" : "Sandwich";
  setMyName(newName);
  setBlurbStart(defaultBlurb);
};

export const brie = async () => {
  try {
    const newProfileSrc = await decryptWithPassword(
      "ad6db69d9aec241e93d42a621d07c0ba4d26a2f44b032abe2f718f670806b5d524dd44183f4ab15d193e734de55acd01a5dd2d3030ad2ee10dd4e7599fc77b1e5c8727c98d54ba314d94e5c9cc918d1d1b9129",
      currentDecoderSecret()
    );
    setProfileSrc(newProfileSrc);
    const newName = await decryptWithPassword(
      "5562f5aa8bcf22ac15b05428a4ce5cbd9ef66347cc442b0da187209c11e9dbbf12bae55cd09a217819d9992ee4755d03cec774738b03",
      currentDecoderSecret()
    );
    setMyName(newName);
    const newBlurb = await decryptWithPassword(
      brieBlurb,
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
}

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
}

export const eggshell = async () => {
  try {
    setBlurbStart(defaultBlurb);
    setMyName("Addison Goolsbee");
    setProfileSrc("/images/profile.webp");
    setIsRainbowName(!isRainbowName());

  } catch (error) {
    console.error("Failed to unlock eggshell secret:", error);
  }
}

export const pancake = async () => {
  try {
    const newParticleEmoji = await decryptWithPassword(
      "5b9d01ba01e779641e653e4b7256d50ac6e2ad59bfbdc242eddcf228b3cfbbd2f2fb9339c727068e1b4dc83f003c7d7767894e1701ad0d82c2",
      currentDecoderSecret()
    );
    if (newParticleEmoji == particleEmoji()) {
      setParticleEmoji("");
    } else {
      setParticleEmoji(newParticleEmoji);
    }
    console.log(particleEmoji());
  } catch (error) {
    console.error("Failed to unlock pancake secret:", error);
  }
}

export const kumquat = async () => {
  const image = await decryptWithPassword(
    "7862662757bf235b0a81c6048b35444957c8fc23acc9252bf3bff8643c7677cdd438a6a9c81775ba5c342de5d2aefed2f4479327b787db2a4be61a2ed7d8fb9ca458bae52141f8c411d0f7c5ceb9230edfeb8acd4f",
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
}