<template>
  <div id="app">
    <bubble-chart></bubble-chart>
  </div>
</template>

<script>
import BubbleChart from './components/BubbleChart.vue'
export default {
  name: 'app',
  components: {
    BubbleChart
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


