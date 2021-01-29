<template>
     <div class="legend">
          <span>Double click to mark as complete</span>
          <span>
               <span class="incomplete-box"></span> = Incomplete
          </span>
          <span>
               <span class="complete-box"></span> = Complete
          </span>
     </div>
     <div class="todos">
          <div class="todo" 
               v-for="todo in allTodos" 
               :key="todo.id"
               @dblclick="onDbclick(todo)"
               :class="{'is-complete':todo.completed}">
               <h3>{{todo.title}}</h3>
               <img :src="DeleteIcon" @click="deleteTodos(todo.id)" alt="delete icon">
          </div>
     </div>
</template>

<script>
import {mapActions} from 'vuex'
// import {DeleteIcon} from '../assets/icons/delete.svg'
export default {
     name: 'Todos',
          data() {
               return {
                    DeleteIcon: require('../assets/icons/delete.svg')
               };
          },
          methods: {
               ...mapActions(['fetchTodos','deleteTodos','updateTodos']),
               onDbclick(todo){
                    const updateTodo={
                         id:todo.id,
                         title:todo.title,
                         completed:!todo.completed
                    }
                    this.updateTodos(updateTodo);
               }
              
          },
          computed: {
               allTodos() {
                    return this.$store.getters.allTodos
               },
          },
          created() {
               this.fetchTodos();
          }
     }
</script>

<style>
img{
        width: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
}
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
     position: relative;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  width: 100%;
  /* display: block; */
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>