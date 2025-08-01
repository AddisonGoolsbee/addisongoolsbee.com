import { myName, setMyName, setProfileSrc } from "./state";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const addisonImage = "/images/profile.webp";

export const sandwichMode = () => {
  const newSrc =
    myName() === "Addison Goolsbee"
      ? isSafari
        ? "/images/sandwich.gif"
        : "/images/sandwich.webp"
      : addisonImage;
  setProfileSrc(newSrc);
  const newName =
    myName() === "Addison Goolsbee" ? "Sandwich" : "Addison Goolsbee";
  setMyName(newName);
};
