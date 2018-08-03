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

* {
  font-family: 'Raleway', sans-serif;
}

.addpanel {
  background-color: rgb(245, 245, 245);
  }


button {
  @extend .btn;
  @extend .btn-info;
  // width: 120px;;
  padding: 10px;
  margin: 5px;
}

.grayButton {
  // @extend button;
  @extend .btn;
  @extend .btn-success;
  // width: 120px;;
  padding: 10px;
  margin: 5px;
}

</style>
