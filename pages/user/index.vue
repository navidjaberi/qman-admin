<template>
  <base-layout title="حساب کاربری" />
  <div class="mt-20 px-8 mb-8">
    <BaseTable title="حساب کاربری من" class="mt-4 px-5">
      <template #btn>
        <div class="flex align-center gap-2" v-if="inputFieldToggle">
          <BaseBtn
            text="ویرایش اطلاعات"
            @click-handler="inputFieldToggle = !inputFieldToggle"
          />
        </div>
        <div class="flex align-center gap-2" v-else>
          <BaseBtn
            text="ذخیره"
            @click-handler="inputFieldToggle = !inputFieldToggle"
          />
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
      <div
        class="flex text-black align-center gap-3 py-5 justify-between custom-input__field"
      >
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
        <div class="w-full px-5">
          <v-text-field
            label="نام"
            :variant="inputFieldToggle ? 'solo' : 'outlined'"
            density="compact"
            flat
            hide-details
            :disabled="inputFieldToggle"
            v-model="userInfo.name"
          ></v-text-field>
        </div>
        <div class="w-full px-5">
          <v-text-field
            label="شماره تماس"
            :variant="inputFieldToggle ? 'solo' : 'outlined'"
            flat
            variant="outlined"
            density="compact"
            hide-details
            :disabled="inputFieldToggle"
            v-model="userInfo.phone"
          ></v-text-field>
        </div>
        <div class="w-full px-5">
          <v-text-field
            label="تخصص"
            :variant="inputFieldToggle ? 'solo' : 'outlined'"
            flat
            variant="outlined"
            density="compact"
            v-model="userInfo.master"
            hide-details
            :disabled="inputFieldToggle"
          ></v-text-field>
        </div>
        <div class="w-full px-5">
          <v-text-field
            label="رمز عبور"
            :variant="inputFieldToggle ? 'solo' : 'outlined'"
            flat
            variant="outlined"
            density="compact"
            type="password"
            hide-details
            :disabled="inputFieldToggle"
            v-model="userInfo.password"
          ></v-text-field>
        </div>
      </div>
      <div></div>
      <div class="py-4">
        <h3 class="mt-4">دسترسی ها:</h3>
        <h4 class="mt-4">صفحات:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in userInfo.pages"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <BaseCheckbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش تیکت:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in userInfo.ticket"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <BaseCheckbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش پیشخوان:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in userInfo.dashboard"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <BaseCheckbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش مالی:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div v-for="i in userInfo.finance" class="flex align-center gap-3">
            <p>{{ i.title }}</p>
            <BaseCheckbox :value="i.value" :checked="i.access" />
          </div>
        </div>
        <h4 class="mt-4">جزئیات بخش مدیران:</h4>
        <div class="grid grid-cols-6 gap-2 mt-4">
          <div
            v-for="i in userInfo.admins"
            class="flex align-center gap-3 justify-between"
          >
            <p>{{ i.title }}</p>
            <BaseCheckbox :value="i.value" :checked="i.access" />
          </div>
        </div>
      </div>
    </BaseTable>
  </div>
</template>
<script setup>
const inputFieldToggle = ref(false);
const userInfo = ref({
  name: "محمدعلی یاری آذر",
  phone: "09126625465",
  master: "پشتیبانی و محصول",
  password: 3453435,
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
