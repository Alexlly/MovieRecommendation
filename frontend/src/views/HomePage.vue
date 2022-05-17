<template>
  <div class="container">
    <div>
      <h1> Movie Recommendation System </h1>
      <h3>A project by Group what </h3>
      <SearchBar class="test"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '../components/Search.vue'

export default {
  name: 'HomePage',
  components: {
    SearchBar
  }
}
</script>

<style scoped>
  .container {
    text-align: center;
    background-color: orange;
    display: flex;
    justify-content: center;
    height: 100%
  }

</style>