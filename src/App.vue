<template>
  <div id="app">
    <div class='top-header'>
      <router-link to="/">Reset</router-link> 
      <span> | </span>
      <a href="https://www.geektrust.in/" target="_blank">Geektrust Home</a> 
    </div>
    <router-view/>
    <br><br>
    <div clas='footer'>
        <span class='footer-text'>Coding problem: </span>
        <a class='footer-link' href="https://www.geektrust.in/coding-problem/frontend/space" target="_blank">https://www.geektrust.in/coding-problem/frontend/space</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body{
      background: #252121;
  }

.top-header{
    position: absolute;
    right: 20px;
    top: 20px;
  }

  .top-header a{
    color:white;
    font-size: 12px;
    text-decoration: none;
  }

  .top-header span{
    color:white;
    font-size: 12px;
  }

  span.footer-text{
    color:white;
    font-size: 12px;
  }

  a.footer-link{
    color:white;
    font-size: 12px;
  }
</style>
