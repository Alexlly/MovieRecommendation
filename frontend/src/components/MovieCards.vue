<template>
  <n-card :title=name>
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
    </template>
    {{this.name}}
  </n-card>
</template>

<script>
import { NCard } from "naive-ui"

export default {
  name: 'MovieCard',

  components: {
    NCard,
  },

  data() {
    return{
      test: "test"
    }
  },

  props: {
    name: String,
  }
}
</script>

<style scoped>
  .n-card {
    max-width: 15vw;
  }
</style>