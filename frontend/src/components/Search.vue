<template>
  <div class="container">
    <div class="child">
      <n-input v-model:value="name" class="input" type="text" placeholder="e.g. Sicario"/>
    </div>
    <div>
      <n-button type="primary" @click="handleClick"> Search! </n-button>
    </div>
  </div>
</template>

<script>
import { NInput, NButton, useMessage } from 'naive-ui'
import router from '../router'
//import axios from 'axios'

export default {
  name: 'SearchBar',

  components: {
    NInput,
    NButton,
  },

  data() {
    return {
      name: null
    }
  },

  created(){
    this.message = useMessage()
  },

  methods: {
    async handleClick(){
      if (this.name === null || this.name.length == 0){
        console.log(
          "Error. Please enter a movie name."
        )
        this.message.error("Please enter a movie name")
      }
      else{
        console.log(`Button clicked. Sending ${this.name}`)
        //let res = await axios.post(`${process.env.VUE_APP_BACKEND_URL}/recommendation`, {name: this.name})
        //let moviesRec = res.data
        router.push({
          name: 'Result',
          params: {
            searchQuery: this.name,
            //moviesRec: res.data
          }
        })
      }
    }
  }

}
</script>

<style scoped>
  .input {
    display: flex;
    flex-direction: column;
  }

  .child {
    margin-right: 5px
  }
</style>