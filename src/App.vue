<template>
  <div id="app">
    <div  class="container">
      <div class="row">
        <ul class="navigation-top col-12">
          <li><router-link to="/Js">JS</router-link></li>
          <li><router-link to="/VueJs">VUE JS</router-link></li>
          <li><router-link to="/HtmlCss">HTML  CSS</router-link></li>
        </ul>
      </div>
    </div>
    <div  class="container">
      <div class="row">
        <div class="col-12 component">
          <router-view/>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
 font-family: Ubuntu;
 src: url(./assets/fonts/ubuntu/Ubuntu-Medium.ttf);
}
#app{
  background-image: url(./assets/img/NodeJsBackground.png);
  background-size:cover;
  background-position:center;
  width: 100%;
  height: 100vh;
}
.navigation-top{
  margin: 0;
  width: 100%;
  height: 51px;
  background: rgba(0,0,0,0.6);
}
.navigation-top li {
  float: left;
  margin: 0 20px;
}
.navigation-top li a {
  line-height: 50px;
  color: white;
  font-family:Ubuntu;
  float: left;
}
.navigation-top li a:hover {
  border-bottom: 1px solid rgb(57, 171, 111);
  box-sizing: border-box;
  text-decoration:none;
}
.navigation-top a.router-link-active, .navigation-top li.router-link-active>a{
  color:rgb(57, 171, 111);
  border-bottom: 1px solid rgb(57, 171, 111);
  box-sizing: border-box;
  text-decoration:none;
}
.component{
  margin: 30px 0 0 0;
  background-color: rgba(0,0,0,0.6);
  color: white;
  padding: 30px;
}
</style>
