<template>
  <n-card :title=name>
    <template #cover>
      <img src="https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_SX300.jpg">
    </template>
  </n-card>
</template>

<script>
import { NCard } from "naive-ui"
import axios from "axios"

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

  methods: {
    getMovie(){

    },

    findFromQuery(){
      let test = [
        { Title: "Sicario", Year: "2015", imdbID: "tt3397884", Poster: "https://m.media-amazon.com/images/M/MV5BMjA5NjM3NTk1M15BMl5BanBnXkFtZTgwMzg1MzU2NjE@._V1_SX300.jpg"},
        { Title: "Sicario: Day of the Soldado", Year: "2018", imdbID: "tt5052474", Poster: "https://m.media-amazon.com/images/M/MV5BMTEzNjM2NTYxMjReQTJeQWpwZ15BbWU4MDU2NzAxNTUz._V1_SX300.jpg"} ,
        { Title: "American Sicario", Year: "2021", imdbID: "tt13322120", Poster: "https://m.media-amazon.com/images/M/MV5BYzU2NDk0MTEtYjE3Yi00…ItYjg2NDkwOWZmY2I3XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg" },
      ] // Pretending to be data from the Movie Database Alternative API
      for (let i = 0; i < test.size; i++){
        console.log("testt")
      }
    }
  },

  props: {
    name: String,
  },

  created(){
    const key = process.env.MOVIE_KEY
    console.log(key)
    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {s: 'Sicario', r: 'json', page: '1'},
      headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.VUE_APP_MOVIE_KEY}`
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
}
</script>

<style scoped>
  .n-card {
    max-width: 15vw;
  }
</style>