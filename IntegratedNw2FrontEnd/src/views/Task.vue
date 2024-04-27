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
  dataById.value = await getTaskById(import.meta.env.VITE_BASE_URL,id)
}
const task = ref({
  status: 'No Status',
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
      return 'LimeGreen'
    default:
      return 'transparent'; // Default background color
  }
}
const convertStatus = (status) =>{
  switch (status) {
    case 'No status':
      return 'No Status';
    case 'To do':
      return 'To Do'
    case 'Doing':
      return 'Doing'
    case 'Done':
      return 'Done'
  }
}

</script>

<template>
  <div class="w-[90%] m-[auto]">
    <div class="w-full">
      <div class="justify-center text-center w-full py-3 ">
        <h1 class="font-bold text-3xl text-white my-10">
          IT-Bangmod Kradan Kanban
        </h1>
      </div>
      <div class="overflow-x-auto rounded-md shadow-2xl">
        <table class="min-w-full divide-y divide-gray-200 ">
          <thead class="bg-gray-800">
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-bold text-white uppercase tracking-wider "
              ></th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
              >
                Assignees
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-bold text-white uppercase tracking-wider"
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
              <td class="itbkk-title px-6 py-4 whitespace-nowrap">
                {{ task.title }}
              </td>
              <td class="itbkk-assignees px-6 py-4 whitespace-nowrap " :style="{fontStyle:task.assignees? 'normal' : 'italic'}">
                {{ task.assignees ? task.assignees : 'Unassigned' }}
              </td>
              <td class="itbkk-status px-6 py-4 whitespace-nowrap  text-white" :style="{ backgroundColor: getStatusColor(task.status)}" >
                {{ convertStatus(task.status) }}
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
