<template>
  <div>
    <img src='../assets/eagle.png' class='logo' />
    <h2 class='title'> Welcome to the planet of Lengaburu </h2>
    <p class='description'>  After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen of Falicornia for 15 years.Queen Al Falcone is now in hiding. But if King Shan can find her before the years are up, she will be exiled for another 15 years....</p>
    <br>
    <p class='description'>King Shan has received intelligence that Al Falcone is in hiding in one of these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor. However he has limited resources at his disposal & can send his army to only 4 of these planets. Your task is to help King Shan find Al Falcone.</p>
    <br><br><br>
    <router-link to="/findfalcone" class='start-button'>Help King Shan find Al Falcone</router-link>
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
  created: function () {
    this.$store.commit('resetAll');
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
  }

</style>
