import { createSignal } from "solid-js";

export const [profileSrc, setProfileSrc] = createSignal("/images/profile.webp");
export const [myName, setMyName] = createSignal("Addison Goolsbee");
export const [blurbStart, setBlurbStart] = createSignal<string>(null);
export const [changelogVisible, setChangelogVisible] = createSignal(false);
export const [partyModeActive, setPartyModeActive] = createSignal(false);
export const [currentDecoderSecret, setCurrentDecoderSecret] = createSignal<string | null>(null);
export const [isBlurry, setIsBlurry] = createSignal(false);
export const [isRainbowName, setIsRainbowName] = createSignal(false);

export type ParticleMode = { kind: "circle" } | { kind: "emoji"; emoji: string } | { kind: "image"; src: string };

export const [particleMode, setParticleMode] = createSignal<ParticleMode>({
  kind: "circle",
});

export const particleEmoji = () => {
  const mode = particleMode();
  return mode.kind === "emoji" ? mode.emoji : "";
};
export const setParticleEmoji = (emoji: string) => {
  const next = emoji.trim();
  setParticleMode(next ? { kind: "emoji", emoji: next } : { kind: "circle" });
};

export const particleImageSrc = () => {
  const mode = particleMode();
  return mode.kind === "image" ? mode.src : "";
};
export const setParticleImageSrc = (src: string) => {
  const next = src.trim();
  setParticleMode(next ? { kind: "image", src: next } : { kind: "circle" });
};
export const [recursionLevel, setRecursionLevel] = createSignal(0);
export const [blurbType, setBlurbType] = createSignal<"default" | "secrets">("default");
export const [secretMessage, setSecretMessage] = createSignal<string>("hello");
export const [secretMessageVisible, setSecretMessageVisible] = createSignal(false);

export const toggleChangelog = () => {
  setChangelogVisible(!changelogVisible());
};

export const togglePartyMode = () => {
  setPartyModeActive(!partyModeActive());
};
