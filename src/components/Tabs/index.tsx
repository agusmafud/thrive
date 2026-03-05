"use client";

import { Wrapper, TabButton } from "./styles";

type Tab = { key: string; label: string };

type TabListProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
};

const TabList = ({ tabs, activeTab, onTabChange }: TabListProps) => (
  <Wrapper>
    {tabs.map(({ key, label }) => (
      <TabButton
        key={key}
        $active={activeTab === key}
        onClick={() => onTabChange(key)}
      >
        {label}
      </TabButton>
    ))}
  </Wrapper>
);

export default TabList;
