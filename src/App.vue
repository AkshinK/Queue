<template>
  <div id="app">
    <!-- <News/>
    <Navbar/>
    <PostComponent/> -->
    <!-- <Chat/> -->
    <router-view/>
  </div>
</template>
<script>
// import News from "./../src/Navbar/News.vue"
// import Navbar from "./../src/Navbar/Navbar.vue"
// import PostComponent from "./../src/components/PostComponent.vue"
//import Chat from "./../src/components/Chat.vue"

export default {
    components:{}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
