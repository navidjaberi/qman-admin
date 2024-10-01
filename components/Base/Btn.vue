<template>
  <v-btn
    color="primary-main"
    class="px-12 py-4 !flex mx-auto"
    density="compact"
    :class="[props.class]"
    >{{ props.text }}</v-btn
  >
</template>

<script setup>
const props = defineProps({
  text: String,
  class:String,
});
</script>

<style></style>
