<template>
  <base-layout title="تیکت" />
  <div
    class="border-1 border-gray-200 bg-white border-solid rounded-lg text-sm mt-30 pb-10 mx-5"
  >
    <div class="flex justify-between px-4">
      <div class="flex align-center gap-5">
        <h3 class="m-4">کافه جابری</h3>
      </div>
      <div class="flex align-center gap-5">
        <BaseBtn text="ذخیره" />
        <v-btn variant="outlined" color="secondary-main" rounded="lg"
          >بازگشت</v-btn
        >
      </div>
    </div>
    <v-divider thickness="2" />
    <div
      class="text-center px-6 py-1 mt-4 flex text-gray-500 align-center w-[80%] justify-between"
    >
      <div class="flex align-center gap-8">
        <p>شناسه کاربری:۴۵۹۱</p>
        <div class="flex align-center">
          <p>وضعیت اشتراک کاربر:</p>
          <div class="bg-success-light rounded-md px-2">
            <p class="font-regular py-1 text-success-dark">دارای اشتراک</p>
          </div>
        </div>

        <div class="flex align-center gap-2">
          <p>مدت اشتراک:دارای اشتراک</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-x-5 gap-y-10 mt-10">
      <div class="w-full px-5">
        <v-text-field
          label="نام مجموعه"
          variant="outlined"
          density="compact"
          hide-details
          v-model="businessInfo.name"
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="نام و نام خانوادگی مدیر مجموعه"
          variant="outlined"
          density="compact"
          hide-details
          v-model="businessInfo.managementName"
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="شماره تلفن همراه"
          variant="outlined"
          density="compact"
          v-model="businessInfo.phoneNum"
          hide-details
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="شماره تلفن ثابت"
          variant="outlined"
          density="compact"
          v-model="businessInfo.num"
          hide-details
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="استان"
          variant="outlined"
          density="compact"
          hide-details
          v-model="businessInfo.state"
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="شهر"
          variant="outlined"
          density="compact"
          hide-details
          v-model="businessInfo.city"
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="آدرس مجموعه"
          variant="outlined"
          density="compact"
          v-model="businessInfo.address"
          hide-details
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="لینک لوکیشن در نشان"
          variant="outlined"
          density="compact"
          v-model="businessInfo.locNeshan"
          hide-details
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="لینک لوکیشن در بلد"
          variant="outlined"
          density="compact"
          hide-details
          v-model="businessInfo.locBalad"
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="لینک لوکیشن در گوگل مپ"
          variant="outlined"
          density="compact"
          hide-details
          v-model="businessInfo.locGoogle"
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="آدرس اینستاگرام"
          variant="outlined"
          density="compact"
          v-model="businessInfo.instagram"
          hide-details
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <v-text-field
          label="آدرس وبسایت"
          variant="outlined"
          density="compact"
          v-model="businessInfo.website"
          hide-details
        ></v-text-field>
      </div>
      <div class="w-full px-5">
        <p>رنگ انتخابی</p>
        <v-select

          variant="outlined"
          density="compact"
          :items="['آبی', 'قرمز']"
          color="#979797"
          class="!text-[#979797] mt-3"
          v-model="businessInfo.color"
          hide-details
        ></v-select>
      </div>
      <div class="w-full px-5">
        <p>قالب انتخابی</p>
        <v-select

          variant="outlined"
          density="compact"
          :items="['فعال', 'غیرفعال']"
          color="#979797"
          class="!text-[#979797] mt-3"
          v-model="businessInfo.template"
          hide-details
        ></v-select>
      </div>
    </div>
    <div class="mt-5 px-5">
      <div class="pt-5 flex justify-end mt-10">
        <div class="flex gap-5">
          <v-btn
            variant="outlined"
            color="secondary-main"
            size="small"
            class="py-4 !flex px-6"
            type="button"
            >مشاهده منو</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { alert, hideAlert, showAlertVar } = useAlert();
alert.value.type = "success";
const businessInfo = ref({
  name: "کافه جابری",
  managementName: "نوید الدین جابری",
  phoneNum: "09126625465",
  num: "0215051501",
  state: "البرز",
  city: "کرج",
  address: "عظیمیه، بلوار 45 متری کاج، جنب ک",
  locNeshan: "https://neshan.6542652165455112",
  locBalad: "https://waze.654265216548soxrlk",
  locGoogle: "https://googlemap.654265216548",
  instagram: "Cafe.Bakery_Jaberi",
  website: "https://cafejaberi.com",
  template: "سنتی",
  color: "آبی",
});
</script>

<style></style>
