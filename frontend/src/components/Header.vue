<template>
  <div class="container">
    <div class="child" id="one">
      <n-button @click="handleHome"> Home</n-button>
    </div>
    <div class="child" id="two">
      <n-button @click="handleGit"> Github</n-button>
    </div>
    <div class="child" id="four">
      <n-button type="primary" @click="handleAbout"> About us</n-button>
    </div>
  </div>
</template>

<script>
import { NButton } from 'naive-ui'
import router from '../router'

export default {
  name: "HeaderComponent",

  components: {
    NButton,
  },

  methods: {
    handleHome(){
      router.push({
        name: 'Home',
      })
    },

    handleGit(){
      window.open("https://github.com/Alexlly/MovieRecommendation")
    },

    handleAbout(){
      console.log("Opens to about us")
    }
  }

}
</script>

<style scoped>
  .container {
    width: 100%;
    vertical-align: text-bottom;
    overflow: hidden
  }

  .child {
    height: 100%;
    display: inline-block;
    margin-left: 1vw;
  }

  #four {
    float: right;
    margin-right: 1vw;
  }
  
</style>