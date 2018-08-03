<template>
  <div class="addpanel nav justify-content-center form-group">
      <br><br><br>
    <form @submit.prevent="addTask(task, Coding, Music, importance, status, id), eventBusEmitter()">
        <span>
            <input type="text" v-model="task" required placeholder="Wprowadź nazwę zadania" size="50"
                v-on:keyup="generateID">
        </span><br><br>


        <span class="">Wybierz kategorię:
            <input type="checkbox" id="Coding" v-model="Coding">
            <label for="Coding">Kodowanie</label>
            <input type="checkbox" id="Music" v-model="Music">
            <label for="Music">Muzyka</label>
        </span><br><br>

        <span>Określi priorytet zadania: <select v-model="importance">
            <option disabled value="importance" placeholder="Ważność zadania">Priorytet:</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        </span><br><br>


        <span>
            <input type="checkbox" id="status" v-model="status">
            <label for="status">
            <span v-if="status">Kliknij aby zmienić. Status: Gotowe!</span>
            <span v-else>Kliknij aby zmienić. Status: Niegotowe</span>
            </label>
        </span><br><br>


        <span>
            <button class="float-right" type="submit">{{buttonText}}</button>
            <br><br><br>
        </span>
    </form>
    <br>
  </div>
</template>

<script>
import {db} from '../db'
import {eventBus} from '../main';
import {showTasks} from './tasks';

export default {

  data () {
    return {
        tasks: [],
        task: '',
        Coding: false,
        Music: false,
        importance: '',
        taskElem: '',
        id: '',
        status: false,
        buttonText: 'Dodaj'
    }
  },
  created () {

  },

  firestore () {
        return {
            tasks: db.collection('tasks')
    }
},

    methods: {
        addTask(task, Coding, Music, importance, status, id) {

            db.collection('tasks').doc(id).set({
                        task,
                        Coding,
                        Music,
                        importance,
                        status,
                        id
                    }
                    )

        this.tasks2 = [];
        this.tasks2.push(
        this.tasks.filter(value => value.task))
        console.log('Length of collection tasks2 is ' + this.tasks2[0].length)

            },
        eventBusEmitter(){
            eventBus.$emit('refreshTheLists', 'data');
        },
        generateID(){
            let result = parseInt(Math.floor(Math.random() * 9999999).toString().slice(2,6));
            // this.task = result
            this.id = result.toString();
            console.log(this.id)
        }
}
}
</script>

<style lang="scss">

</style>
