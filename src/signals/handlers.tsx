import {
  myName,
  setMyName,
  setProfileSrc,
  setBlurbStart,
  currentDecoderSecret,
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
      "89913526a28f2007242f3413dcd6104fdb6d5f94f9e8e9a05390ff5b70d9eb3cac82636c0ccbcb34e6ade1b893853d4275d490646d53676fa7496009d9613de18c859d2e6b81a0770cacd1a4bc1ba83bbffb6067fee7a07f6e1879332a0ccf84adf56dfaa1ff0d881b931d1e21ec2b841858fd7d93d525e71ded613c451309fd745269d494e2f69db2a4393e862144bef7fc9aee43bfb5a81eb9b4c6fab6b5a1dfac706dfecb2ee160ec903d8ef000bfa23091b7b9b9e323d2b2e4ceb6a734b2d7e0f8fa168d5a5056911866703c64e0ac361616acb028b4b29dfa982cb9c866f8a04a46ee7ab945bce76c895ab281e4dd606ee5c8a1107b8bb487c4d44b",
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
