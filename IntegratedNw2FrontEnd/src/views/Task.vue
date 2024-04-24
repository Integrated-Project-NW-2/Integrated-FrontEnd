<script setup></script>

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
      <!-- ID -->
      <div class="flex-grow overflow-auto"></div>
      <!-- list of task -->
      <ul class="space-y-2">
        <li v-if="tasks.length === 0">No task</li>
        <!-- <li v-for="task in column.tasks" :key="task.title"> {{ task.title }} </li> -->
        <!-- <li v-for="itbkk-title" in  :key="task.title">{task.title}</li>
      <li v-for="itbkk-assignees" in  :key="task.assignees">{task.assignees}</li>
      <li v-for="itbkk-status" in  :key="task.status">{task.status}</li> -->
      </ul>
    </div>
    <!-- <div class="flex items-center justify-center mt-4">
      <input v-model="newTask.title" type="text" placeholder="New Task Title" class="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500">
      <button @click="addTask" class="ml-2 py-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-700">Add Task</button>
    </div> -->
  </div>
</template>

<style scoped></style>
