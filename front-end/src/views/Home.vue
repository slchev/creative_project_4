<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/image.jpeg" height="800px" width="1000px" border="4px solid black" >
    <HelloWorld msg="Welcome to In Its Place Organizing"/>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
