export const mutations = {
  updateMarketList(state, marketList = []) {
    state.marketList = [...state.marketList, ...marketList];
  },
  setSelectedMarket(state, market) {
    state.selectedMarket = market;
  }
}