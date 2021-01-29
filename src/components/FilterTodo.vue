<template>
  <h3>Filter Todos</h3>
  <select @change="filterTodos($event)">
       <option value="200">200</option>
       <option value="100">100</option>
       <option value="50">50</option>
       <option value="25">25</option>
       <option value="15">15</option>
       <option value="5">5</option>
  </select>
</template>

<script>
import {mapActions} from 'vuex'
export default {
     name:"FilterTodos",
     data(){
          return{
               value:''
          }
     },
     methods:{
          ...mapActions(['filterTodos'])
     }
}
</script>

<style scoped>
select {
  margin-top: 10px;
  padding: 6px;
  border: #41b883 1px solid;
  margin-bottom: 10px;
}
</style>