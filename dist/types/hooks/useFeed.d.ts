type Options = {
    queryParams: Record<string, string>;
};
type FeedState<T = unknown> = {
    loading: true;
    data?: undefined;
} | {
    loading: false;
    data: T;
};
export declare function useFeed<T>(feed: string, options?: Options): FeedState<T>;
export {};
