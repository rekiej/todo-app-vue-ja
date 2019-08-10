<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Jac-task</h1>
        <!--input section-->
        <todo-card class="mx-auto mt-10 h-15 bg-gray-300 w-full max-w-lg rounded-t-lg border">
           <BaseInputText  class="ml-20 mt-3 rounded-lg"
            v-model="newTodoText"
            placeholder="New todo"
            @keydown.enter= "addTodo"
            />    
            <button class="px-4 bg-blue-400 text-gray-100 ml-4 mt-3 hover:bg-blue-500 rounded-lg" 
            @click="addTodo">Add to do</button>
        </todo-card>   

        <todo-card class="mx-auto bg-gray-300 w-full max-w-lg rounded-b-lg">
           <ul class="mx-auto w-lg max-w-lg" v-if="todos.length">
               <TodoListItem 
               class="bg-gray-700 w-lg max-w-lg"
               v-for="todo in todos"
               :key="todo.id"
               :todo="todo"
               @remove="removeTodo" 
               /> 
           </ul>

            <p v-else class=" mx-10 px-2 bg-red-600 text-gray-100 text-align:center
            rounded-l-lg rounded-r-lg">
                Nothing left in the list,
                <br> 
                Please add a new todo in the input above.
            </p>
        </todo-card>    
    </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'
let nextTodoId = 1

export default {

    components: {
        BaseInputText, TodoListItem
    },

    data () {
        return {
            newTodoText: '',
            todos: [
                {
                    id: nextTodoId++,
                    text: 'funciona'
                }
            ]  
        };
    },

    methods: {
         addTodo () {
                const trimmedText = this.newTodoText.trim()
                if (trimmedText) {
                    this.todos.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    this.newTodoText = ''
                }
            },
    //     editTask (todo) {
    //            const trimmedText = this.todo.trim()
    //            if (trimmedText) {
    //                this.todos.push({
    //                    id: todo.id,
    //                    text: trimmedText
    //                })
    //                this.todo = 'text'
    //            }
    //        },
            removeTodo (idToRemove) {
                this.todos = this.todos.filter(todo => {
                    return todo.id !== idToRemove
                })
            }
    }
}
</script>