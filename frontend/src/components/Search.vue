<template>
  <div class="container">
    <n-space vertical>
      <n-input v-model:value="name" class="input" type="text" placeholder="e.g. Sicario" @update:value="handleFieldEntry"/>
      <n-button type="primary" @click="handleClick"> Search! </n-button>
    </n-space>
  </div>
</template>

<script>
import { NInput, NButton, NSpace, useMessage } from 'naive-ui'

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
    handleFieldEntry(){
      console.log(this.name)
    },

    handleClick(){
      if (this.name === null){
        console.log(
          "Error. Please enter a movie name."
        )
        this.message.error("Please enter a movie name")
      }
      console.log(`Button clicked. Sending ${this.name}`)
    }
  }

}
</script>

<style scoped>
  .input {
    max-width: 75%;
  }
</style>