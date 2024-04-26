<script setup>
import { getTaskById, getTaskData } from '../libs/fetchUtil.js'
import { onMounted, ref } from 'vue'
import { TaskManagement } from '/src/libs/TaskManagement.js'
import Modal from '../components/Modal.vue'

const showDetail = ref(false)
const taskManagement = new TaskManagement()
const dataById = ref()
onMounted(async () => {
  taskManagement.setTasks(await getTaskData(import.meta.env.VITE_BASE_URL))
})
const setDetail = (set) => {
  showDetail.value = set
}
async function fetchById(id) {
  dataById.value = await getTaskById(import.meta.env.VITE_BASE_URL, id)
}
const task = ref({
  status: 'No status',
  todo: 'To Do',
  doing: 'Doing',
  done: 'Done'
});

const getStatusColor = (status) => {
  switch (status) {
    case 'No status':
      return 'DimGray';
    case 'To do':
      return 'Red'
    case 'Doing':
      return 'DeepSkyBlue'
    case 'Done':
      return 'SpringGreen'
    default:
      return 'transparent'; // Default background color
  }
}
</script>

<template>
  <div class="w-[90%] m-[auto] ">
    <div class="w-full bg-gray-100">
      <div class="justify-center text-center w-full py-3 bg-white">
        <h1 class="font-bold text-2xl text-gray-800 my-10">
          IT-Bangmod Kradan Kanban
        </h1>
      </div>
      <div class="overflow-x-auto border-2 rounded-md">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider "
              ></th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-s-2"
              >
                Title
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-s-2"
              >
                Assignees
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-s-2"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody
            v-if="taskManagement.getTask().length === 0"
            class="w-full border bg-white"
          >
            <tr class="w-full">
              <td></td>
              <td></td>
              <td><div class="m-[auto]">NO TASK</div></td>
              <td></td>
            </tr>
          </tbody>
          <tbody v-else class="bg-white divide-y divide-gray-200">
            <tr
              v-for="task in taskManagement.getTask()"
              :key="task.taskId"
              class="itbkk-item cursor-pointer hover:text-violet-600 hover:duration-200"
              @click=";[(showDetail = true), fetchById(task.taskId)]"
            >
              <td class="px-6 py-4 whitespace-nowrap">{{ task.taskId }}</td>
              <td class="itbkk-title px-6 py-4 whitespace-nowrap border-s-2">
                {{ task.title }}
              </td>
              <td class="itbkk-assignees px-6 py-4 whitespace-nowrap border-s-2">
                {{ task.assignees }}
              </td>
              <td class="itbkk-status px-6 py-4 whitespace-nowrap border-s-2 text-white" :style="{ backgroundColor: getStatusColor(task.status)}">
                {{ task.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <teleport to="body" v-if="showDetail" >
        <Modal @setDetail="setDetail" :tasks="dataById"></Modal>
      </teleport>
    </div>
  </div>
</template>

<style scoped>
</style>
