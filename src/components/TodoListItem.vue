<template>
    <li>
        <p class="w-3/4 py-1 px-2 mt-2 bg-gray-500 text-gray-100
            rounded-lg float-left">
            {{ todo.text }}
        </p>
        <button  class="p-1 mt-2 mx-5 bg-green-500 text-gray-100 hover:bg-green-600 rounded
        block float-left">
            Edit
        </button>
       <!-- <button  class="p-1 mt-2 mx-2 bg-green-500 text-gray-100 hover:bg-green-600 rounded-lg
        block float-left" @click="editTask">
            Edit
        </button>-->
        <button  class="p-1 h-8 w-8 mt-2 bg-red-500 text-gray-100 hover:bg-red-600 rounded-full
        block float-left font-bold" @click="$emit('remove',todo.id)">
            X
        </button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>
