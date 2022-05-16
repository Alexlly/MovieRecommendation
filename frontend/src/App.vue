<template>
  <n-message-provider>
    <HeaderComponent/>
    <router-view/>
  </n-message-provider>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import { NMessageProvider } from 'naive-ui'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NMessageProvider
  }
  // text-align: center;
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

</style>
