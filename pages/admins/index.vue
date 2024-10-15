<template>
  <base-layout title="مدیران پنل" />
  <div class="mt-20 px-8 mb-8">
    <BaseTable title="ادمین ها" class="mt-4 relative">
      <template #btn>
        <div>
          <v-dialog max-width="220">
            <template v-slot:activator="{ props: activatorProps }">
              <BaseBtn text="افزودن ادمین" v-bind="activatorProps" />
            </template>

            <template v-slot:default="{ isActive }">
              <v-card class="relative pa-4" rounded="lg">
                <h4 class="text-center">افزودن ادمین</h4>
                <Icon
                  name="solar:close-circle-outline"
                  size="1.7rem"
                  class="cursor-pointer text-gray-400 absolute left-3 top-2"
                  @click="isActive.value = false"
                />
                <v-form class="mt-5">
                  <div>
                    <div class="mt-5">
                      <v-text-field
                        label="نام و نام خانوادگی"
                        variant="outlined"
                        density="compact"
                        color="#979797"
                        class="!text-[#979797]"
                        hide-details
                      ></v-text-field>
                    </div>
                    <div class="mt-5">
                      <v-text-field
                        label="شماره همراه خود را وارد نمائید"
                        variant="outlined"
                        density="compact"
                        color="#979797"
                        class="!text-[#979797]"
                        hide-details
                      ></v-text-field>
                    </div>
                    <div class="mt-5">
                      <p>وضعیت ادمین</p>
                      <v-select
                        label="انتخاب کنید"
                        variant="outlined"
                        density="compact"
                        :items="['فعال', 'غیرفعال']"
                        color="#979797"
                        class="!text-[#979797] mt-3"
                        hide-details
                      ></v-select>
                    </div>
                  </div>
                  <div class="flex gap-1 align-center mt-4">
                    <BaseBtn text="ثبت نهایی" class="!px-5" />
                    <v-btn
                      variant="outlined"
                      color="secondary-main"
                      class="!h-8 !font-normal px-2"
                      @click="isActive.value = false"
                    >
                      انصراف
                    </v-btn>
                  </div>
                </v-form>
              </v-card>
            </template>
          </v-dialog>
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
      <div class="min-h-[500px] pb-26">
        <div
          class="grid grid-cols-3 px-8 text-center py-4 place-items-center justify-items-stretch"
          v-for="i in 5"
        >
          <div class="flex text-black align-center gap-3 justify-self-start">
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
          <div class="!justify-self-end">
            <BaseBtn
              text="ویرایش"
              @click-handler="$router.push('/admins/134456')"
            />
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

<script setup></script>

<style></style>
