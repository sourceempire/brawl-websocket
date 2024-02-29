import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { EventsHandler, EventSubscribe } from "../handlers/EventsHandler";

type Props = {
  children: React.ReactNode;
  socket: WebSocket;
};

const defaultEventSubscribe = () => {
  console.warn("EventSubscribe used outside of its Provider");
  return () => {
    console.warn("Unsubscribe called outside of EventSubscribe Provider");
  };
};

const EventSubscribeContext = createContext<EventSubscribe>(defaultEventSubscribe);

function EventSubscribeProvider({ children, socket }: Props) {
  const [eventsHandler, setEventsHandler] = useState<EventsHandler | null>(null);

  useEffect(() => {
    setEventsHandler(new EventsHandler(socket));
    return () => eventsHandler?.cleanup();
  }, [socket]);

  if (!eventsHandler) {
    return null;
  }

  return <EventSubscribeContext.Provider value={eventsHandler.subscribe}>{children}</EventSubscribeContext.Provider>;
}

function useEventSubscribe() {
  return useContext(EventSubscribeContext);
}

export { EventSubscribeProvider, useEventSubscribe };
