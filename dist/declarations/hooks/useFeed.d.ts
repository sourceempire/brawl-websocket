type FeedState<T = unknown> = {
    loading: boolean;
    data: T;
};
export declare function useFeed<T>(feed: string): FeedState<T>;
export {};
