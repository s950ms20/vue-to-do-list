<template>
  <div class="header alert alert-primary nav justify-content-center" role="alert">
    <h1>{{msg}}</h1>
  </div>

</template>

<script>
import {db} from '../db'


export default {

  data () {
    return {
        msg: 'a simple to do list'
    }
  },
  created () {


  },


    methods: {

}
}
</script>

<style lang="scss">


</style>
