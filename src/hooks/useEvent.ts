import { useEffect } from 'react';
import { useEventSubscribe } from '../context/EventSubscribeProvider';

export function useEvent<T>(event: string, callback: (data: T) => void) {
  const subscribe = useEventSubscribe();

  useEffect(() => {
    const unsubscribe = subscribe<T>(event, callback);
    return unsubscribe;
  }, [callback, event, subscribe]);
}
