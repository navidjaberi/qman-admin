<template>
  <div>
    <div>
      <v-navigation-drawer
        location="right"
        :elevation="5"
        class="!fixed"
        :width="264"
        permanent
      >
        <div class="h-[75%]">
          <div class="w-full text-center py-3 mt-2">
            <v-img src="/dashboard-logo.png" width="70" class="mx-auto"></v-img>
          </div>
          <DashboardNavbar
            direction="vertical"
            class="my-2 !mt-10 text-black"
          />
        </div>
      </v-navigation-drawer>
    </div>
    <v-tabs-window v-model="currentTab" class="!mr-70">
      <v-tabs-window-item value="dashboard" class="mt-4 px-5">
        <div>
          <h2>پیشخوان</h2>
          <p class="text-gray-500 text-sm mt-2">{{ todayDate }}</p>
        </div>
        <div class="flex mt-30 w-full ">
          <div class="basis-3/12">
            <div class="border-1 border-black border-solid bg-success-light rounded-lg p-3">
              <div class="flex justify-between ">
                <p class="font-regular">مجموع فروش ماه گذشته</p>
                <Icon name="hugeicons:money-add-01" size="1.5rem" />
              </div>
              <p class="text-left mt-12"><span class="font-semibold ">18.650.000</span> تومان</p>
            </div>
            <div class="border-1 border-gray-200 bg-white border-solid  rounded-lg p-3 mt-10 text-primary-main">
              <div class="flex justify-between ">
                <p class="font-bold text-lg ">تیکت</p>
                <Icon name="mdi:comment-question-outline" size="1.8rem" />
              </div>
              <p class="text-right mt-12"><span class="font-semibold ">4</span> جدید</p>
            </div>
            <div class="border-1 border-gray-200 bg-white border-solid  rounded-lg p-3 mt-10 text-primary-main">
              <div class="flex justify-between ">
                <p class="font-bold text-lg ">کسب و کار ها</p>
                <Icon name="ph:buildings" size="1.8rem" />
              </div>
              <p class="text-right mt-12"><span class="font-semibold ">143</span> مجموعه</p>
            </div>
            <div class="border-1 border-gray-200 bg-white border-solid  rounded-lg p-3 mt-10 text-primary-main">
              <div class="flex justify-between ">
                <p class="font-bold text-lg ">مدیران</p>
                <Icon name="pepicons-pencil:person-circle" size="1.8rem" />
              </div>
              <p class="text-right mt-12"><span class="font-semibold ">143</span> مجموعه</p>
            </div>
          </div>
          <div class="basis-9/12"></div>
        </div>
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>

<script setup>
const currentTab = ref("dashboard");
const { months, convertPersianNumberToEnglish, getDay } = useShared();

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
