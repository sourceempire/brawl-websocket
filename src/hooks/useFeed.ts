import { useEffect, useState } from "react";
import { useFeedSubscribe } from "../context/FeedSubscrbeProvider";

type FeedState<T = unknown> =
  | {
      loading: true; data?: undefined,
    }
  | { loading: false; data: T };

export function useFeed<T>(feed: string) {
  const subscribe = useFeedSubscribe();
  const [state, setState] = useState<FeedState<T>>({ loading: true });

  useEffect(() => {
    if (!state.loading && !state.data) {
      console.error(
        `Data should never be falsy when loading is false. This is most likely due to a backend error, take a look at the following feed: ${feed}`
      );
    }
  }, [state]);

  useEffect(() => {
    const unsubscribe = subscribe<T>(feed, (updatedData) => {
      setState({ data: updatedData, loading: false });
    });
    return unsubscribe;
  }, [feed, subscribe]);

  return state;
}
