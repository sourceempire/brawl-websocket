import { useEffect, useState } from 'react';
import { useFeedSubscribe } from '../context/FeedSubscrbeProvider';

type FeedState<T = unknown> = {
  loading: boolean;
  data: T;
};

export function useFeed<T>(feed: string) {
  const subscribe = useFeedSubscribe();
  const [state, setState] = useState<FeedState<T>>({ loading: true, data: {} as T });

  useEffect(() => {
    const unsubscribe = subscribe<T>(feed, (updatedData) => {
      setState({ data: updatedData, loading: false });
    });
    return unsubscribe;
  }, [feed, subscribe]);

  return state;
}
