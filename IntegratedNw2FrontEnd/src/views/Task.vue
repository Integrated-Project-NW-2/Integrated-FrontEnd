<script setup>
import { getTaskData } from '../libs/fetchUtil.js'
import { onMounted, ref } from 'vue'
import { TaskManagement } from '/src/libs/TaskManagement.js';
import  Modal  from '../components/Modal.vue'

const showDetail = ref(false)
const taskManagement = new TaskManagement()
onMounted(async () => {
   taskManagement.setTasks(await getTaskData(import.meta.env.VITE_BASE_URL))
})
const setDetail = (set) => {
  showDetail.value = set;
};
</script>

<template>
  <div class="w-full bg-gray-100">
    <div class="justify-center text-center w-full py-3 bg-white">
      <h1 class="font-bold text-2xl text-gray-800">IT-Bangmod Kradan Kanban</h1>
    </div>
    <div class="overflow-x-auto flex">
      <div class="border justify-center ">
      <table class="min-w-full divide-y divide-gray-200 border ">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]"
            ></th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[30%]"
            >
              Title
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[30%]"
            >
              Assignees
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[30%]"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <div v-if="taskManagement.getTask().length === 0 " class="">No task</div>
          <tr v-for="task in taskManagement.getTask()" :key="task.taskId" class="itbkk-item">
            <td class="px-6 py-4 whitespace-nowrap">{{ task.taskId }}</td>
            <td class="itbkk-title px-6 py-4 whitespace-nowrap cursor-pointer hover:text-violet-600 hover:duration-200" @click="showDetail = true">
              {{ task.title }}
            </td>
            <td class="itbkk-assignees px-6 py-4 whitespace-nowrap">
              {{ task.assignees }}
            </td>
            <td class="itbkk-status px-6 py-4 whitespace-nowrap">
              {{ task.status }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <teleport to="body" v-if="showDetail">
    <Modal @setDetail="setDetail"></Modal>
  </teleport>
  </div>
</template>

<style scoped></style>
