<template>
  <div class="container mt-5">
    <section>
      <base-card>
        <template v-slot:card-header>
          <h4>
            Students
            <base-button
              mode="btn-green-emerald float-end"
              link
              :to="createdLink()"
            >
              <i class="bi bi-plus-circle"></i> Add Student
            </base-button>
          </h4>
        </template>
        <template v-slot:card-body>
          <base-loader v-if="students.length === 0"></base-loader>
          <base-table v-else>
            <template v-slot:thead>
              <tr>
                <th>{{ $t("table_header.id") }}</th>
                <th>{{ $t("table_header.name") }}</th>
                <th>{{ $t("table_header.course") }}</th>
                <th>{{ $t("table_header.email") }}</th>
                <th>{{ $t("table_header.phone") }}</th>
                <th>{{ $t("table_header.created_at") }}</th>
                <th>{{ $t("table_header.Action") }}</th>
              </tr>
            </template>
            <template v-slot:tbody>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.course }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.phone }}</td>
                <td>{{ student.formatted_date }}</td>
                <td>
                  <base-button
                    mode="btn-green-emerald"
                    link
                    :to="editedLink(student.id)"
                  >
                    <i class="bi bi-pencil-square"></i>
                  </base-button>
                  <base-button
                    mode="btn-red-salmon"
                    @click="deleteStudent(student.id)"
                  >
                    <i class="bi bi-trash3"></i>
                  </base-button>
                </td>
              </tr>
            </template>
          </base-table>
        </template>
      </base-card>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/stores/store";

export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    getStudents() {
      axios
        .get(store.$backendURL + "/api/students")
        .then((response) => {
        this.students = response.data.students;
      });
    },
    createdLink() {
      return this.$route.path + "/create";
    },
    editedLink(id) {
      return this.$route.path + "/" + id + "/edit";
    },
    deleteStudent(id) {
      axios
        .delete(store.$backendURL + "/api/students/" + id)
        .then(response => {
          this.getStudents();
          this.$toast.success(response.data.message, {
            position: "bottom",
          });
        });
    },
  },
};
</script>
