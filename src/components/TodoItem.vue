<script>
import { useStore } from "vuex";
import { toRefs } from "vue";

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const store = useStore();

        const { todo } = toRefs(props);

        const deleteTodo = (todo) => store.dispatch("removeTodo", todo);
        const changeTodoStatus = (todo, active) => store.dispatch("changeTodoStatus", {todo, active});

        return { todo, deleteTodo, changeTodoStatus };
    },
};
</script>

<template>
    <div class="flex mb-4 items-center">
        <p
            class="w-full text-grey-darkest text-md break-all"
            :class="{ 'line-through': !todo.active }"
        >
            {{ todo.text }}
        </p>
        <button
            v-if="todo.active"
            class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded border-grey hover:border-green-600 hover:text-white hover:bg-green-600"
            @click="changeTodoStatus(todo, false)"
        >
            Done
        </button>
        <button
            v-if="!todo.active"
            class="flex-no-shrink p-2 ml-2 border-2 rounded border-grey hover:border-slate-900 hover:text-white hover:bg-slate-900"
            @click="changeTodoStatus(todo, true)"
        >
            Not Done
        </button>
        <button
            class="flex-no-shrink p-2 ml-2 border-2 rounded border-grey hover:border-red-600 hover:text-white hover:bg-red-600"
            @click="deleteTodo(todo)"
        >
            Remove
        </button>
    </div>
</template>
