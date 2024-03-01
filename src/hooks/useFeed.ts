import { useEffect, useMemo, useState } from "react";
import { useFeedSubscribe } from "../context/FeedSubscrbeProvider";

type Options = {
  queryParams: Record<string, string | number | boolean | null>;
};

type FeedState<T = unknown> =
  | {
      loading: true;
      data?: undefined;
    }
  | { loading: false; data: T };

export function useFeed<T>(feed: string, options?: Options) {
  const subscribe = useFeedSubscribe();
  const [state, setState] = useState<FeedState<T>>({ loading: true });

  const serializedQueryParams = useMemo(() => {
    if (!options?.queryParams) return '';

    const queryParamsString = Object.keys(options.queryParams).map((key) => {
      return `${key}=${options.queryParams[key]}`
    }).join('&')

    return `?${queryParamsString}`;
  }, [options?.queryParams]);

  useEffect(() => {
    const unsubscribe = subscribe<T>(`${feed}${serializedQueryParams}`, (updatedData) => {
      setState({ data: updatedData, loading: false });
    });
    return unsubscribe;
  }, [feed, subscribe, serializedQueryParams]);


  useEffect(() => {
    if (!state.loading && !state.data) {
      console.error(
        `Data should never be falsy when loading is false. This is most likely due to a backend error, take a look at the following feed: ${feed}`
      );
    }
  }, [state]);

  return state;
}
