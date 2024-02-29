import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { FeedsHandler, FeedSubscribe } from "../handlers/FeedsHandler";

type Props = {
  children: React.ReactNode;
  socket: WebSocket;
};

const defaultFeedSubscribe = () => {
  console.warn("FeedSubscribe used outside of its Provider");
  return () => {
    console.warn("Unsubscribe called outside of FeedSubscribe Provider");
  };
};

const FeedSubscribeContext = createContext<FeedSubscribe>(defaultFeedSubscribe);

function FeedSubscribeProvider({ children, socket }: Props) {
  const [feedsHandler, setFeedsHandler] = useState<FeedsHandler | null>(null);

  useEffect(() => {
    setFeedsHandler(new FeedsHandler(socket));
    return () => feedsHandler?.cleanup();
  }, [socket]);

  if (!feedsHandler) {
    return null;
  }

  return <FeedSubscribeContext.Provider value={feedsHandler.subscribe}>{children}</FeedSubscribeContext.Provider>;
}

function useFeedSubscribe() {
  return useContext(FeedSubscribeContext);
}

export { FeedSubscribeProvider, useFeedSubscribe };
