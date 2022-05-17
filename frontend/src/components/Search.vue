<template>
  <div class="container">
    <n-space vertical>
      <n-input v-model:value="name" class="input" type="text" placeholder="e.g. Sicario"/>
      <n-button type="primary" @click="handleClick"> Search! </n-button>
    </n-space>
  </div>
</template>

<script>
import { NInput, NButton, NSpace, useMessage } from 'naive-ui'
import router from '../router'

export default {
  name: 'SearchBar',

  components: {
    NInput,
    NButton,
    NSpace
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
    handleClick(){
      if (this.name === null || this.name.length == 0){
        console.log(
          "Error. Please enter a movie name."
        )
        this.message.error("Please enter a movie name")
      }
      console.log(`Button clicked. Sending ${this.name}`)
      router.push({
        name: 'Result',
        params: {
          searchQuery: this.name
        }
      })
    }
  }

}
</script>

<style scoped>
  .input {
    max-width: 50%;
  }
</style>