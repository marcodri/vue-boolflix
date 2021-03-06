// Milestone 1: Creare un layout base con una searchbar (una input e un button) in
// cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo,
// // cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha
// scritto l’utente. Vogliamo dopo la risposta dell’API visualizzare a schermo i
// seguenti valori per ogni film trovato: Titolo Titolo Originale Lingua Voto 
const myApp = new Vue({
  el:'#root',
  data:{
    tvShows:[],
    films:[],
    langNot:'img/noLang.png',
    imgNot:'img/not.jpg',
    inputSearch:'',
    pathImg:'https://image.tmdb.org/t/p/w500/',
    urlTv:'https://api.themoviedb.org/3/search/tv',
    urlMovie:'https://api.themoviedb.org/3/search/movie'
  },
  created(){
    axios.get(this.urlMovie,{
      params:{
        'api_key':'bc619d4b3b0d73040c2b1b6d3b761dd9',
        'query': 'c',
      }
    })
    .then((film) => {
      this.films.splice(0,this.films.length)
      this.films.push(...film.data.results)
      console.log(film)
    });
    axios.get(this.urlTv,{
      params:{
        'api_key':'bc619d4b3b0d73040c2b1b6d3b761dd9',
        'query': 'c',
      }
    })
    .then((tv) => {
      this.tvShows.splice(0,this.tvShows.length)
      this.tvShows.push(...tv.data.results)
      this.inputSearch='',
      console.log(tv)
    })


  },
  methods:{
    searchFilm(){
      axios.get(this.urlMovie,{
        params:{
          'api_key':'bc619d4b3b0d73040c2b1b6d3b761dd9',
          'query': this.inputSearch,
        }
      })
      .then((film) => {
        this.films.splice(0,this.films.length)
        this.films.push(...film.data.results)
        this.inputSearch='',
        console.log(film)
      });
      axios.get(this.urlTv,{
        params:{
          'api_key':'bc619d4b3b0d73040c2b1b6d3b761dd9',
          'query': this.inputSearch,
        }
      })
      .then((tv) => {
        this.tvShows.splice(0,this.tvShows.length)
        this.tvShows.push(...tv.data.results)
        this.inputSearch='',
        console.log(tv)
      })
    },
    replaceByDefault(e){
      e.target.src = this.imgNot
    },
    replaceByLangDefault(e){
      e.target.src = this.langNot
    },
    numStar(n){
      return Math.ceil(n / 2)
    },
  }

})
