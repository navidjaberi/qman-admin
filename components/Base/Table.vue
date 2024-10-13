<template>
  <div
    class="border-1 border-gray-200 bg-white border-solid rounded-lg text-sm h-full"
  >
    <div class="flex justify-between px-4">
      <h2 class="m-4">{{ title }}</h2>
      <slot name="btn" />
    </div>

    <v-divider thickness="2" />
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style></style>
