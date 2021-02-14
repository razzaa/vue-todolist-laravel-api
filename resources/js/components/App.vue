<template>
  <div class="m-auto w-1/2">
      <div class="bg-gray-200 p-10">
          <h2 class="text-center" id="title">Todo List</h2>
          <add-item-form />
      </div>
      <list-view />
  </div>
</template>

<script>
import AddItemForm from './AddItemForm.vue';
import ListView from './ListView.vue';

  export default {
  components: { AddItemForm },
    mounted() {
      console.log("Example component mounted");
    },
    components: {
      AddItemForm,
      ListView,
    }
  };
</script>