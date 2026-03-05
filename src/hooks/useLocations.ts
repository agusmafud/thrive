import { queryOptions, useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { ApiResponse, TLocation } from "@/types";

const getLocations = ({ enabled }: { enabled: boolean }) =>
  queryOptions({
    queryKey: ["locations"],
    queryFn: () => api.get<never, ApiResponse<TLocation>>("/location"),
    enabled,
  });

export const useLocations = ({ enabled = true}) => {
  const { data, isLoading, error } = useQuery(getLocations({ enabled }));
  return { locations: data?.results ?? [], isLoading, error };
};
