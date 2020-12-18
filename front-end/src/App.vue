<template>
  <div id="app">
    <div id="nav">
    <div class="header_title">
    In Its Place Organizing
    </div>
      <router-link to="/">Home</router-link> &#183;
      <router-link to="/customer">Customer</router-link> &#183;
      <router-link to="/employee">Employee</router-link>
    </div>
    <router-view/>
    <div class = "footer">
    Insert Github repository here
    </div>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  border:1px solid black;
  background: #e7c2ff;
}
.footer{
border:1px solid black;
background: #e7c2ff;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #868687;
}
.header_title{
font-size:75px;
}
</style>
