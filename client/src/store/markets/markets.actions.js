export const actions = {
  fetchMarketList({commit}, io) {
    io.emit('fetch markets');
    io.on('market list updated', response => {
      commit('updateMarketList', response.data);
    });
  }
}