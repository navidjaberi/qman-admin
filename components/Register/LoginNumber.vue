<template>
  <div>
    <h4 class="text-[#979797] mt-16">
      برای ورود شماره تلفن همراه خود را وارد نمائید
    </h4>
    <v-form class="mt-10 px-5">
      <div class="px-24 w-1/3 mx-auto">
        <v-text-field
          label="شماره همراه خود را وارد نمائید"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </div>
      <BaseBtn text="ورود" class="mt-24" @clickHandler="login" />
      <v-btn
        variant="text"
        color="primary-main"
        class="mt-6"
        @click="$emit('loginPassword')"
        >ورود با رمز عبور</v-btn
      >
    </v-form>
  </div>
</template>

<script setup>
const emit = defineEmits(["login", "loginPassword"]);
const login = () => {
  emit("login");
};
</script>

<style></style>
