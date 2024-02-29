import React, { createContext, useContext, useRef } from 'react';
import { EventsHandler, EventSubscribe } from '../handlers/EventsHandler';

type Props = {
  children: React.ReactNode;
  socket: WebSocket;
};

const EventSubscribeContext = createContext<EventSubscribe>({} as EventSubscribe);

function EventSubscribeProvider({ children, socket }: Props) {
  const eventsHandler = useRef<EventsHandler>(new EventsHandler(socket));

  return (
    <EventSubscribeContext.Provider value={eventsHandler.current.subscribe}>{children}</EventSubscribeContext.Provider>
  );
}

function useEventSubscribe() {
  return useContext(EventSubscribeContext);
}

export { EventSubscribeProvider, useEventSubscribe };
