type FeedData<T = { [key: string]: unknown }> = T;
type FeedListener<T> = (data: FeedData<T>) => void;

type FeedListeners<T = any> = { [feedType: string]: Set<FeedListener<T>> };
type CachedState<T = any> = { [feedType: string]: FeedData<T> };

type FeedUnsubscribe = () => void;
export type FeedSubscribe = <T>(feed: string, callback: FeedListener<T>) => FeedUnsubscribe;

export class FeedsHandler {
  socket: WebSocket;
  listeners: FeedListeners = {};
  cachedStates: CachedState = {};

  constructor(socket: WebSocket) {
    this.socket = socket;
    this.socket.addEventListener("message", (event: MessageEvent) => {
      this.handleMessage(event);
    });
  }

  private dispatchFeed = (feed: string, state: { [key: string]: unknown }) => {
    if (this.listeners[feed] === undefined) {
      console.warn("Feed update was recieved but no feed listener was set up", { feed, state });
      return;
    }

    this.cachedStates[feed] = state;
    this.listeners[feed].forEach((listener) => listener(state));
  };

  private handleMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    if (!data.feed) return;
    this.dispatchFeed(data.feed, data.state);
  };

  private setupListener = <T>(feed: string, callback: FeedListener<T>) => {
    if (!this.listeners[feed]) {
      this.listeners[feed] = new Set();
      this.socket.send(JSON.stringify({ event: "feed-subscribe", message: { feed } }));
    }
    this.listeners[feed].add(callback);
  };

  private serveCache = <T>(feed: string, callback: FeedListener<T>) => {
    const cachedState = this.cachedStates[feed];
    if (cachedState !== undefined) callback(cachedState);
  };

  private unsubscribe = <T>(feed: string, callback: FeedListener<T>): FeedUnsubscribe => {
    return () => {
      this.listeners[feed].delete(callback);

      if (this.listeners[feed].size === 0) {
        delete this.listeners[feed];
        this.socket.send(JSON.stringify({ event: "feed-unsubscribe", message: { feed } }));
      }
    };
  };

  public subscribe: FeedSubscribe = <T>(feed: string, callback: FeedListener<T>) => {
    this.setupListener(feed, callback);
    this.serveCache(feed, callback);

    return this.unsubscribe(feed, callback);
  };
  
  public cleanup = () => {
    this.socket.removeEventListener("message", this.handleMessage);

    this.listeners = {};
    this.cachedStates = {};
  };
}
