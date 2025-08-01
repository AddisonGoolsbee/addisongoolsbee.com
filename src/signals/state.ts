import { createSignal, JSX } from "solid-js";

export const [profileSrc, setProfileSrc] = createSignal("/images/profile.webp");
export const [myName, setMyName] = createSignal("Addison Goolsbee");
export const [blurbStart, setBlurbStart] = createSignal<string>(null);
export const [changelogVisible, setChangelogVisible] = createSignal(false);
export const [partyModeActive, setPartyModeActive] = createSignal(false);
export const [currentDecoderSecret, setCurrentDecoderSecret] = createSignal<
  string | null
>(null);
