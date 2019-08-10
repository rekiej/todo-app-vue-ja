<template>
    <div id="app" class="bg-gray-100 h-screen">
        <TodoList/>
        <Todo/>
    </div>
</template>

<script>

//import TodoList from './components/TodoList1.vue'
import Todo from './components/TodoList.vue'
export default {
    name: 'app',
    components: {
  //      TodoList,
       Todo
    }
}
</script>