export const mutations = {
  setMarketList(state, marketList = []) {
    state.marketList = [...state.marketList, ...marketList];
  },
  setSelectedMarket(state, market) {
    state.selectedMarket = market;
  }
}