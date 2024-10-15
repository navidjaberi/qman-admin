<template>
  <base-layout title="تیکت"  />
  <div
    class="border-1 border-gray-200 bg-white border-solid rounded-lg text-sm mt-30 pb-10 mx-5"
  >
    <div class="flex justify-between px-4">
      <div class="flex align-center gap-5">
        <h3 class="m-4">{{ singleComment.name }}</h3>
      </div>
      <div class="flex align-center gap-5">
        <v-btn variant="outlined" color="secondary-main" rounded="lg"
          >بازگشت</v-btn
        >
      </div>
    </div>
    <v-divider thickness="2" />
    <div
      class="text-center px-6 py-1 mt-4 flex text-gray-500 align-center w-[80%] justify-between"
    >
      <p>شناسه کاربری:{{ singleComment.cafeId }}</p>
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

      <p>ساعت:{{ singleComment.time }}</p>
      <p>تاریخ:{{ singleComment.date }}</p>
    </div>
    <div class="mt-5 px-5 custom-input">
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
      <div class="pt-5 flex justify-end mt-10">
        <div class="flex gap-5">
          <BaseBtn text="انتشار نظر در سایت" type="submit" />
          <v-btn
            variant="outlined"
            color="secondary-main"
            size="small"
            class="py-4 !flex px-6"
            type="button"
            >حذف نظر از سایت</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { alert, hideAlert, showAlertVar } = useAlert();
const route = useRoute();
const menu = ref(false);
const comments = ref([
  {
    cafeId: 9787,
    name: "کافه جابری",
    commentId: 989652652654,
    date: "۱۴۰۳/۰۵/۲۲",
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "پشتیبانی",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652655,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "مدیریت",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652656,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "تیم محصول",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652657,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "تیم فنی",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652658,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "در انتظار بررسی",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652659,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "بسته شد",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652660,
  },
  {
    cafeId: 9787,
    name: "کافه جابری",
    status: "حذف شده",
    date: "۱۴۰۳/۰۵/۲۲",

    commentId: 989652652661,
  },
]);
alert.value.type = "success";
const ticketText =
  ref(`استفاده از پنل ادمین کیومن بسیار ساده و کاربرپسند است. با کمک این سرویس، من به راحتی منوی دیجیتال خود را مدیریت می‌کنم و مشتریانم به راحتی می‌توانند از طریق اسکن QR کد به منوی ما دسترسی داشته باشند. پشتیبانی نیز همیشه پاسخگو و کمک‌کننده بوده است. این سرویس به شدت توصیه می‌شود.
`);

const singleComment = computed(() => {
  const findSingleComment = comments.value.find((i) => {
    return i.commentId === +route.params.commentId;
  });

  return findSingleComment;
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
