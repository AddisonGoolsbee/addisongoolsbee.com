import { myName, setMyName, setProfileSrc } from "./state";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const addisonProfileURL = "/images/profile.webp";
const sandwichURL = "/images/sandwich.webp";
const sandwichGifURL = "/images/sandwich.gif";

export const sandwichMode = () => {
  const newSrc =
    myName() === "Addison Goolsbee"
      ? isSafari
        ? sandwichGifURL
        : sandwichURL
      : addisonProfileURL;
  setProfileSrc(newSrc);
  const newName =
    myName() === "Addison Goolsbee" ? "Sandwich" : "Addison Goolsbee";
  setMyName(newName);
};
