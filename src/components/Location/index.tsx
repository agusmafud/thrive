"use client";

import { TLocation } from "@/types";

import EntityCard from "../EntityCard";
import DataText from "../DataText";

const Location = ({ location }: { location: TLocation }) => (
  <EntityCard
    title={location.name}
  >
    <DataText
      title="Type"
      data={location.type}
    />
  </EntityCard>
);

export default Location;
