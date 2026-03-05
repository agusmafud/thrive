import Head from "next/head";

import TabList from "@/components/Tabs";
import List from "@/components/List";
import { useDashboardTabs } from "@/hooks/useDashboardTabs";

export default function Home() {
  const { tabs, activeTab, switchTab, tabContent } = useDashboardTabs();

  return (
    <>
      <Head>
        <title>Thrive Front End Challenge</title>
        <meta name="description" content="Practical Exercise – Dashboard Tabs with React Query" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TabList
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={switchTab}
        />
        <section>
          <List>{tabContent}</List>
        </section>
      </main>
    </>
  );
}
