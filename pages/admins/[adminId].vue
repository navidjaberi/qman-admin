<template>
  <base-layout title="مدیران پنل" />
  <div class="mt-20 px-8 mb-8">
    <BaseTable title="ویرایش ادمین" class="mt-4 px-5">
      <template #btn>
        <div class="flex align-center gap-2">
          <BaseBtn text="ذخیره" />
          <v-btn
            variant="outlined"
            color="secondary-main"
            class="!h-8 !font-normal"
            @click="$router.go(-1)"
          >
            بازگشت
          </v-btn>
        </div>
      </template>
      <div class="flex text-black align-center gap-3 py-5 justify-between">
        <div>
          <div class="relative">
            <v-avatar size="70px" class="!border-2 !border-success-main">
              <v-img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>
            </v-avatar>

            <div
              class="size-4 rounded-full bg-success-main absolute left-0 bottom-1"
            />
          </div>
        </div>
        <div class="text-center mr-5">
          <v-btn
            variant="outlined"
            append-icon="mdi mdi-repeat"
            color="primary-main"
            >تغییر وضعیت</v-btn
          >
        </div>

        <div class="w-full px-10">
          <v-text-field
            label="نام"
            variant="outlined"
            density="compact"
            hide-details
            v-model="adminAccess.name"
          ></v-text-field>
        </div>
        <div class="w-full px-10">
          <v-text-field
            label="شماره تماس"
            variant="outlined"
            density="compact"
            hide-details
            v-model="adminAccess.phone"
          ></v-text-field>
        </div>
        <div class="w-full px-10">
          <v-text-field
            label="تخصص"
            variant="outlined"
            density="compact"
            v-model="adminAccess.master"
            hide-details
          ></v-text-field>
        </div>
      </div>
      <div>
        <p>وضعیت:<span class="text-success-main">فعال</span></p>
      </div>
      <div class="py-4">
        <h3 class="mt-4">دسترسی ها:</h3>
        <h4 class="mt-4">صفحات:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in adminAccess.pages"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <v-checkbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش تیکت:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in adminAccess.ticket"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <v-checkbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش پیشخوان:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in adminAccess.dashboard"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <v-checkbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش مالی:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div v-for="i in adminAccess.finance" class="flex align-center gap-3">
            <p>{{ i.title }}</p>
            <v-checkbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش مدیران:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in adminAccess.admins"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <v-checkbox :value="i.value" :checked="i.access" />
          </div>
        </div>
      </div>
    </BaseTable>
  </div>
</template>

<script setup>
const adminAccess = ref({
  name: "محمدعلی یاری آذر",
  phone: "09126625465",
  master: "پشتیبانی و محصول",
  pages: [
    { title: "صفحه پیشخوان", value: "dashboard", access: true },
    { title: "صفحه تیکت", value: "ticket", access: true },
    { title: "صفحه تراکنش مالی", value: "financePage", access: true },
    { title: "صفحه مدیران", value: "admins", access: true },
    { title: "صفحه نظرات", value: "comments", access: true },
    { title: "صفحه کسب و کارها", value: "businesses", access: true },
  ],
  ticket: [
    { title: "پاسخ به تیکت", value: "answerTicket", access: true },
    { title: "حذف تیکت", value: "deleteTicket", access: true },
    { title: "تغییر وضعیت تیکت", value: "changeTicketStatus", access: true },
    { title: "بسته شده", value: "closedTicket", access: true },
    { title: "مالی", value: "finance", access: true },
    { title: "محصول", value: "product", access: true },
    { title: "پشتیبانی", value: "support", access: true },
    { title: "درانتظار بررسی", value: "pending", access: true },
  ],
  dashboard: [
    { title: "مجموع مبلغ فروش", value: "totalSell", access: true },
    { title: "تعداد کسب و کار", value: "businessAmount", access: true },
    { title: "آخرین پرداختی ها", value: "lastPayment", access: true },
  ],
  finance: [{ title: "فیلتر کردن", value: "filter", access: true }],
  admins: [
    { title: "افزودن ادمین", value: "addAdmin", access: true },
    { title: "تغییر وضعیت ادمین", value: "changeAdmin", access: true },
  ],
});
</script>

<style></style>
