<script>
import { ref } from "vue";

export default {
    setup(props, contex) {
        const title = ref("");

        
        return { 
            title,
        }
    },
};
</script>

<template>
    <div class="flex mt-4">
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            placeholder="Add Todo"
            v-model="title"
        />
        <button
            class="flex-no-shrink p-2 border-2 rounded text-slate-900 border-slate-800 hover:text-white hover:bg-slate-900"
        >
            Add
        </button>
    </div>
</template>
