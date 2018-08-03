import {db} from '../db'
import {eventBus} from '../main';

export default {

    created () {
        eventBus.$on("refreshTheLists", (data) => {
        this.tasks.length = 0;
        db.collection('tasks').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {this.tasks.push(doc.data())
            }
            )
            }
        );

    this.tasks2= [];
    this.tasks2.push(this.tasks)
    console.log('Length of tasks2 is ' + this.tasks2[0].length)

  }
        );

        showTasksAfterCompIsCreated: {
        this.tasks.length = 0;
        db.collection('tasks').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {this.tasks.push(doc.data())
            }
            )
            }
        );

    this.tasks2= [];
    this.tasks2.push(this.tasks)
    console.log('Length of tasks2 is ' + this.tasks2[0].length)
        }

},

firestore () {
    return {
        tasks: db.collection('tasks')
}
},

    methods: {

        showTasks () {
          this.tasks.length = 0;
          db.collection('tasks').get().then(querySnapshot => {
              querySnapshot
              .forEach(doc => {this.tasks.push(doc.data())
                }
              )
            }
          )
        },

        edit(){
          this.buttonText = 'Aktualizuj';
          this.editModeData.editmode = !this.editModeData.editmode;
          (this.editModeData.editmode) ? console.log("edit mode on") : (console.log("edit mode off"));
        },

        changeData(task, status, id, importance, Coding, Music) {
          console.log(task, status, id, importance, Coding, Music)
          db.collection('tasks').doc(id).set({
            task,
            status,
            id,
            importance,
            Coding,
            Music
              }
              )
        },

        del(id){
          db.collection('tasks').doc(id).delete();
          eventBus.$emit('refreshTheLists', 'data');
        },
    }
}