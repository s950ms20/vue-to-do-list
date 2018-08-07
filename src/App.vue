<template>
  <div id="app">
    <div class="container">
      <myheader></myheader>
      <addtasks></addtasks>
      <tasks></tasks>
      <myfooter></myfooter>

    </div>




  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

@import '../node_modules/bootstrap/scss/bootstrap.scss';

@import url('https://fonts.googleapis.com/css?family=Raleway');

@import url('https://fonts.googleapis.com/icon?family=Material+Icons');


* {
  font-family: 'Raleway', sans-serif;
}

.addpanel {
  background-color: rgb(245, 245, 245);
  }

button {
  @extend .btn;
  @extend .btn-outline-dark;
  padding: 10px;
  margin: 5px;
}

.grayButton {
  @extend .btn;
  @extend .btn-light;
  background-color: lightgrey;
  color: black;
  padding: 10px;
  margin: 5px;
}

.ib {
  display: inline-block;
}

td {
  @extend .mx-auto;
}

h1 {
  margin: 20px;
}

.material-icons {
  float: right;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

</style>
