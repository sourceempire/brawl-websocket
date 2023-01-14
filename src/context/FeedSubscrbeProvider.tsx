import React, { createContext, useContext, useRef } from 'react';
import FeedsHandler, { FeedSubscribe } from '../handlers/FeedsHandler';

type Props = {
  children: React.ReactNode;
  socket: WebSocket;
};

const FeedSubscribeContext = createContext<FeedSubscribe>({} as FeedSubscribe);

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
