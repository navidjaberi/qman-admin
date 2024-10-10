<template>
  <div>
    <h2>{{ props.title }}</h2>
    <p class="text-gray-500 text-sm mt-2">{{ todayDate }}</p>
  </div>
</template>

<script setup>
const { months, convertPersianNumberToEnglish, getDay } = useShared();
const props = defineProps({
  title: String,
});
const todayDate = computed(() => {
  const year = ref(1403);
  const month = ref(6);
  const day = ref(1);
  const date = new Date().toLocaleDateString("fa-IR").split("/");
  year.value = date[0];
  month.value = convertPersianNumberToEnglish(date[1]);
  day.value = date[2];
  const currentDayInWeek = getDay(
    convertPersianNumberToEnglish(year.value),
    month.value,
    convertPersianNumberToEnglish(day.value)
  );
  const currentMonth = months.find((i) => {
    return i.value === +month.value;
  });
  return (
    currentDayInWeek +
    " " +
    day.value +
    " " +
    currentMonth.text +
    " " +
    year.value
  );
});
</script>

<style></style>
