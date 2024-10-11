<template>
  <base-layout title="تیکت" />
  <div
    class="border-1 border-gray-200 bg-white border-solid rounded-lg text-sm h-full mt-30"
  >
    <div class="flex justify-between px-4">
      <div class="flex align-center gap-5">
        <h3 class="m-4">{{ props.singleTicket.name }}</h3>
        <h3>
          <span class="text-gray-500 font-regular">موضوع : </span>باز نشدن برخی
          از صفحات سایت
        </h3>
      </div>
      <div class="flex align-center gap-5">
        <v-btn variant="outlined" color="primary-main">تغییر وضعیت تیکت</v-btn>
        <v-btn variant="outlined" color="secondary-main">بازگشت</v-btn>
      </div>
    </div>

    <v-divider thickness="2" />
    <div
      class="text-center px-6 py-1 mt-4 flex text-gray-500 align-center w-[80%] justify-between"
    >
      <p>شناسه کاربری:{{ props.singleTicket.cafeId }}</p>
      <div class="flex align-center gap-2">
        <p>وضعیت اشتراک کاربر:</p>
        <div class="bg-success-light rounded-md px-2">
          <p class="font-regular py-1 text-success-dark">دارای اشتراک</p>
        </div>
      </div>
      <div class="flex align-center gap-2">
        <p>وضعیت تیکت:</p>
        <div class="bg-error-light rounded-md px-2">
          <p class="font-regular py-1 text-error-dark">در انتظار بررسی</p>
        </div>
      </div>

      <p>ساعت:{{ props.singleTicket.time }}</p>
      <p>تاریخ:{{ props.singleTicket.date }}</p>
    </div>
    <div class="mt-10 px-5">
      <v-textarea
        v-model="ticketText"
        rows="10"
        disabled
        hide-details
        variant="solo"
        color="#D6D6D6"
        flat
        rounded
      ></v-textarea>
      <v-form class="mt-10">
        <v-textarea
          label="پاسخ:"
          placeholder="هنوز برای این تیکت پاسخی ارسال نشده است.     "
          v-model="ticketResponse"
          rows="10"
          variant="plain"
          rounded
          flat
          hide-details
          class="!border-1 !border-[#D6D6D6] border-solid pa-2 rounded-xl"
        ></v-textarea>
        <div class="py-5 flex justify-end">
          <div class="flex gap-5">
            <BaseBtn
              text="ارسال"
              class="!px-17"
              :disable="ticketResponse.length <= 0"
            />
            <v-btn
              variant="outlined"
              color="secondary-main"
              size="small"
              class="py-4 !flex px-6"
              >حذف</v-btn
            >
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tickets {
  cafeId: number;
  name: string;
  status: string;
  date: string;
  time: string;
  ticketId: number;
}
const ticketText = ref(`سلام تیم پشتیبانی،
من با یک مشکل در وبسایت شما مواجه شده‌ام. صفحات وبسایت به‌درستی بارگذاری نمی‌شوند و به‌جای محتوا، تنها یک صفحه خالی نمایش داده می‌شود. این مشکل از دیروز شروع شده و در مرورگرهای مختلف نیز تست کرده‌ام، اما نتیجه‌ای نگرفته‌ام.
لطفاً لطفاً به من در حل این مشکل کمک کنید. آیا نیاز به اطلاعات بیشتری دارم؟
با تشکر از شما،
`);
const ticketResponse = ref("");
const props = defineProps<{
  singleTicket: Tickets;
}>();
</script>

<style></style>
