<template>
  <base-layout title="تیکت" />
  <div
    class="border-1 border-gray-200 bg-white border-solid rounded-lg text-sm  mt-30"
  >
    <div class="flex justify-between px-4">
      <div class="flex align-center gap-5">
        <h3 class="m-4">{{ singleTicket.name }}</h3>
        <h3>
          <span class="text-gray-500 font-regular">موضوع : </span>باز نشدن برخی
          از صفحات سایت
        </h3>
      </div>
      <div class="flex align-center gap-5">
        <div class="text-center">
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            location="bottom end"
            transition="scale-transition"
          >
            <template v-slot:activator="{ props }">
              <v-btn variant="outlined" color="primary-main" v-bind="props">
                تغییر وضعیت تیکت
              </v-btn>
            </template>
            <v-card width="145" color="#EFF2FF" class="!text-sm pa-3" flat>
              <div>
                <v-btn-toggle
                  v-model="changeTicketStatus"
                  class="!flex-col !w-full !h-auto gap-4"
                  selected-class="!border-1 border-solid !border-black"
                >
                  <v-btn
                    class="!text-[#1D4300] !bg-[#CDFFA7] py-2"
                    rounded="lg"
                  >
                    تیم فنی
                  </v-btn>
                  <v-btn
                    class="!text-error-dark !bg-error-light py-2"
                    rounded="lg"
                  >
                    مالی
                  </v-btn>
                  <v-btn
                    class="!text-[#763700] !bg-[#FFAB70] py-2"
                    rounded="lg"
                  >
                    پشتیبانی
                  </v-btn>
                  <v-btn class="!bg-[#C5C5C5] py-2" rounded="lg">
                    مدیریت
                  </v-btn>
                  <v-btn
                    class="!text-primary-dark !bg-primary-light py-2"
                    rounded="lg"
                  >
                    تیم محصول
                  </v-btn>
                  <v-btn color="white" class="py-2" rounded="lg">
                    بسته شد
                  </v-btn>
                </v-btn-toggle>
              </div>
            </v-card>
          </v-menu>
        </div>
        <v-btn variant="outlined" color="secondary-main" rounded="lg"
          >بازگشت</v-btn
        >
      </div>
    </div>

    <v-divider thickness="2" />
    <div
      class="text-center px-6 py-1 mt-4 flex text-gray-500 align-center w-[80%] justify-between"
    >
      <p>شناسه کاربری:{{ singleTicket.cafeId }}</p>
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

      <p>ساعت:{{ singleTicket.time }}</p>
      <p>تاریخ:{{ singleTicket.date }}</p>
    </div>
    <div class="mt-10 px-5 custom-input">
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
    </div>
    <div class="px-5">
      <v-form class="mt-10" @submit.prevent="submitTicketResponse">
        <v-textarea
          label="پاسخ:"
          placeholder="هنوز برای این تیکت پاسخی ارسال نشده است.     "
          v-model="ticketResponse"
          rows="10"
          variant="plain"
          rounded
          flat
          hide-details
          class="!border-1 !border-[#D6D6D6] border-solid py-2 px-3 rounded-xl"
          :disabled="responseSubmitted"
        ></v-textarea>
        <div class="py-5 flex justify-end">
          <div class="flex gap-5">
            <BaseBtn
              :text="!responseSubmitted ? 'ارسال' : 'پاسخ به تیکت'"
              class="!px-17"
              :disable="ticketResponse.length <= 0"
              type="submit"
            />
            <v-btn
              variant="outlined"
              color="secondary-main"
              size="small"
              class="py-4 !flex px-6"
              type="button"
              >حذف</v-btn
            >
          </div>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { alert, hideAlert, showAlertVar } = useAlert();
import { useTicketStore } from "~/store/ticket";
const { getTickets } = useTicketStore();
const route = useRoute();
const menu = ref(false);
alert.value.type = "success";
const ticketText = ref(`سلام تیم پشتیبانی،
من با یک مشکل در وبسایت شما مواجه شده‌ام. صفحات وبسایت به‌درستی بارگذاری نمی‌شوند و به‌جای محتوا، تنها یک صفحه خالی نمایش داده می‌شود. این مشکل از دیروز شروع شده و در مرورگرهای مختلف نیز تست کرده‌ام، اما نتیجه‌ای نگرفته‌ام.
لطفاً لطفاً به من در حل این مشکل کمک کنید. آیا نیاز به اطلاعات بیشتری دارم؟
با تشکر از شما،
`);
const ticket = computed(() => {
  return getTickets;
});

const singleTicket = computed(() => {
  const findSingleTicket = ticket.value.find((i:any) => {
  
    return i.ticketId === +route.params.ticketId;
  });

  return findSingleTicket;
});


const changeTicketStatus = ref();
const ticketResponse = ref("");
const responseSubmitted = ref(false);

const submitTicketResponse = () => {
  responseSubmitted.value = !responseSubmitted.value;
  showAlertVar.value = true;
};
</script>

<style></style>
