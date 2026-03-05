import { type ReactNode } from "react";
import { useRouter } from "next/router";

import Character from "@/components/Character";
import Location from "@/components/Location";
import { useCharacters } from "./useCharacters";
import { useLocations } from "./useLocations";
import List from "@/components/List";

type Tab = "characters" | "locations";

const TABS: { key: Tab; label: string }[] = [
  { key: "characters", label: "Characters" },
  { key: "locations", label: "Locations" },
];

const DEFAULT_TAB: Tab = "characters";

export const useDashboardTabs = () => {
  const router = useRouter();
  const tabParam = router.query.tab as string;
  const activeTab: Tab = TABS.some((t) => t.key === tabParam)
    ? (tabParam as Tab)
    : DEFAULT_TAB;

  const { characters, isLoading: isLoadingCharacters } = useCharacters({ enabled: activeTab === "characters" });
  const { locations, isLoading: isLoadingLocations } = useLocations({ enabled: activeTab === "locations" });


  const switchTab = (tab: string) => {
    router.push({ query: { tab } }, undefined, { shallow: true });
  };

  const isLoading = isLoadingCharacters || isLoadingLocations;

  const tabContentDictionary: Record<Tab, ReactNode> = {
    characters: characters.map((character) => (
      <Character key={character.id} character={character} />
    )),
    locations: locations.map((location) => (
      <Location key={location.id} location={location} />
    )),
  };

  return {
    tabs: TABS,
    activeTab,
    switchTab,
    isLoading,
    tabContent: <List>{tabContentDictionary[activeTab]}</List>,
  };
};
