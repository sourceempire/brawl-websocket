type FeedData<T = {
    [key: string]: unknown;
}> = T;
type FeedListener<T> = (data: FeedData<T>) => void;
type FeedListeners<T = any> = {
    [feedType: string]: Set<FeedListener<T>>;
};
type CachedState<T = any> = {
    [feedType: string]: FeedData<T>;
};
type FeedUnsubscribe = () => void;
export type FeedSubscribe = <T>(feed: string, callback: FeedListener<T>) => FeedUnsubscribe;
export declare class FeedsHandler {
    socket: WebSocket;
    listeners: FeedListeners;
    cachedStates: CachedState;
    constructor(socket: WebSocket);
    private dispatchFeed;
    private handleMessage;
    private setupListener;
    private serveCache;
    private unsubscribe;
    subscribe: FeedSubscribe;
    cleanup: () => void;
}
export {};
