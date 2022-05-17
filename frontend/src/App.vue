<template>
  <n-message-provider>
    <header-component class="head"></header-component>
    <router-view/>
    <footer-component></footer-component>
  </n-message-provider>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'
import { NMessageProvider } from 'naive-ui'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
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
    padding: 10px;
    margin: 0
  }

</style>
