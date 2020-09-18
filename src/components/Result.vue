<template>
  <div>
    <img src='../assets/eagle.png' class='logo' />
    <h2 class='title'> Finding Falcone! </h2>
    <div v-if="this.$store.getters.searchResult.status == 'success'">
      <p> Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</p>
      <p> Time taken: {{ this.$store.getters.timeTaken }}</p> 
      <p> Planet found: {{ this.$store.getters.searchResult.planet_name }}</p> 
    </div>

    <div v-if="this.$store.getters.searchResult.status == 'false'">
      <p> Failed to find Falcone!</p>
    </div>
    <br><br><br>
    <router-link to="/" class='start-button'>Start Again</router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function(){
    if(this.$store.getters.selectedPlanets.length == 0){
      this.$router.push('/') ;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h2, p{
    color: white;
  } 

  .logo{
    width: 100px;
    height: 100px;
  }

  .description{
    margin: 0 auto;
    width:420px;
  }

  .start-button{
    top: 40px;
    padding: 12px 30px 12px 30px;
    text-decoration: none;
    background: #2196F3;
    color: white;
    border-radius: 30px;
    cursor:pointer;
  }

</style>
