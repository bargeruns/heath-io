export const actions = {
  fetchCombinedOrderBook({commit}, io) {
    io.emit('fetch order book', 'ETH');
    io.on('order book updated', response => {
      commit('setCombinedOrderBook', response.data);
    });
  }
}