<script>
import { computed } from "vue";
import TodoItem from "./TodoItem.vue";
import { useStore } from "vuex";

export default {
    components: {
        TodoItem,
    },
    setup() {
        const store = useStore();
        const todos = computed(() => store.state.todos);

        return { todos };
    },
};
</script>

<template>
    <div v-for="todo in todos"
    :key="todo.text"
    >
        <todo-item :todo="todo"/>
    </div>
</template>
