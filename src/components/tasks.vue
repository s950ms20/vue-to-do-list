<template>
  <div class="container">
    <div>

<div class="showAndHideButtons row">
<button id="hideCodeButton" class="col" @click="hideCode = !hideCode, chooseCategory()" :class="{grayButton: hideCode}">{{btn1}}: {{this.category}}</button>
<button id="hideDoneButton" class="col" @click="hideDone = !hideDone, chooseCategory()" :class="{grayButton: hideDone}">{{btn2}}: {{this.actualStatus}}</button>
<button id="showAll" class="col" @click="showAllBtnBoolean = !showAllBtnBoolean, showAll()" :class="{grayButton: showAllBtnBoolean}">{{btn3}}</button>
</div>
<!-- <div class="alert alert-primary">
<p>{{this.category}}: {{this.actualStatus}}</p>
</div> -->
<table class="table">
  <thead class="thead-light">
    <!-- <th>#</th> -->
    <th scope="col" >Zadanie
    <i @click="sortByTaskDec()" class="material-icons md-24">arrow_downward</i>
    <i @click="sortByTaskInc()" class="material-icons md-24">arrow_upward</i>
    </th>
    <th scope="col">Priorytet
    <i @click="sortByImportanceDec()" class="material-icons md-24">arrow_downward</i>
    <i @click="sortByImportanceInc()" class="material-icons md-24">arrow_upward</i>
    </th>
    <!-- <th scope="col" >Status
    <i @click="sortByStatusDec()" class="material-icons md-24">arrow_downward</i>
    <i @click="sortByStatusInc()" class="material-icons md-24">arrow_upward</i>
    </th> -->
    <th scope="col"></th>
    <!-- <th scope="col"></th> -->
  </thead>
  <tr v-for="(taskElem, index) in tasks2[0]" :key="index">
    <!-- <td>{{index+1}}</td> -->
    <td scope="row" @click="edit()">
        {{taskElem.task}}
    </td>
    <td>{{taskElem.importance}}</td>
    <!-- <td><p v-if="taskElem.status">Ukonczone</p><p v-if="!taskElem.status">Nieukonczone</p></td> -->
    <td><button class="ib" @click="del(taskElem.id)">
          <i class="material-icons md-24">delete</i>
      </button>
      <edittask :taskElem="taskElem" class="ib"></edittask></td>
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
          category: '',
          actualStatus: '',
          idx: '',
          editModeData: {
            editmode: false
            },
          buttonText: 'Dodaj',
          key: ''
    }
  },

  subscriptions () {
    //   this.hideTasksCoding = new Subject;
    // return {

    //     hideCode: this.hideTasksCoding
    //     .filter(value => value.data.Coding = !this.hideCode)
    //     // .pluck('coding', 'true')
    //     // .map(value => this.tasks.push(value))
    //     .filter(
    //       (value) => console.log(value.data)
    //     )
    //   }
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
      },

      sortByTaskDec(key){
        this.tasks2[0].sort(
          function (a,b, key) {
            if (a.task > b.task) {return -1}
            else if (a.task < b.task) {return 1}
            else if (a.task = b.task) {return 0}
          }
          );
      },
      sortByTaskInc(){
        this.tasks2[0].sort(
          function (a,b, key) {
            if (a.task < b.task) {return -1}
            else if (a.task > b.task) {return 1}
            else if (a.task = b.task) {return 0}
          }
          );
      },
      sortByImportanceDec(){
        this.tasks2[0].sort(
          function (a,b, key) {
            if (a.importance > b.importance) {return -1}
            else if (a.importance < b.importance) {return 1}
            else if (a.importance = b.importance) {return 0}
          }
          );
      },
      sortByImportanceInc(){
        this.tasks2[0].sort(
          function (a,b, key) {
            if (a.importance < b.importance) {return -1}
            else if (a.importance > b.importance) {return 1}
            else if (a.importance = b.importance) {return 0}
          }
          );
      },
      sortByStatusDec(){
        this.tasks2[0].sort(
          function (a,b, key) {
            if (a.status > b.status) {return -1}
            else if (a.status < b.status) {return 1}
            else if (a.status = b.status) {return 0}
          }
          );
      },
      sortByStatusInc(){
        this.tasks2[0].sort(
          function (a,b, key) {
            if (a.status < b.status) {return -1}
            else if (a.status > b.status) {return 1}
            else if (a.status = b.status) {return 0}
          }
          );
      },



    },
mixins: [mainMixin]
}
</script>

<style lang="scss">

</style>

