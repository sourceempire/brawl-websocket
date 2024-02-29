type EventListener<T = any> = (data: T) => void;
type EventUnsubscribe = () => void;
export type EventSubscribe = <T>(event: string, callback: EventListener<T>) => EventUnsubscribe;
export declare class EventsHandler {
    private socket;
    private listeners;
    constructor(socket: WebSocket);
    private dispatchEvent;
    private setupListener;
    private handleMessage;
    private unsubscribe;
    subscribe: EventSubscribe;
    cleanup(): void;
}
export {};
