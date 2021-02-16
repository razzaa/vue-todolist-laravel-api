<template>
  <div class="m-auto w-1/2">
      <div class="bg-gray-200 p-10">
          <h2 class="text-center" id="title">Todo List</h2>
          <add-item-form 
          v-on:reloadlist="getList()"/>
      </div>
      <list-view 
      :items="items"
      v-on:reloadlist="getList()" />
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
    },
    data: function() {
      return {
        items: []
      }
    },
    methods: {
      getList() {
        axios.get('api/items')
        .then( response => {
          this.items = response.data
        })
        .catch( error => {
          console.log( error );
        })
      }
    },
    created() {
      this.getList();
    }
  };
</script>