<template>
  <h3 @click="handleClick">{{name}}</h3>
  <n-card size="small" content-style="padding: 0;" footer-style="padding: 100;" :bordered="false">
    <template #cover>
      <img :src=this.poster @click="handleClick">
    </template>
    <div class="contentStuff">
    </div>
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
      title: null,
      poster: null,
      year: null,
      imdbID: null,
      key: this.name
    }
  },

  methods: {
    getMovie(){

    },

    findFromQuery(movieSearch){
      for (let i = 0; i < movieSearch.Search.length; i++){
        if (movieSearch.Search[i].Year == this.year){
          return i;
        }
      }

      return 0;
    },

    populateInfo(movieSearch){
      let info = this.findFromQuery(movieSearch);
      this.poster = movieSearch.Search[info].Poster
      this.imdbID = movieSearch.Search[info].imdbID
    },

    deleteSelf(){
      console.log("lmao destroyed")
      //this.$destroy()
      //this.$el.parentNode.removeChild(this.$el)
      // Maybe try to delete from array in results page
    },

    handleClick(){
      window.open(`https://www.imdb.com/title/${this.imdbID}/`)
    }
  },

  props: {
    name: String,
  },

  async created(){
    let arr = this.name.split("(")
    this.title = arr[0].trim()
    arr[arr.length - 1] = arr[arr.length - 1].slice(0, -1) // (Removed last bracket)
    this.year = arr[1].trim()
    
    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {s: this.title, r: 'json', page: '1'},
      headers: {
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.VUE_APP_MOVIE_KEY}`
      }
    };
    
    /*axios.interceptors.request.use(request => {
      console.log('Starting Request', JSON.stringify(request, null, 2))
      return request
    })*/ //Testing get request from axios

    let res = await axios.request(options)
      .catch(function (error) {
        console.error(error);
      }
    );

    if (res.data.Response == "True"){
      this.populateInfo(res.data)
    } 
    else{
      this.deleteSelf()
    }
  },

}
</script>

<style scoped>
  .n-card {
    max-width: 15vw;
    max-height: 1fr;
    height: 100%;
    cursor: pointer
  }

  .contentStuff{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3{
    cursor: pointer;
  }
</style>