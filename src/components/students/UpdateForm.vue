<template>
  <form @submit.prevent="saveform">
    <div class="mb-3">
      <label for="">Name <span class="text-danger">*</span></label>
      <input
        name="name"
        type="text"
        class="form-control"
        v-model="student.name"
      />
      <span class="text-danger" v-if="errors?.name">{{ errors.name[0] }}</span>
    </div>
    <div class="mb-3">
      <label for="">Course <span class="text-danger">*</span></label>
      <input
        name="course"
        type="text"
        class="form-control"
        v-model="student.course"
      />
      <span class="text-danger" v-if="errors?.course">{{
        errors.course[0]
      }}</span>
    </div>
    <div class="mb-3">
      <label for="">Email <span class="text-danger">*</span></label>
      <input
        name="email"
        type="text"
        class="form-control"
        v-model="student.email"
      />
      <span class="text-danger" v-if="errors?.email">{{
        errors.email[0]
      }}</span>
    </div>
    <div class="mb-3">
      <label for="">Phone <span class="text-danger">*</span></label>
      <input
        name="form"
        type="text"
        class="form-control"
        v-model="student.phone"
      />
      <span class="text-danger" v-if="errors?.phone">{{
        errors.phone[0]
      }}</span>
    </div>
    <div class="mb-3">
      <base-button mode="btn-green-emerald float-end">
        <i class="bi bi-save"></i> Save
      </base-button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import store from "@/stores/store";
import { reactive, ref } from "vue";

export default {
  data() {
    return {
      studentId: this.$route.params.id,
      student: {
        name: "",
        course: "",
        email: "",
        phone: "",
      },
      errorMessage: {
        name: "",
        course: "",
        email: "",
        phone: "",
      },
      errors: {},
      form: reactive({
        name: "",
        email: "",
      }),
    };
  },
  mounted() {
    this.getStudentData();
  },
  methods: {
    getStudentData(studentId) {
      axios
        .get(store.$backendURL + "/api/students/" + this.studentId)
        .then((response) => {
          this.student = response.data.student;
        });
    },
    saveform() {
      console.log("submit");
      axios
        .put(store.$backendURL + "/api/students/" + this.studentId, this.student)
        .then((response) => {
          this.$toast.success(response.data.message, {
            position: "bottom",
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.$toast.error("Please complete the field", {
            position: "bottom",
          });
        });
    },
  },
};
</script>
