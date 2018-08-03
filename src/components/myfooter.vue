<template>
  <div class="footer header alert alert-primary nav justify-content-center">
    <h1>{{msg}}</h1>
  </div>

</template>

<script>
import {db} from '../db'


export default {

  data () {
    return {
        msg: 'everyday coding | s950ms20'
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
