import { type ReactNode } from "react";
import { useRouter } from "next/router";

import Character from "@/components/Character";
import Location from "@/components/Location";
import type { TCharacter, TLocation } from "@/types";

type Tab = "characters" | "locations";

const TABS: { key: Tab; label: string }[] = [
  { key: "characters", label: "Characters" },
  { key: "locations", label: "Locations" },
];

const DEFAULT_TAB: Tab = "characters";

/* TODO: Hardcoded data, remove once api implemented */
const characters: TCharacter[] = [
  { id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", type: "", gender: "Male", origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" }, location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/1", created: "2017-11-04T18:48:46.250Z" },
  { id: 2, name: "Morty Smith", status: "Alive", species: "Human", type: "", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/2", created: "2017-11-04T18:50:21.651Z" },
  { id: 3, name: "Summer Smith", status: "Alive", species: "Human", type: "", gender: "Female", origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/3", created: "2017-11-04T19:09:56.428Z" },
  { id: 4, name: "Beth Smith", status: "Alive", species: "Human", type: "", gender: "Female", origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/4", created: "2017-11-04T19:22:43.665Z" },
  { id: 5, name: "Jerry Smith", status: "Alive", species: "Human", type: "", gender: "Male", origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/5", created: "2017-11-04T19:26:56.301Z" },
  { id: 6, name: "Abadango Cluster Princess", status: "Alive", species: "Alien", type: "", gender: "Female", origin: { name: "Abadango", url: "https://rickandmortyapi.com/api/location/2" }, location: { name: "Abadango", url: "https://rickandmortyapi.com/api/location/2" }, image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/6", created: "2017-11-04T19:50:28.250Z" },
  { id: 7, name: "Abradolf Lincler", status: "unknown", species: "Human", type: "Genetic experiment", gender: "Male", origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, location: { name: "Testicle Monster Dimension", url: "https://rickandmortyapi.com/api/location/21" }, image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/7", created: "2017-11-04T19:59:20.523Z" },
  { id: 8, name: "Adjudicator Rick", status: "Dead", species: "Human", type: "", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/8", created: "2017-11-04T20:03:34.737Z" },
  { id: 9, name: "Agency Director", status: "Dead", species: "Human", type: "", gender: "Male", origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/9", created: "2017-11-04T20:06:54.976Z" },
  { id: 10, name: "Alan Rails", status: "Dead", species: "Human", type: "Superhuman (Ghost trains summoner)", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Worldender's lair", url: "https://rickandmortyapi.com/api/location/4" }, image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/10", created: "2017-11-04T20:19:09.017Z" },
  { id: 11, name: "Albert Einstein", status: "Dead", species: "Human", type: "", gender: "Male", origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/11", created: "2017-11-04T20:20:20.965Z" },
  { id: 12, name: "Alexander", status: "Dead", species: "Human", type: "", gender: "Male", origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" }, location: { name: "Anatomy Park", url: "https://rickandmortyapi.com/api/location/5" }, image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/12", created: "2017-11-04T20:32:33.144Z" },
  { id: 13, name: "Alien Googah", status: "unknown", species: "Alien", type: "", gender: "unknown", origin: { name: "unknown", url: "" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/13", created: "2017-11-04T20:33:30.779Z" },
  { id: 14, name: "Alien Morty", status: "unknown", species: "Alien", type: "", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/14", created: "2017-11-04T20:51:31.373Z" },
  { id: 15, name: "Alien Rick", status: "unknown", species: "Alien", type: "", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/15", created: "2017-11-04T20:56:13.215Z" },
  { id: 16, name: "Amish Cyborg", status: "Dead", species: "Alien", type: "Parasite", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" }, image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/16", created: "2017-11-04T21:12:45.235Z" },
  { id: 17, name: "Annie", status: "Alive", species: "Human", type: "", gender: "Female", origin: { name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1" }, location: { name: "Anatomy Park", url: "https://rickandmortyapi.com/api/location/5" }, image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/17", created: "2017-11-04T22:21:24.481Z" },
  { id: 18, name: "Antenna Morty", status: "Alive", species: "Human", type: "Human with antennae", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Citadel of Ricks", url: "https://rickandmortyapi.com/api/location/3" }, image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/18", created: "2017-11-04T22:25:29.008Z" },
  { id: 19, name: "Antenna Rick", status: "unknown", species: "Human", type: "Human with antennae", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "unknown", url: "" }, image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/19", created: "2017-11-04T22:28:13.756Z" },
  { id: 20, name: "Ants in my Eyes Johnson", status: "unknown", species: "Human", type: "Human with ants in his eyes", gender: "Male", origin: { name: "unknown", url: "" }, location: { name: "Interdimensional Cable", url: "https://rickandmortyapi.com/api/location/6" }, image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg", episode: [], url: "https://rickandmortyapi.com/api/character/20", created: "2017-11-04T22:34:53.659Z" },
];

/* TODO: Hardcoded data, remove once api implemented */
const locations: TLocation[] = [
  { id: 1, name: "Earth (C-137)", type: "Planet", dimension: "Dimension C-137", residents: [], url: "https://rickandmortyapi.com/api/location/1", created: "2017-11-10T12:42:04.162Z" },
  { id: 2, name: "Abadango", type: "Cluster", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/2", created: "2017-11-10T13:06:38.182Z" },
  { id: 3, name: "Citadel of Ricks", type: "Space station", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/3", created: "2017-11-10T13:08:13.191Z" },
  { id: 4, name: "Worldender's lair", type: "Planet", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/4", created: "2017-11-10T13:08:20.569Z" },
  { id: 5, name: "Anatomy Park", type: "Microverse", dimension: "Dimension C-137", residents: [], url: "https://rickandmortyapi.com/api/location/5", created: "2017-11-10T13:08:46.060Z" },
  { id: 6, name: "Interdimensional Cable", type: "TV", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/6", created: "2017-11-10T13:09:09.102Z" },
  { id: 7, name: "Immortality Field Resort", type: "Resort", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/7", created: "2017-11-10T13:09:17.136Z" },
  { id: 8, name: "Post-Apocalyptic Earth", type: "Planet", dimension: "Post-Apocalyptic Dimension", residents: [], url: "https://rickandmortyapi.com/api/location/8", created: "2017-11-10T13:09:22.551Z" },
  { id: 9, name: "Purge Planet", type: "Planet", dimension: "Replacement Dimension", residents: [], url: "https://rickandmortyapi.com/api/location/9", created: "2017-11-10T13:09:29.566Z" },
  { id: 10, name: "Venzenulon 7", type: "Planet", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/10", created: "2017-11-18T11:21:51.643Z" },
  { id: 11, name: "Bepis 9", type: "Planet", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/11", created: "2017-11-18T11:26:03.325Z" },
  { id: 12, name: "Cronenberg Earth", type: "Planet", dimension: "Cronenberg Dimension", residents: [], url: "https://rickandmortyapi.com/api/location/12", created: "2017-11-18T11:29:27.857Z" },
  { id: 13, name: "Nuptia 4", type: "Planet", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/13", created: "2017-11-18T11:30:29.780Z" },
  { id: 14, name: "Giant's Town", type: "Fantasy town", dimension: "Fantasy Dimension", residents: [], url: "https://rickandmortyapi.com/api/location/14", created: "2017-11-18T11:31:15.248Z" },
  { id: 15, name: "Bird World", type: "Planet", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/15", created: "2017-11-18T11:32:26.752Z" },
  { id: 16, name: "St. Gloopy Noops Hospital", type: "Space station", dimension: "unknown", residents: [], url: "https://rickandmortyapi.com/api/location/16", created: "2017-11-18T11:43:20.075Z" },
  { id: 17, name: "Earth (5-126)", type: "Planet", dimension: "Dimension 5-126", residents: [], url: "https://rickandmortyapi.com/api/location/17", created: "2017-11-18T11:41:08.486Z" },
  { id: 18, name: "Mr. Goldenfold's dream", type: "Dream", dimension: "Dimension C-137", residents: [], url: "https://rickandmortyapi.com/api/location/18", created: "2017-11-18T11:46:22.933Z" },
  { id: 19, name: "Gromflom Prime", type: "Planet", dimension: "Replacement Dimension", residents: [], url: "https://rickandmortyapi.com/api/location/19", created: "2017-11-18T11:39:52.165Z" },
  { id: 20, name: "Earth (Replacement Dimension)", type: "Planet", dimension: "Replacement Dimension", residents: [], url: "https://rickandmortyapi.com/api/location/20", created: "2017-11-18T19:33:01.173Z" },
];

const tabContentDictionary: Record<Tab, ReactNode> = {
  characters: characters.map((character) => (
    <Character key={character.id} character={character} />
  )),
  locations: locations.map((location) => (
    <Location key={location.id} location={location} />
  )),
};

export const useDashboardTabs = () => {
  const router = useRouter();
  const tabParam = router.query.tab as string;
  const activeTab: Tab = TABS.some((t) => t.key === tabParam)
    ? (tabParam as Tab)
    : DEFAULT_TAB;

  const switchTab = (tab: string) => {
    router.push({ query: { tab } }, undefined, { shallow: true });
  };

  return {
    tabs: TABS,
    activeTab,
    switchTab,
    tabContent: tabContentDictionary[activeTab],
  };
};
