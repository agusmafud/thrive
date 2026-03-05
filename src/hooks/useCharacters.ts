import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { ApiResponse, TCharacter } from "@/types";

const getCharacters = ({ enabled }: { enabled: boolean }) =>
  queryOptions({
    queryKey: ["characters"],
    queryFn: () => api.get<never, ApiResponse<TCharacter>>("/character"),
    enabled,
  });

export const useCharacters = ({ enabled = true }: { enabled: boolean }) => {
  const { data, isLoading, error } = useQuery(getCharacters({ enabled }));
  return { characters: data?.results ?? [], isLoading, error };
};
