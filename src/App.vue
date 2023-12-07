<template>
  <the-header></the-header>
  <RouterView />
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>
