<template>
  <div>
    <h1>{{ msg }}</h1>
    <li><router-link :to="{name: 'Css' }">Css</router-link></li>
    <li><router-link :to="{name: 'Js' }">Js</router-link></li>
    <li><router-link :to="{name: 'VueFramework' }">VueFramework</router-link></li>
    <router-view></router-view>
  </div>


</template>

<script>

export default {
  data () {
    return {
      msg: 'Notes'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
