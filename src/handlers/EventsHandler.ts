type EventListener<T = any> = (data: T) => void;
type EventListeners = { [event: string]: Set<EventListener> };

type EventUnsubscribe = () => void;
export type EventSubscribe = <T>(event: string, callback: EventListener<T>) => EventUnsubscribe;

export class EventsHandler {
  private socket: WebSocket;
  private listeners: EventListeners = {};

  constructor(socket: WebSocket) {
    this.socket = socket
    socket.addEventListener('message', this.handleMessage);

    this.handleMessage = this.handleMessage.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  private dispatchEvent = (event: string, data: unknown) => {
    if (this.listeners[event] !== undefined) {
      this.listeners[event].forEach((callback) => callback(data));
    } else {
      console.debug('Push event was recieved but not caught', { event, data });
    }
  };

  private setupListener = <T>(event: string, callback: EventListener<T>) => {
    if (!this.listeners[event]) {
      this.listeners[event] = new Set();
    }

    this.listeners[event].add(callback);
  };

  private handleMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    if (!data.event) return;
    
    this.dispatchEvent(data.event, data.message);
  };

  private unsubscribe = <T>(event: string, callback: EventListener<T>) => {
    return () => {
      this.listeners[event].delete(callback);

      if (this.listeners[event].size === 0) {
        delete this.listeners[event];
      }
    };
  };

  public subscribe: EventSubscribe = <T>(event: string, callback: EventListener<T>) => {
    this.setupListener(event, callback);
    return this.unsubscribe(event, callback);
  };

  public cleanup() {
    this.socket.removeEventListener('message', this.handleMessage);
    this.listeners = {}
  }
}
