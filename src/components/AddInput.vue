<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();

        const text = ref('');

        const addTodo = () => {
            const todo = {
                text: text.value,
                active: true,
            };
            store.dispatch('addTodo', todo);
            text.value = '';
        };

        return { 
            text,
            addTodo,
        }
    },
};
</script>

<template>
    <div class="flex mt-4">
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            v-model="text"
            @keyup.enter="addTodo"
        />
        <button
            class="flex-no-shrink p-2 border-2 rounded text-slate-900 border-slate-800 hover:text-white hover:bg-slate-900"
            @click="addTodo"
        >
            Add
        </button>
    </div>
</template>
