<template>
  <div class="home">
    <News/>
    <Navbar/>
    <PostComponent/>
    <!-- <Chat/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import News from "./../../src/Navbar/News.vue"
import Navbar from "./../../src/Navbar/Navbar.vue"
import PostComponent from "./../../src/components/PostComponent.vue"
// import Chat from "./../../src/components/Chat.vue"

export default {
  name: 'Main',
  components: {
    News,Navbar,PostComponent
  }
}
</script>

<style scoped>

</style>
