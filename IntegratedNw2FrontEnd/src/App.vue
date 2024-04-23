<script setup>
import { defineProps } from "vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="">
      <h1 class="flex justify-center font-semibold p-10 text-2xl">
        IT-Bangmod Kradan Kanban
      </h1>
    </div>
    <div class="tableContainer">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Assignees</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.assignees.join(", ") }}</td>
            <td>{{ task.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto; /* Add horizontal scrolling for small screens */
}
.table-container {
  max-width: 800px; /* Adjust the maximum width as per your requirement */
  margin: 0 auto; /* Center the table horizontally */
}
th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
th {
  background-color: #c4f3ff;
}

/* Make table responsive */
@media screen and (max-width: 600px) {
  table {
    overflow-x: auto; /* Enable horizontal scrolling */
  }
  td,
  th {
    white-space: nowrap; /* Prevent line breaks */
    min-width: 120px; /* Minimum width for cells */
  }
}
</style>
