<template>
    <div>
        <BaseInputText 
            v-model="newTodoText"
            placeholder="New todo"
            @keydown.enter="addTodo"
            />
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
        methods: {
            addTodo () {
                const trimmedText = this.newTodoText.trim()
                if (trimmedText) {
                    this.todo.push({
                        id: nextTodoId++,
                        text: trimmedText
                    })
                    this.newTodoText = ''
                }
            },
            removeTodo (idTodoRemove) {
                this.todos = this.todos.filter(todo => {
                    return todo.id !== idToRemove
                })
            }

        }
    }
</script>
    
    
