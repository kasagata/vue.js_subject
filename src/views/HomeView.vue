<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- HelloWorldコンポーネントを使用 -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// HelloWorldコンポーネントをimport
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  //コンポーネントを登録
  components: { 
    HelloWorld
  }
}
</script>
