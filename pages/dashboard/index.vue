<template>
  <base-layout title="پیشخوان" />
  <div class="flex mt-30 w-full mb-10">
    <div class="basis-3/12">
      <div
        class="border-1 border-black border-solid bg-success-light rounded-lg p-3"
      >
        <div class="flex justify-between">
          <p class="font-regular">مجموع فروش ماه گذشته</p>
          <Icon name="hugeicons:money-add-01" size="1.5rem" />
        </div>
        <p class="text-left mt-12">
          <span class="font-semibold">18.650.000</span> تومان
        </p>
      </div>
      <div
        class="border-1 border-gray-200 bg-white border-solid rounded-lg p-3 mt-10 text-primary-main"
      >
        <div class="flex justify-between">
          <p class="font-bold text-lg">تیکت</p>
          <Icon name="mdi:comment-question-outline" size="1.8rem" />
        </div>
        <p class="text-right mt-12">
          <span class="font-semibold">4</span> جدید
        </p>
      </div>
      <div
        class="border-1 border-gray-200 bg-white border-solid rounded-lg p-3 mt-10 text-primary-main"
      >
        <div class="flex justify-between">
          <p class="font-bold text-lg">کسب و کار ها</p>
          <Icon name="ph:buildings" size="1.8rem" />
        </div>
        <p class="text-right mt-12">
          <span class="font-semibold">143</span> مجموعه
        </p>
      </div>
      <div
        class="border-1 border-gray-200 bg-white border-solid rounded-lg p-3 mt-10 text-primary-main"
      >
        <div class="flex justify-between">
          <p class="font-bold text-lg">مدیران</p>
          <Icon name="pepicons-pencil:person-circle" size="1.8rem" />
        </div>
        <div class="flex text-black align-center gap-3 mt-4" v-for="i in 3">
          <div class="relative">
            <v-avatar size="40px" class="!border-2 !border-success-main">
              <v-img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>
            </v-avatar>
            <div
              class="size-2 rounded-full bg-success-main absolute left-0 bottom-1"
            />
          </div>
          <p>علیار یاری</p>
        </div>
      </div>
    </div>
    <div class="basis-9/12 px-8">
      <BaseTable title="آخرین پرداختی ها">
        <div class="grid grid-cols-7 text-center px-6 py-5 text-gray-400">
          <p>شناسه مجموعه</p>
          <p>نام مجموعه</p>
          <p>وضعیت پرداخت</p>
          <p>مبلغ</p>
          <p>زمان پرداخت</p>
          <p>مدت اشتراک</p>
          <p>شماره رهگیری</p>
        </div>
        <v-divider thickness="2" class="mx-6" />
        <div class="grid grid-cols-7 text-center px-6 py-1 mt-4" v-for="i in 5">
          <p>9787</p>
          <p>کافه جابری</p>
          <div>
            <p
              class="bg-success-light font-regular py-1 text-success-dark rounded-md"
            >
              موفق
            </p>
          </div>
          <p>1.200.000</p>
          <p class="text-xs">13:30 - 03-07-01</p>
          <p>3 ماهه</p>
          <p>9878654512</p>
        </div>
      </BaseTable>
    </div>
  </div>
</template>
<script setup></script>

<style></style>
