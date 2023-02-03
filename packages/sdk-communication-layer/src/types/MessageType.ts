export enum MessageType {
  KEYS_EXCHANGED = 'keys_exchanged',
  KEY_EXCHANGE = 'key_exchange',
  KEY_HANDSHAKE_START = 'key_handshake_start',
  KEY_HANDSHAKE_SYN = 'key_handshake_SYN',
  KEY_HANDSHAKE_SYNACK = 'key_handshake_SYNACK',
  KEY_HANDSHAKE_ACK = 'key_handshake_ACK',
  KEY_HANDSHAKE_NONE = 'none',
  READY = 'ready',
  PAUSE = 'pause',
  JOIN_CHANNEL = 'join_channel',
  ORIGINATOR_INFO = 'originator_info',
  WALLET_INFO = 'wallet_info',
  CHANNEL_CREATED = 'channel_created',
  CLIENTS_DISCONNECTED = 'clients_disconnected',
  CLIENTS_WAITING = 'clients_waiting',
  CLIENTS_READY = 'clients_ready',
  // TERMINATE: used to inform the other side that connection is terminating and channel id needs to be changed.
  TERMINATE = 'terminate',
  CONNECTION_STATUS = 'connection_status',
  MESSAGE = 'message',
  ANSWER = 'answer',
  OFFER = 'offer',
  CANDIDATE = 'candidate',
  JSONRPC = 'jsonrpc',
}