<template>
  <h1> Movies most similar to {{this.searchQuery}} </h1>
  <template v-for="movie in movies" :key="movie">
    <div class="MovieResult">
      <MovieCard :name="movie"/>
    </div>
  </template>
  <h2> Search for more movie recommendations! </h2>
  <SearchBar/>
</template>

<script>
import MovieCard from "../components/MovieCards.vue"
import SearchBar from "../components/Search.vue"
//import axios from "axios"

export default {
  name: 'ResultsPage',

  components: {
    MovieCard,
    SearchBar
  },

  props: {
    searchQuery: String,
  },


  data() {
    return{
      movies: ["The Batman (2022)", "Dien Binh Phu (1992)", "Blade Runner 2049 (2018)", "Dune (2021)", "Sicario (2015)"],
      moviesData: []
    }
  },

  methods:{
    removeMovie(){
      console.log("removing")
      //this.movies = this.movies.filter(item => item !== "Dien Binh Phu (1992)")
    }
  },
}
</script>

<style scoped>
  .MovieResult{
    padding: 10px;
  }
</style>