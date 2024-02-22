import React, { createContext, useContext, useRef } from 'react';
import FeedsHandler, { FeedSubscribe } from '../handlers/FeedsHandler';

type Props = {
  children: React.ReactNode;
  socket: WebSocket;
};

const defaultFeedSubscribe = () => {
  console.warn('FeedSubscribe used outside of its Provider');
  return () => {
    console.warn('Unsubscribe called outside of FeedSubscribe Provider');
  };
}

const FeedSubscribeContext = createContext<FeedSubscribe>(defaultFeedSubscribe);

function FeedSubscribeProvider({ children, socket }: Props) {
  const feedsHandler = useRef<FeedsHandler>(new FeedsHandler(socket));

  return (
    <FeedSubscribeContext.Provider value={feedsHandler.current.subscribe}>{children}</FeedSubscribeContext.Provider>
  );
}

function useFeedSubscribe() {
  return useContext(FeedSubscribeContext);
}

export { FeedSubscribeProvider, useFeedSubscribe };
