<template>
  <n-card :title=name>
    <template #cover>
      <img :src=this.poster>
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
      test: "test",
      poster: null,
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
    },

    populateInfo(movieSearch){
      this.poster = movieSearch.Search[0].Poster
    },

    deleteSelf(){
      console.log("lmao")
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    }
  },

  props: {
    name: String,
  },

  async created(){
    let arr = this.name.split("(")
    arr[0] = arr[0].trim()
    arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1) // (Removed last bracket)
    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {s: arr[0], r: 'json', page: '1'},
      headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.VUE_APP_MOVIE_KEY}`
      }
    };
    
    /*axios.interceptors.request.use(request => {
      console.log('Starting Request', JSON.stringify(request, null, 2))
      return request
    })*/ //Testing get request from axios

    let res = await axios.request(options).catch(function (error) {
      console.error(error);
    });
    if (res.data.Response == "True"){
      this.populateInfo(res.data)
    } 
    else{
      this.deleteSelf()
    }
    // Add condition where movie is not found 
  },

}
</script>

<style scoped>
  .n-card {
    max-width: 15vw;
  }
</style>