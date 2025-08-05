import { createSignal } from "solid-js";

export const [profileSrc, setProfileSrc] = createSignal("/images/profile.webp");
export const [myName, setMyName] = createSignal("Addison Goolsbee");
export const [blurbStart, setBlurbStart] = createSignal<string>(null);
export const [changelogVisible, setChangelogVisible] = createSignal(false);
export const [partyModeActive, setPartyModeActive] = createSignal(false);
export const [currentDecoderSecret, setCurrentDecoderSecret] = createSignal<
  string | null
>(null);
export const [isBlurry, setIsBlurry] = createSignal(false);
export const [isRainbowName, setIsRainbowName] = createSignal(false);
export const [particleEmoji, setParticleEmoji] = createSignal("");
export const [recursionLevel, setRecursionLevel] = createSignal(0);