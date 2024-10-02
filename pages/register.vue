<template>
  <div class="default-container text-center">
    <div class="mt-40">
      <h1 class="text-primary-dark">به پنل مدیریت کیومن خوش آمدید</h1>
      <component
        :is="loginNumber ? tabs[currentTab] : tabs[2]"
        @login="currentTab++"
        @loginPassword="loginNumber = false"
        @loginNumber="loginNumber=true"
        @editPhoneNum="currentTab=0"
        @loggedIn="$router.push('/dashboard')"
      />
    </div>
    <div>
      <v-img src="/register-logo.png" width="200" class="mx-auto my-10"></v-img>
    </div>
  </div>
</template>
<script setup>
import RegisterLoginPassword from "~/components/Register/LoginPassword.vue";
import RegisterLoginNumber from "~/components/Register/LoginNumber.vue";
import RegisterOtp from "~/components/Register/Otp.vue";
const tabs = ref([RegisterLoginNumber, RegisterOtp, RegisterLoginPassword]);
const currentTab = ref(0);
const loginNumber = ref(true);
</script>

<style></style>
