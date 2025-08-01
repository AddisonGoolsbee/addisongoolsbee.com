// import { sandwichMode, togglePartyMode } from "../pages/Home";

export interface Secret {
  hash: string; // SHA-256 hash of the secret word
  onUnlock: () => void; // Function to call when the secret is unlocked
}

export const secrets: Secret[] = [
  {
    hash: "defd366dfb7858db279a4bedcf8fa6be6195b6ad817fd38504e52406c3dc797a", // hash of "sandwich"
    onUnlock: void 0,
  },
  {
    hash: "d6c6f1f9b1234abc9876543210deadbeefcafebabefeedface123456789efgh", // hash of "party"
    onUnlock: void 0,
  },
];      