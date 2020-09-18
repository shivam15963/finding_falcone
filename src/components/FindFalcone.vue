<template>
  <div>
    <h2 class='title'> Select planets you want to search in: </h2>
    <p> You can only choose 4 planets </p>
    <div class='planetslist'>
      <div class='planet' v-for="(planet, index) in planets" v-on:click="changeselection(index, planet)">
        <div class='selected' v-if=planet.selected> <p>selected</p> </div>
        <img v-bind:src="imagePath(planet.name)" />
        <h3> {{ planet.name }} </h3>
        <p> <b>Distance</b> - {{ planet.distance }} megamiles </p>
      </div>
    </div>
    <router-link to="/assignvehicles" class='start-button' v-if='this.$store.getters.selectedPlanets.length == 4'>Now select vehicles to send to these planets</router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      planets: []    
    }
  },
  methods: {
    imagePath: function (index) {
      return require('@/assets/planets/' + index + '.png')
    },
    fetchPlanets(){
      this.$http.get('planets')
      .then(response => {
        this.planets = response.data;
      });
    },
    changeselection(index, planet){

      if(planet.selected){
        planet.selected = false;
        this.$store.commit('removePlanet', planet);
        this.$set(this.planets, index, planet);  
      }
      else if(this.$store.getters.selectedPlanets.length < 4){
        planet.selected = true;
        this.$store.commit('addPlanet', planet);
        this.$set(this.planets, index, planet);  
      }
    }
  },
  created: function () {
    this.fetchPlanets();
    this.$store.commit('resetAll');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h2,p{
    color: white;
  }
  
  .planetslist{
    width: 800px;
    margin: 60px auto;
  }

  .planet{
    position: relative;
    display: inline-block;
    margin:16px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px #211a1a;
    cursor: pointer;
  }

  .planet h3, .planet p{
    color: black;
    margin: 0px;
  }

  .planet h3{
    margin: 4px;
  }

  .planet p{
    font-size: 12px;
    margin-top: 8px;
  }

  .planet img{
    width: 64px;
    height: 64px;
  }

  .selected{
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    vertical-align: middle;
    background: rgba(40, 115, 91, 0.80);
  }

  .selected p{
    margin-top: 40%;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
  }

  .start-button{
    top: 40px;
    padding: 12px 30px 12px 30px;
    text-decoration: none;
    background: #2196F3;
    color: white;
    border-radius: 30px;
  }

</style>
