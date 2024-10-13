<template>
  <base-layout title="مدیران پنل" />
  <div class="mt-20 px-8 mb-8">
    <BaseTable title="ادمین ها" class="mt-4">
      <template #btn>
        <div class="flex align-center gap-2">
          <BaseBtn text="ذخیره" />
          <v-btn
            variant="outlined"
            color="secondary-main"
            class="!h-8 !font-normal"
          >
            بازگشت
          </v-btn>
        </div>
      </template>
      <div
        class="grid grid-cols-3 px-12 py-5 text-gray-400 justify-items-stretch text-center"
      >
        <p class="justify-self-start">نام و نام خانوادگی</p>
        <p>شماره تماس</p>
        <p class="justify-self-end">ایجاد تغییر</p>
      </div>
      <v-divider thickness="2" class="mx-6" />
      <div
        class="grid grid-cols-3 px-8 text-center py-4 place-items-center justify-items-stretch"
        v-for="i in 5"
      >
        <div class="flex text-black align-center gap-3  justify-self-start">
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
        <p>۰۹۱۲۰۲۳۰۲۳۴</p>
        <div  class="!justify-self-end">

          <BaseBtn text="ویرایش" />
        </div>
      </div>
      <div class="text-center">
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
    </BaseTable>
  </div>
</template>

<script setup>

</script>

<style></style>
