<script>
import AddInput from "./components/AddInput.vue";
import ItemsList from "./components/ItemsList.vue";

export default {
    components: {
        AddInput,
        ItemsList,
    },
};
</script>

<template>
    <div class="h-100 w-full flex items-center justify-center">
        <div
            class="rounded bg-white shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg"
        >
            <div class="mb-4">
                <h1 class="text-grey-darkest text-center text-lg font-bold">
                    Todo List
                </h1>
                <add-input />
            </div>
            <div>
                <items-list />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
