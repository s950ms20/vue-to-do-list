<template>
  <div>
    <div>

<div class="showAndHideButtons">
<button id="hideCodeButton"
v-stream:click="{subject: this.hideTasksCoding, data: this.tasks}" @click="hideCode = !hideCode, chooseCategory()" :class="{grayButton: hideCode}">{{btn1}}</button>
<button id="hideDoneButton" @click="hideDone = !hideDone, chooseCategory()" :class="{grayButton: hideDone}">{{btn2}}</button>
<button id="showAll" @click="showAllBtnBoolean = !showAllBtnBoolean, showAll()" :class="{grayButton: showAllBtnBoolean}">{{btn3}}</button>
</div>
<div class="alert alert-primary">
<h3>{{this.category}}: {{this.actualStatus}}:</h3>
</div>
<table class="table">
  <thead class="thead-dark">
    <th>#</th>
    <th scope="col" >Zadanie</th>
    <th scope="col" >Priorytet</th>
    <th scope="col" >Status</th>
    <th scope="col"></th>
    <th scope="col"></th>
  </thead>
  <tr v-for="(taskElem, index) in tasks2[0]" :key="index">
    <td>{{index+1}}</td>
    <td scope="row">{{taskElem.task}}</td>
    <td>{{taskElem.importance}}</td>
    <td><p v-if="taskElem.status">Ukonczone</p><p v-if="!taskElem.status">Nieukonczone</p></td>
    <td><button @click="del(taskElem.id)">Delete</button></td>
    <td><edittask :taskElem="taskElem" class="inline"></edittask></td>
    </tr>
</table>
</div>
    <br>
  </div>
</template>

<script>
import {db} from '../db'
import {eventBus} from '../main';
import edittask from './edittask'
import { Observable } from 'rxjs/Rx'
import { Subject } from 'rxjs/Rx'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import mainMixin from '../mixins/mainMixin'

export default {

  components: {
    'edittask': edittask
  },

  data () {
    return {
          task: 'taskElem.task',
          Coding: 'taskElem.Coding',
          Music: 'taskElem.Music',
          importance: 'taskElem.importance',
          taskElem: '',
          id: 'taskElem.id',
          status: 'taskElem.status',
          index : '',
          hideCode: false,
          hideMusic: false,
          hideDone: false,
          hideUndone: false,
          select: 'taskElem.status',
          count: '',
          data: '',
          result: 'taskElem.Coding',
          tasks: [],
          tasks2: [],
          code: 'Kodowanie',
          mu: 'Muzyka',
          done: 'Ukonczone',
          undone:'Nieukonczone',
          showAllBtnBoolean: false,
          btn1: 'Wybierz kategorię',
          btn2: 'Wybierz Status',
          btn3: 'Pokaż wszystko',
          category: 'Kategoria',
          actualStatus: 'Status',
          idx: '',
          editModeData: {
            editmode: false
            },
          buttonText: 'Dodaj',
    }
  },

  subscriptions () {
      this.hideTasksCoding = new Subject;
    return {

        // hideCode: this.hideTasksCoding
        // .filter(value => value.data.Coding = !this.hideCode)
        // // .pluck('coding', 'true')
        // // .map(value => this.tasks.push(value))
        // .filter(
        //   (value) => console.log(value.data)
        // )
      }
  },

    methods: {

      chooseCategory(){
        this.btn1 = 'Zmien Kategorię';
        this.btn2 = 'Zmien Status';

        (this.hideCode) ? (this.category = 'Kodowanie') : (this.category = 'Muzyka');
        (this.hideDone) ? (this.actualStatus = 'Ukonczone') : (this.actualStatus = 'Nieukonczone');

        this.tasks2= [];
        this.tasks2.push(
        this.tasks.filter(value => value.Coding == this.hideCode && value.status ==this.hideDone))
        console.log(this.tasks2[0])
      },

      showAll(){
        this.category = 'Kodowanie & Muzyka';
        this.actualStatus = 'Ukonczone & Nieukonczone';
        this.btn3 = 'Pokaż wszystko / Odśwież Listę'

        this.tasks2= [];
        this.tasks2.push(
        this.tasks.filter(value => value))
        console.log('Length of tasks2 is: ' + this.tasks2[0].length)
      }
    },
mixins: [mainMixin]
}
</script>

<style lang="scss">

</style>