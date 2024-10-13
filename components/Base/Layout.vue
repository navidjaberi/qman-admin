<template>
  <div>
    <h2>{{ props.title }}</h2>
    <p class="text-gray-500 text-sm mt-2">
      {{ dayInWeek + "" + dayInNumber + "" + month + " " + year }}
    </p>
  </div>
</template>

<script setup>
const { dayInWeek, dayInNumber, month, year } = useShared().getCurrentDate();
const props = defineProps({
  title: String,
});
</script>

<style></style>
