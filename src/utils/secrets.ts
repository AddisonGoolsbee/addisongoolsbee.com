// import { sandwichMode, togglePartyMode } from "../pages/Home";

import { sandwichMode } from "../signals/handlers";
import { changelogVisible, partyModeActive, setChangelogVisible, setPartyModeActive } from "../signals/state";

export interface Secret {
  hash: string;
  onUnlock: () => void; 
}

export const secrets: Secret[] = [
  {
    hash: "defd366dfb7858db279a4bedcf8fa6be6195b6ad817fd38504e52406c3dc797a",
    onUnlock: sandwichMode,
  },
  {
    hash: "d201cbb3301653ecc4764d351c73afa79420b5c5c471673e7bef06aa9c82cb94",
    onUnlock: () => setChangelogVisible(!changelogVisible()),
  },
  {
    hash: "678d17c5cc93650ae1103104773895cce95b38cba1eea62bc678701a6961b8f5",
    onUnlock: () => setPartyModeActive(!partyModeActive()), 
  },
];      