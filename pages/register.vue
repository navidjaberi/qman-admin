<template>
  <div class="default-container text-center">
    <h1 class="text-primary-dark mt-40">به پنل مدیریت کیومن خوش آمدید</h1>
    <div class="mt-16">
      <h4 class="text-[#979797]">
        برای ورود شماره تلفن همراه خود را وارد نمائید
      </h4>
      <v-form class="mt-10 px-5">
        <div class="px-20">
          <v-text-field
            label="شماره همراه خود را وارد نمائید"
            variant="outlined"
            density="compact"
          ></v-text-field>
        </div>
        <BaseBtn text="ورود" class="mt-24" />
        <v-btn variant="text" color="primary-main" class="mt-6"
          >ورود با رمز عبور</v-btn
        >
      </v-form>
    </div>
    <div>
<v-img src="/register-logo.png" width="200" class="mx-auto my-10"></v-img>

    </div>
  </div>
</template>

<script setup></script>

<style></style>
