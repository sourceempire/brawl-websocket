type FeedState<T = unknown> = {
    loading: true;
} | {
    loading: false;
    data: T;
};
export declare function useFeed<T>(feed: string): FeedState<T>;
export {};
