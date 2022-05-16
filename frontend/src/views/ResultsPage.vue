<template>
  <h1> This is where the results go </h1>
  <template v-for="movie in movies" :key="movie">
    <MovieCard :name="movie"/>
    <h2>{{movie}}</h2>
  </template>
  <h2> Search for more movie recommendations! </h2>
  <SearchBar/>
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

  data() {
    return{
      movies: ["The Batman (2022)", "Dien Binh Phu (1992)", "Blade Runner 2049 (2018)", "Dune (2021)", "Sicario (2015)"]
    }
  },

  created(){
    console.log(typeof(this.movies[0]))
  }
}
</script>

<style>

</style>