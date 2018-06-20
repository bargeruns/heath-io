export const mutations =  {
  setCombinedOrderBook(state, orderBook = {}) {
    state.combinedOrderBook = Object.assign({}, state.combinedOrderBook, orderBook);
  }
}