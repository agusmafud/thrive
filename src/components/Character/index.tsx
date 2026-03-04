"use client";

import { TCharacter } from "@/types";
import { Status, StatusDot } from "./styles";

import EntityCard from "../EntityCard";

const Character = ({ character }: { character: TCharacter }) => (
  <EntityCard
    title={character.name}
    image={character.image}
  >
    <Status> 
      <StatusDot $status={character.status} />
      {character.status} - {character.species}
    </Status>
  </EntityCard>
);

export default Character;
