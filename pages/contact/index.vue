<template>
  <base-layout title="ارتباط سریع" />
  <div class="mt-20 px-8 mb-8">
    <BaseTable title="پیغام های دریافتی از کاربران" class="mt-4 relative">
      <div
        class="grid grid-cols-3 px-12 py-5 text-gray-400 place-items-center justify-items-stretch text-center"
      >
        <p class="justify-self-start">نام و نام خانوادگی</p>
        <p>شماره تماس</p>
        <p class="justify-self-end">زمان انتخابی برای تماس</p>
      </div>
      <v-divider thickness="2" class="mx-6" />
      <div class="min-h-[500px] pb-26">
        <div
          class="grid grid-cols-3 px-20 text-center py-4 place-items-center justify-items-stretch"
          v-for="i in 3"
        >
          <p class="justify-self-start">علیار یاری</p>
          <p>۰۹۱۲۰۲۳۰۲۳۴</p>
          <p class="justify-self-end">از ۹ تا ۱۸</p>
        </div>
      </div>
    </BaseTable>
  </div>
</template>

<script setup></script>

<style></style>
