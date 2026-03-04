export type TCharacterLocation = {
  name: string;
  url: string;
};

export type TCharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: TCharacterLocation;
  location: TCharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TLocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};
