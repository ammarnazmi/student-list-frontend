<template>
  <button v-if="!link" class="btn" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="btn" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: null,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
.btn {
  margin-right: 2px;
}
.btn-green-emerald {
  background-color: #00a76b;
  color: white;
}

.btn-green-tea {
  background-color: #cfe3be;
  color: white;
}

.btn-red-salmon {
  background-color: #fa8071;
  color: white;
}

.btn-green-emerald:hover,
.btn-green-tea:hover {
  background-color: white; 
  color: #04AA6D; 
  border: 1px solid #04AA6D;
}

.btn-red-salmon:hover {
  background-color: white;
  color: #b80f0a;
  border: 1px solid #b80f0a
}
</style>
