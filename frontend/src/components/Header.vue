<template>
  <div class="container">
    <div class="child" id="one">One</div>
    <div class="child" id="two">Two</div>
    <div class="child" id="three">Three</div>
    <div class="child" id="four">
      <n-button type="primary"> About us</n-button>
    </div>
  </div>
</template>

<script>
import { NButton } from 'naive-ui'

export default {
  name: "HeaderComponent",
  components: {
    NButton,
  }

}
</script>

<style scoped>
  .container {
    width: 100%;
    border: 2px solid blue; 
    vertical-align: text-bottom;
    overflow: hidden
  }

  .child {
    height: 100%;
    display: inline-block;
    background-color: brown;
    margin-left: 1vw;
  }

  #four {
    float: right;
    margin-right: 1vw;
  }
  
</style>