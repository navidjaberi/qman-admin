<template>
  <base-layout title="نظرات" />
  <div class="mt-20 px-8 mb-8">
    <BaseTable title="نظرات ارسال شده توسط کاربران" class="mt-4 relative">
      <div
        class="grid grid-cols-6 px-7 py-5 text-gray-400 justify-items-start place-items-center text-center"
      >
        <p class="col-start-2">شناسه مجموعه</p>
        <p>نام مجموعه</p>
        <p class="px-4">شناسه نظر</p>
        <p class="px-4">تاریخ</p>
        <p class="justify-self-center">وضعیت</p>
      </div>
      <v-divider thickness="2" class="mx-6" />
      <div class="min-h-[500px] pb-26">
        <div
          class="grid grid-cols-6 text-center py-1 mt-4 place-items-center justify-items-start px-10"
          v-for="i in comments"
          :key="i.commentId"
        >
          <v-checkbox hide-details class="text-gray-600" />
          <p>{{ i.cafeId }}</p>
          <p>{{ i.name }}</p>

          <p>{{ i.commentId }}</p>
          <p>{{ i.date }}</p>
          <div class="flex align-center px-5 gap-2">
            <BaseBtn text="منتشر شده" class="!px-4" />
            <v-btn
              variant="outlined"
              color="primary-main"
              class="w-5 !mx-auto"
              size="small"
              @click="ticketView(i.commentId)"
            >
              <Icon name="solar:eye-outline" size="1.5rem"></Icon>
            </v-btn>
          </div>
        </div>
        <div class="text-center absolute w-full bottom-0 mx-auto">
          <v-container>
            <v-row justify="center">
              <v-col cols="5">
                <v-container class="max-width !text-xs">
                  <v-pagination
                    v-model="page"
                    :length="15"
                    class="my-2 !text-xs"
                    size="small"
                    variant="text"
                  ></v-pagination>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </BaseTable>
  </div>
</template>

<script setup>
const router = useRouter();
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
const ticketView = (i) => {
  router.push(`/comments/${i}`);
};
</script>

<style></style>
