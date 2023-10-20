declare class SocketHandler {
    private socket;
    constructor(serverUrl: string, onConnect: (ws: WebSocket) => void);
    private createSocket;
    private handleError;
    private handleClose;
    private handleOpen;
    closeConnection: () => void;
}
export default SocketHandler;
