type Options = {
    queryParams: Record<string, string | number | boolean | null>;
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
