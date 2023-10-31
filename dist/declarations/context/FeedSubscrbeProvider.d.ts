import React from 'react';
import { FeedSubscribe } from '../handlers/FeedsHandler';
type Props = {
    children: React.ReactNode;
    socket: WebSocket;
};
declare function FeedSubscribeProvider({ children, socket }: Props): JSX.Element;
declare function useFeedSubscribe(): FeedSubscribe;
export { FeedSubscribeProvider, useFeedSubscribe };
