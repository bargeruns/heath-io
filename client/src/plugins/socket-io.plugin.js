import * as IO from 'socket.io-client';

export const SocketIOPlugin = {
  install(Vue) {
    Vue.prototype.$IO = IO('http://localhost:3000');
  }
}