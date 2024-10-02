<template>
  <div>
    <h4 class="text-[#979797] mt-16">
      شماره همراه و رمز عبور خود را وارد نمائید
    </h4>
    <v-form class="mt-10 px-5">
      <div class="px-20">
        <v-text-field
          label="شماره همراه خود را وارد نمائید"
          variant="outlined"
          density="compact"
        ></v-text-field>
        <v-text-field
          label="رمز عبور خود را وارد نمائید"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </div>
      <BaseBtn text="ورود" class="mt-24" @clickHandler="$emit('loggedIn')" />
      <v-btn variant="text" color="primary-main" class="mt-6" @click="$emit('loginNumber')"
        >فراموشی رمز عبور یا ورود با شماره همراه</v-btn
      >
    </v-form>
  </div>
</template>

<script setup>
const emits=defineEmits(['loginNumber','loggedIn'])
</script>

<style></style>
