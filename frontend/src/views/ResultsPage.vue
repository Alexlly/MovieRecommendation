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
//import axios from "axios"

export default {
  name: 'ResultsPage',

  components: {
    MovieCard,
    SearchBar
  },

  props: {
    searchQuery: String,
    //moviesRec: Array
  },


  data() {
    return{
      //movies: ["The Batman (2022)", "Dien Binh Phu (1992)", "Blade Runner 2049 (2017)", "Dune (2021)", "Sicario (2015)"],
      movies: ["The Batman (2022)", "Fight Club (1999)", "Blade Runner 2049 (2017)", "Dune (2021)", "Sicario (2015)", "Interstellar (2014)", "Starship Troopers (1997)"],
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

/*.parent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }*/
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

  .QueryResult{

  }

</style>