<template>
  <v-btn
    color="primary-main"
    class="px-12 py-4 !flex mx-auto"
    density="compact"
    :class="[props.class]"
    @click="clickHandler"
    :disabled="disable"
    >{{ props.text }}</v-btn
  >
</template>

<script setup>
const props = defineProps({
  text: String,
  class: String,
  disable: Boolean,
});
const emit = defineEmits(["clickHandler"]);
const clickHandler = () => {
  emit("clickHandler");
};
</script>

<style></style>
