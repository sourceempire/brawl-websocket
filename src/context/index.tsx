import React, { useEffect, useState } from 'react';
import SocketHandler from '../handlers/SocketHandler';
import { EventSubscribeProvider } from './EventSubscribeProvider';
import { FeedSubscribeProvider } from './FeedSubscrbeProvider';

type Props = {
  serverUrl: string;
  children: React.ReactNode;
};

function ServerSubscriptionProvider({ serverUrl, children }: Props) {
  const [socket, setSocket] = useState<WebSocket>();

  useEffect(() => {
    const socketHandler = new SocketHandler(serverUrl, (ws) => {
      setSocket(ws);
    });

    return socketHandler.closeConnection;
  }, [serverUrl]);

  // TODO -> Take in full app load skeletion as prop to use it multiple applications
  if (!socket) return <div>Setting up connection...</div>;

  return (
    <FeedSubscribeProvider socket={socket}>
      <EventSubscribeProvider socket={socket}>{children}</EventSubscribeProvider>
    </FeedSubscribeProvider>
  );
}

export default ServerSubscriptionProvider;
