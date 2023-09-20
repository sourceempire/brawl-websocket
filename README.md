# brawl-web-socket

## Installation

```bash
npm install git+git@github.com:sourceempire/brawl-websocket.git#v1.0.3
```

Note that it might be a good idea to download the latest version

</br >

The `ServerSubscriptionProvider` component is a provider component that sets up a WebSocket connection to the server when it mounts, and provides two other provider components - EventSubscribeProvider and FeedSubscribeProvider - as children. These two provider components provide the subscribe function from their respective handler classes (`EventSubscribe` and `FeedSubscribe`) to the context, which can be consumed using the `useEventSubscribe` and `useFeedSubscribe` hooks respectively.

The SocketHandler class is responsible for setting up the WebSocket connection, and the EventsHandler and FeedsHandler classes provide functions for subscribing to events and feeds respectively.

Both `EventsHandler` and `FeedsHandler` are classes that provide a way to register event listeners and invoke them when certain events occur. They both have a `subscribe` method that allows you to register event listeners and an `unsubscribe` method that is returned by the `subscribe` functoon that allows you to remove event listeners.

</br>

## useFeed

The `useFeed` hook is a custom hook that allows a React component to subscribe to a feed and get updates to the feed data. It takes in the name of the feed as an argument, and returns an object with the current feed state, including a `loading` boolean and a `data` property of a generic type that represents the type of the feed data. The hook uses the `useFeedSubscribe` hook to get the subscribe function from the `FeedSubscribeProvider` context

Here is an example of how you might use the useFeed hook in a React component:

```typescript
import { useFeed } from './useFeed';

function MyComponent() {
  const { loading, data } = useFeed<MyDataType>('my-feed');

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data.someProperty}</div>;
}
```

</br>

## useEvent

The `useEvent` hook is a custom hook that allows a React component to subscribe to a server event and get updates when the event is triggered. It takes in the name of the event as a string, and a callback function that will be called with the event data when the event is triggered.

The hook uses the `useEventSubscribe` hook to get the `subscribe` function from the `EventSubscribeProvider` context.

Here is an example of how you might use the `useEvent` hook in a React component:

```typescript
import { useEvent } from './useEvent';

function MyComponent() {
  useEvent<MyDataType>('my-event', (data: MyDataType) => {
    // do something with the data here
  });
}
```

## Note

It can be a good idea to use the `useFeed` hook to create custom hooks like `useUserFeed` because it allows you to easily incorporate real-time updates of data into your React components.

For example, if you have a component that needs to display information about a user (e.g. their name, email, etc.), you can create a `useUserFeed` hook that subscribes to a feed containing the user's information. The hook could take in the user's ID as an argument, and return an object with the current user information and a `loading` boolean.

Here is an example of how the `useUserFeed` hook could look, using the `useFeed` hook as a base:

```typescript
import { useFeed } from './useFeed';

export function useUserInfoFeed(userId: string) {
  const { loading, data } = useFeed<UserInfo>(`user/${userId}`);

  return { loading, data };
}
```

Here is an example of how you might use the `useUserFeed` hook in a component:

```typescript
import { useUserFeed } from './useUserFeed';

function UserInfoComponent({ userId }: { userId: string }) {
  const { loading, data } = useUserInfoFeed(userId);

  if (loading) {
    return <div>Loading user information...</div>;
  }

  return (
    <div>
      <div>Name: {data.name}</div>
      <div>Email: {data.email}</div>
    </div>
  );
}
```
