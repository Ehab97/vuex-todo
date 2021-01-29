<template>
  <div class="home">
    <div class="container">
      <AddTodo/>
      <FilterTodo/>
      <Todos />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'
import AddTodo from '@/components/AddTodo.vue'
import FilterTodo from '@/components/FilterTodo.vue'
export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo,
    FilterTodo
  }
}
</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>