import {
  sandwich,
  reset,
  brie,
  carbonara,
  cremebrulee,
  eggshell,
  pancake,
  kumquat,
  gnocchi,
  waffle,
  cheesecake0,
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
}

export const secrets: Secret[] = [
  {
    hash: "defd366dfb7858db279a4bedcf8fa6be6195b6ad817fd38504e52406c3dc797a",
    onUnlock: sandwich,
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
  },
  {
    hash: "e024e33d8db99e959fd85c1b38c28fb7abbace536365db956009060733d38c9b",
    onUnlock: () => carbonara(),
  },
  {
    hash: "037525c583a2ca4e3a5ff24c475b9d6070e2314c6295674b6a87b1ad5f61afc7",
    onUnlock: () => cremebrulee(),
  },
  {
    hash: "08d25679c37f07b2605a15537c7f5338f020c5887c35a46469aa51bd3e189b53",
    onUnlock: () => eggshell(),
  },
  {
    hash: "1716131c789f581164846ebe440c4edc7a315f35b96efe7cc0083a2900cde67f",
    onUnlock: () => pancake(),
  },
  {
    hash: "223ef71359c426788e306b6bfe08a07201519827eb9787179261d504fa4fe11c",
    onUnlock: () => waffle(),
  },
  {
    hash: "32d1abff5e189d2736c4a126c7da616f51a7f569bdd2572354898c21a0271446",
    onUnlock: () => kumquat(),
  },
  {
    hash: "a00649668afccad4ce6cb6a8249a4ade8898e98395648b79e0f53c12945b72bc",
    onUnlock: () => reset(),
  },
  {
    hash: "d417d021f3f3bbb5a0d86ec88187316ae9d9e7a5a8902c26fad644d806f34908",
    onUnlock: () => gnocchi(),
  },
  {
    hash: "d67193170a4bbfacff5a347099bf95d45591d23ce87a580308c7e4a5af01fd0c",
    onUnlock: () => cheesecake0(),
  },
];
