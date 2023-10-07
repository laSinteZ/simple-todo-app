<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

const username: Ref<string | null> = ref(localStorage.getItem('username') || '')
const newTodo: Ref<string> = ref('')
const todos: Ref<Array<string>> = ref([])
const router = useRouter()
const todoInput = ref<HTMLInputElement>()

const handleLogout = () => {
  localStorage.removeItem('username')
  router.push('/login')
}

const addTodo = () => {
  if (todoInput.value !== null) {
    todoInput.value?.focus()
  }

  if (!newTodo.value.trim()) return
  todos.value.push(newTodo.value)
  newTodo.value = ''
}

const removeTodo = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <h1 class="text-1xl text-gray-900">Welcome, {{ username }}</h1>
        <button
          class="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out"
          @click="handleLogout"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div
          class="border-2 rounded-lg border-gray-200 shadow-lg p-4 mx-auto"
          style="max-width: 600px"
        >
          <div class="flex items-center space-x-2">
            <input
              ref="todoInput"
              @keyup.enter="addTodo"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              v-model="newTodo"
              placeholder="What needs to be done?"
            />
            <button
              class="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 transition duration-150 ease-in-out"
              @click="addTodo"
            >
              Add
            </button>
          </div>

          <ul class="list-disc list-inside">
            <li
              class="bg-white shadow rounded-lg p-2 mt-2 flex items-center justify-between"
              v-for="(todo, index) in todos"
              :key="index"
            >
              {{ todo }}
              <button
                @click="removeTodo(index)"
                class="w-6 h-6 p-1 rounded-full hover:bg-gray-200 transition-colors duration-150 ease-in-out flex items-center justify-center"
                aria-label="Remove Todo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
