<template>
    <div class="container mt-5">
      <base-card>
        <template v-slot:card-header>
          <h4>Edit Students</h4>
        </template>
        <template v-slot:card-body>
              <update-form></update-form>
        </template>
      </base-card>
    </div>
  </template>
  
  <script>
  import UpdateForm from "@/components/students/UpdateForm.vue";
  
  export default {
    components: {
      UpdateForm,
    },
  };
  </script>
  