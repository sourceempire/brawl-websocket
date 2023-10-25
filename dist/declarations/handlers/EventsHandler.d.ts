type EventListener<T = any> = (data: T) => void;
type EventListeners = {
    [event: string]: Set<EventListener>;
};
type EventUnsubscribe = () => void;
export type EventSubscribe = <T>(event: string, callback: EventListener<T>) => EventUnsubscribe;
declare class EventsHandler {
    listeners: EventListeners;
    constructor(socket: WebSocket);
    private dispatchEvent;
    private setupListener;
    private handleMessage;
    private unsubscribe;
    subscribe: EventSubscribe;
}
export default EventsHandler;
