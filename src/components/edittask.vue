<template>
  <div>
    <div class="editbox">
<!-- EDIT MODE START -->
                    <span>
                        <button @click="edit()"><i class="material-icons md-24">edit</i></button>
                        <br>
                        <form v-if="editModeData.editmode" @submit.prevent="
                        changeData(taskElem.task, taskElem.status, taskElem.id, taskElem.importance, taskElem.Coding, taskElem.Music),
                        edit()
                        ">
                    <span>
                        <input type="text" v-model="taskElem.task" required placeholder="Wprowadź nazwę zadania">
                    </span>
                        <input type="checkbox" id="status" v-model="taskElem.status"
                        >
                        <label for="status">
                        <span v-if="!status">Gotowe!</span><span v-else>Niegotowe</span>
                        <span>Priorytet: {{taskElem.importance}}</span>
                        <span>Kategoria: <span v-if="taskElem.Coding">Kodowanie</span><span v-if="taskElem.Music">Muzyka</span>
                          </span>
                        </label>
                    <br>
                    <span>
                        <button type="submit"><i class="material-icons md-24">done</i></button>
                    </span>
                </form>
                  </span>
<!-- EDIT MODE END -->
    </div>
  </div>
</template>

<script>
import {db} from '../db'
import {eventBus} from '../main';
import mainMixin from '../mixins/mainMixin';
// export {showTasks};

export default {


  props:
    ['taskElem', 'task', 'status', 'id', 'importance', 'Coding', 'Music' ],

  data () {
    return {
        tasks: [],
        code: 'Kodowanie',
        mu: 'Muzyka',
        done: 'Ukonczone',
        undone:'Nie Ukonczone',
        idx: '',
        editModeData: {
          editmode: false
          },
        buttonText: 'Dodaj',
    }
  },


    methods: {


},

mixins: [mainMixin]
}

</script>

<style lang="scss">



</style>
