<template>
    <div class="container">

      <div class="sideBar">
        <h1>{{ msg }}</h1>
        <ul>
          <li>
            <span>Item 1</span>
          </li>
          <li>
            <span>Item 2</span>
          </li>
          <li>
            <span>Item 3</span>
          </li>
          <li>
            <span>Item 4</span>
          </li>
          <li>
            <span>Item 5</span>
          </li>
          <li>
            <span>Item 6</span>
          </li>
        </ul>
      </div>

      <div class="content">
        <div class="block">1</div>

        <div class="block">2</div>

        <div class="block">3</div>

        <div class="block">4</div>

        <div class="block">1</div>

        <div class="block">2</div>

        <div class="block">3</div>

        <div class="block">4</div>
      </div>

    </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Projects'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
