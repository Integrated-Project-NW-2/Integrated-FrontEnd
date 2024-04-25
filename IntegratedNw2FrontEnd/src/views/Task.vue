<script setup>
import { getTaskData } from "../libs/fetchUtil.js"
import { onMounted, ref } from "vue"

const tasks = ref([])
const detailModal = ref(false)

onMounted(async () => {
  try {
    const taskData = await getTaskData(import.meta.env.VITE_BASE_URL)
    if (taskData) {
      tasks.value = taskData
    } else {
      console.error("Failed to fetch task data.")
    }
  } catch (error) {
    console.error("Error fetching task data:", error)
  }
})
</script>

<template>
  <div class="w-full bg-gray-100">
    <div class="justify-center text-center w-full py-3 bg-white">
      <h1 class="font-bold text-2xl text-gray-800">IT-Bangmod Kradan Kanban</h1>
    </div>
    <div
      class="flex flex-row border-2 border-black rounded-md mx-3 mb-3 text-black"
    >
      <div class="mx-16 px-2 border-r-2 border-black">
        <p></p>
      </div>
      <div class="w-2/4 px-2 border-r-2 border-black">
        <p>Title</p>
      </div>
      <div class="w-1/4 px-2 border-r-2 border-black">
        <p>Assignees</p>
      </div>
      <div class="w-1/4 px-2">
        <p>Status</p>
      </div>
      <div class="flex flex-col mx-3 mb-3 text-black">
        <ul class="space-y-2">
          <li v-if="tasks.length === 0">No task</li>
          <li v-for="task in tasks" :key="task.id">
            <div class="flex flex-row">
              <div class="mx-16 px-2 border-r-2 border-black">
                <p>{{ task.id }}</p>
              </div>
              <div class="w-2/4 px-2 border-r-2 border-black">
                <p>{{ task.title }}</p>
              </div>
              <div class="w-1/4 px-2 border-r-2 border-black">
                <p>{{ task.assignees }}</p>
              </div>
              <div class="w-1/4 px-2">
                <p>{{ task.status }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
