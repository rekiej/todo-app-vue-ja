<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Jac-task</h1>

        <todo-card class="mx-auto max-w-full bg-gray-900 my-0 rounded-t-lg">
            <todo-cardbl class="h-20 w-32 bg-red-300 block float-left rounded-l-lg">
                Name
            </todo-cardbl>
            <todo-cardbl class="h-20 w-32 bg-red-400 block float-left">
                To do
            </todo-cardbl>
            <todo-cardbl class="h-20 w-32 bg-red-500 block float-left">
                In process
            </todo-cardbl>
            <todo-cardbl class="h-20 w-32 bg-red-600 block float-left rounded-r-lg">
                Done
            </todo-cardbl>

        </todo-card>

        <todo-card class="mx-auto max-w-full bg-gray-900 my-0 rounded-b-lg">
            <todo-cardbl class="h-20 w-32 bg-red-300 block float-left rounded-l-lg">
                Name
            </todo-cardbl>
            <todo-cardbl class="h-20 w-32 bg-red-400 block float-left">
                To do
            </todo-cardbl>
            <todo-cardbl class="h-20 w-32 bg-red-500 block float-left">
                In process
            </todo-cardbl>
            <todo-cardbl class="h-20 w-32 bg-red-600 block float-left rounded-r-lg">
                Done
            </todo-cardbl>

        </todo-card>
        <todo-card class="mx-auto mt-10 h-20 bg-gray-300 w-full max-w-lg">
            Create/Edit Taskakfhhs
        </todo-card>
    </div>
</template>

<script>

export default {

    props: {

    },
    

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false
                }
            ]
        };
    },

    mounted () {

    },

    methods: {
        
    }
}
</script>