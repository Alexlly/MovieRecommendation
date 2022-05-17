<template>
  <n-message-provider>
    <header-component class="head"></header-component>
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
  // <HeaderComponent/>
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body{
    padding: 0;
    margin: 0
  }

</style>
