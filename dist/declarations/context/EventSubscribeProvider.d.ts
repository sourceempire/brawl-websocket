import React from 'react';
import { EventSubscribe } from '../handlers/EventsHandler';
type Props = {
    children: React.ReactNode;
    socket: WebSocket;
};
declare function EventSubscribeProvider({ children, socket }: Props): JSX.Element;
declare function useEventSubscribe(): EventSubscribe;
export { EventSubscribeProvider, useEventSubscribe };
