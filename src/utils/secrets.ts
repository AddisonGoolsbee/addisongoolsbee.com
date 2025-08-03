import {
  sandwichMode,
  brie,
  carbonara,
  cremebrulee,
  eggshell,
} from "../signals/handlers";
import {
  changelogVisible,
  partyModeActive,
  setChangelogVisible,
  setPartyModeActive,
} from "../signals/state";

export interface Secret {
  hash: string;
  onUnlock: () => void;
  dynamicDecode?: boolean;
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
  {
    hash: "49720cd8066641e8d16c08b1b68122a90ae50e07d08b89a7ec072e4a3ac6d92a",
    onUnlock: () => brie(),
    dynamicDecode: true,
  },
  {
    hash: "e024e33d8db99e959fd85c1b38c28fb7abbace536365db956009060733d38c9b",
    onUnlock: () => carbonara(),
    dynamicDecode: true,
  },
  {
    hash: "037525c583a2ca4e3a5ff24c475b9d6070e2314c6295674b6a87b1ad5f61afc7",
    onUnlock: () => cremebrulee(),
    dynamicDecode: true,
  },
  {
    hash: "08d25679c37f07b2605a15537c7f5338f020c5887c35a46469aa51bd3e189b53",
    onUnlock: () => eggshell(),
    dynamicDecode: true,
  },
];
