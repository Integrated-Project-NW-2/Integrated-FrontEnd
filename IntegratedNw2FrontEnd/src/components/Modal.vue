<script setup>
const emit = defineEmits(['setDetail'])
const props = defineProps({
  tasks:Object
})

function formatDateCreated(){
  return `${new Date(props.tasks?.createdOn).getFullYear()}-${new Date(props.tasks?.createdOn).getMonth()}-${new Date(props.tasks?.createdOn).getDate()}`
}
function formatDateUpdated(){
  return `${new Date(props.tasks?.updatedOn).getFullYear()}-${new Date(props.tasks?.updatedOn).getMonth()}-${new Date(props.tasks?.updatedOn).getDate()}`
}
</script>

<template>
  <div>
    <div
      class="bg-grey-500 backdrop-blur-sm w-screen h-screen fixed top-0 left-0 pt-[100px]"
    >
      <div class="w-[90%] m-[auto]">
        <div
          class="flex flex-col justify-between bg-slate-600 p-4 border-gray-200 rounded-md"
        >
          <div class="w-full h-[10%] mt-2">
            <h1 class="text-xl font-bold">Design Backend API for PBI 1,2</h1>
          </div>
          <div class="border-b w-full mt-4"></div>
          <div class="flex flex-row">
            <div class="w-[70%] h-[50%]">
              <div class="pl-4 mt-4">Description</div>
              <div class="w-full h-[420px]">
                <textarea
                  class="w-[95%] h-[90%] px-4 py-2 mx-4 my-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter your text here..."
                >{{ tasks?.description }}</textarea>
              </div>
            </div>
            <div class=" w-[30%] h-[50%] flex-col">
              <div class="h-[180px]">
                <div class="pl-4 mt-4">Assignees</div>
                <div class="h-[150px]">
                  <textarea
                    class="w-[95%] h-[90%] px-4 py-2 mx-4 my-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your text here..."
                  >{{ tasks?.assignees }}</textarea>
                </div>
              </div>
              <div class=" w-full h-[100px]">
                <label class="form-control w-full pl-4">
                  <div class="label">
                    <span class="label-text"
                      >Status</span
                    >
                  </div>
                  <select
                    class="select select-bordered w-full  bg-inherit"
                  >
                  
                    <option disabled selected>Status</option>
                    <option :selected="tasks?.status === 'TO_DO'">To do</option>
                    <option :selected="tasks?.status === 'DOING'">Doing</option>
                    <option :selected="tasks?.status === 'DONE'">Done</option>
                    <option :selected="tasks?.status === 'NO_STATUS'">No status</option>
                  </select>
                </label>
              </div>
              <div class="mt-10 ml-4">
              <div class=""><div>TimeZone</div><div>{{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</div></div>
              <div class=""><div>Created On</div><div>{{ formatDateCreated() }}</div></div>
              <div class=""><div>Updated On</div><div>{{ formatDateUpdated() }}</div></div>
            </div>
            </div>
          </div>
          <div class="flex flex-row w-full justify-end ">
          <div class=" mr-2">
            <div @click="$emit('setDetail', false)" class="btn btn-info">Ok</div>
          </div>
          <div class="">
            <div @click="$emit('setDetail', false)" class="btn btn-error">close</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
