<template>
  <div id="app">
    <h2 v-if="error"> {{ error }}</h2>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data() {
    return {
      // IO: io('http://localhost:3000')
      error: ''
    }
  },

  computed: {
    
  },

  mounted() {
    this.requestMarketListUpdate();
    this.$store.dispatch('fetchCombinedOrderBook', this.$IO);
    this.$IO.on('error', error => this.error = error.message);
  },

  methods: {
    requestMarketListUpdate() {
      this.$store.dispatch('fetchMarketList', this.$IO);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
