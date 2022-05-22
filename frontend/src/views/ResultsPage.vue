<template>
  <div class="parent">
    <div class="QueryResult">
      <h1> Movies most similar to {{this.searchQuery}} </h1>
    </div>
    <div class="container">
      <template v-for="movie in movies" :key="movie">
        <div class="MovieResult">
          <MovieCard :name="movie"/>
        </div>
      </template>
    </div>
    <div class="bottom">
      <h2> Search for more movie recommendations! </h2>
      <SearchBar/>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCards.vue"
import SearchBar from "../components/Search.vue"

export default {
  name: 'ResultsPage',

  components: {
    MovieCard,
    SearchBar
  },

  props: {
    searchQuery: String,
    movies: Array
  },
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .MovieResult{
    padding: 2vw;
  }

  .bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5vh;
  }

  .parent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

</style>