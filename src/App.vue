<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Hello Vue!</h1>
  <MainWrapper/>
</template>

<script>
import MainWrapper from './components/main-wrapper.vue'

export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0 auto;
  /*border: 5px solid yellow;*/
}
</style>
