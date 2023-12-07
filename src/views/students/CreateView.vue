<template>
  <div class="container mt-5">
    <base-card>
      <template v-slot:card-header>
        <h4>Add Students</h4>
      </template>
      <template v-slot:card-body>
            <student-form></student-form>
      </template>
    </base-card>
  </div>
</template>

<script>
import StudentForm from "@/components/students/StudentForm.vue";

export default {
  components: {
    StudentForm,
  },
};
</script>
