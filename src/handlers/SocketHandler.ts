import brawlFetch from '@sourceempire/brawl-fetch';
import SockJS from 'sockjs-client';

export class SocketHandler {
  private socket: WebSocket | undefined;

  constructor(serverUrl: string, onConnect: (ws: WebSocket) => void) {
    this.createSocket(serverUrl, onConnect);
  }

  private createSocket = async (serverUrl: string, onConnect: (ws: WebSocket) => void) => {
    const eventsUrl = `${serverUrl}/api/events`;
    const result = await brawlFetch<{ token: string }>(`${eventsUrl}/request`);

    this.socket = new SockJS(eventsUrl);
    this.socket!.onerror = this.handleError;
    this.socket!.onclose = this.handleClose;
    this.socket!.onopen = () => this.handleOpen(result.token, onConnect);
  };

  private handleError = (message: Event) => {
    if (message.eventPhase === EventSource.CLOSED) {
      this.socket?.close();
    } else {
      console.error('Oops, Something went wrong with the co');
    }
  };

  private handleClose = (event: CloseEvent) => {
    if (event.code === 1000 || event.code === 3000) return;

    // TODO -> Concidder trying to reconnect
    console.log('Socket connection closed unexpectedly');
  };

  private handleOpen = (token: string, onConnect: (ws: WebSocket) => void) => {
    if (!this.socket) throw Error('Socket was not created');

    this.socket.send(token);
    onConnect(this.socket);
  };

  closeConnection = () => {
    this.socket?.close(1000, 'client');
  };
}
