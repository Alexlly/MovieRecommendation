<template>
  <n-card title="Card with Cover">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
    </template>
    Card Content
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
  }
}
</script>

<style scoped>
  .n-card {
    max-width: 15vw;
  }
</style>