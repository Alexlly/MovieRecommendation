<template>
  <n-card size="small">
    <template #cover>
      <img :src=this.poster>
    </template>
    <div class="contentStuff">
      {{name}}
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
    },

    deleteSelf(){
      console.log("lmao")
      //this.$destroy()
      //this.$el.parentNode.removeChild(this.$el)
      // Maybe try to delete from array in results page
    }
  },

  props: {
    name: String,
  },

  async created(){
    console.log(this.key)
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
    content: 100%;
    height: 100%;
  }

  .contentStuff{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>