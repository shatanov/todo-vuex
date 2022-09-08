<script setup></script>

<template>
    <div class="h-100 w-full flex items-center justify-center">
        <div
            class="rounded bg-white shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg"
        >
            <div class="mb-4">
                <h1 class="text-grey-darkest text-center text-lg font-bold">
                    Todo List
                </h1>
                <div class="flex mt-4">
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                        placeholder="Add Todo"
                    />
                    <button
                        class="flex-no-shrink p-2 border-2 rounded text-slate-900 border-slate-800 hover:text-white hover:bg-slate-900"
                    >
                        Add
                    </button>
                </div>
            </div>
            <div>
                <div class="flex mb-4 items-center">
                    <p class="w-full text-grey-darkest text-md">
                        Add another component to Tailwind Components
                    </p>
                    <button
                        class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded border-grey hover:border-green-600 hover:text-white hover:bg-green-600"
                    >
                        Done
                    </button>
                    <button
                        class="flex-no-shrink p-2 ml-2 border-2 rounded border-grey hover:border-red-600 hover:text-white hover:bg-red-600"
                    >
                        Remove
                    </button>
                </div>
                <div class="flex mb-4 items-center">
                    <p class="w-full line-through text-green">
                        Submit Todo App Component to Tailwind Components
                    </p>
                    <button
                        class="flex-no-shrink p-2 ml-2 border-2 rounded border-grey hover:border-slate-900 hover:text-white hover:bg-slate-900"
                    >
                        Not Done
                    </button>
                    <button
                        class="flex-no-shrink p-2 ml-2 border-2 rounded border-grey hover:border-red-600 hover:text-white hover:bg-red-600"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
