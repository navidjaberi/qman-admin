<template>
  <h4 class="text-[#979797] mt-16">
    کد ارسال شده به شماره همراهتان را وارد نمائید
  </h4>
  <h6 class="mt-3 text-primary-dark">این کد محرمانه است، از ارسال به دیگران خودداری نمائید</h6>
  <v-btn
    color="primary-main"
    variant="text"
    class="px-3 py-1 !rounded-2xl !text-[13px] mx-auto mt-6"
    @click="$emit('editPhoneNum')"
  >
    <p>ویراش شماره ۰۹۱۲۲۲۵۶۵۳۹</p>
    <template #append>
      <Icon
        name="solar:pen-new-square-outline"
        size="1.2rem"
        class="text-primary-main"
      />
    </template>
  </v-btn>
  <v-form @submit.prevent="confirmCode" class="confirm">
    <div class="text-right px-20 mt-6 ltr">
      <RegisterOTPParent
        :numInputs="5"
        :value="otp"
        inputType="number"
        inputmode="numeric"
        @on-complete="confirmCode"
        @update:value="changes"
        :shouldAutoFocus="true"
        :isDisabled="codeLoading"
        :inputClasses="[codeError ? 'code-error' : '']"
      />

      <p class="text-error text-body-2 mb-4" v-if="codeError">
        کد وارد شده صحیح نیست دوباره تلاش کنید
      </p>
      <div class="text-center flex justify-center gap-2">
        <v-btn
          class="mt-10 mb-3  text-[13px] !font-medium "
          size="medium"
          :disabled="codeLoading || !resendCode"
          @click="resendCodeHandler"
          variant="text"
          color="primary-main"
          >ارسال مجدد کد</v-btn
        >
        <p class="mt-10 mb-3  text-[13px] !font-semibold text-primary-main">
          {{ timer }}
        </p>
      </div>
    </div>
    <div class="text-center mt-4">
      <BaseBtn
        class="px-12 mb-5 mx-auto"
        mode="primary"
        :disabled="otp.length < 4 || codeLoading"
        :loading="codeLoading"
        type="submit"
        text="تایید کد"
      />
    </div>
  </v-form>
  <v-btn variant="text" color="primary-main" class="mt-2" @click="$emit('loginPassword')"
        >ورود با رمز عبور</v-btn
      >
</template>
<script setup>
const emit = defineEmits(["editPhoneNum", "loggedIn","loginPassword"]);
const otp = ref("");
const codeLoading = ref(false);
const codeError = ref(false);
const resendCode = ref(false);
const resendCodeSuccessful = ref(false);
const timer = ref("00" + ":" + "59");
const confirmCode = () => {
  emit("loggedIn");
};

// const submit = (e) => {
//   otp.value = e;
//   confirmCode();
// };
const changes = (e) => {
  otp.value = e;
};
function startTimer() {
  let presentTime = timer.value;
  let timeArray = presentTime.split(/[:]+/);
  let m = timeArray[0];
  let s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    resendCode.value = true;
    return;
  }
  timer.value = m + ":" + s;
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
onMounted(() => {
  startTimer();
});
</script>

<style></style>
